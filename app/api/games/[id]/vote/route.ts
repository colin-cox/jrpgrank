import { NextResponse } from 'next/server';
import { updateGameVotes } from '@/lib/games';
import { addVote, hasUserVoted } from '@/lib/voting';
import { ApiResponse, VoteRequest } from '@/types';
import { cookies } from 'next/headers';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse<{ votes: number; hasVoted: boolean }>>> {
  try {
    const { voteType }: VoteRequest = await request.json();
    const gameId = params.id;
    
    // Get or create session ID
    const cookieStore = cookies();
    let sessionId = cookieStore.get('sessionId')?.value;
    
    if (!sessionId) {
      sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    // Check if user has already voted for this game
    if (hasUserVoted(gameId, sessionId)) {
      return NextResponse.json({
        success: false,
        error: 'You have already voted for this game'
      }, { status: 400 });
    }
    
    // Validate vote type
    if (voteType !== 'up' && voteType !== 'down') {
      return NextResponse.json({
        success: false,
        error: 'Invalid vote type'
      }, { status: 400 });
    }
    
    // Add vote and update game
    addVote(gameId, sessionId, voteType);
    const voteChange = voteType === 'up' ? 1 : -1;
    const updatedGame = updateGameVotes(gameId, voteChange);
    
    if (!updatedGame) {
      return NextResponse.json({
        success: false,
        error: 'Game not found'
      }, { status: 404 });
    }
    
    const response = NextResponse.json({
      success: true,
      data: {
        votes: updatedGame.votes,
        hasVoted: true
      },
      message: 'Vote recorded successfully'
    });
    
    // Set session cookie if it doesn't exist
    if (!cookieStore.get('sessionId')?.value) {
      response.cookies.set('sessionId', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      });
    }
    
    return response;
  } catch (error) {
    console.error('Error recording vote:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to record vote'
    }, { status: 500 });
  }
}