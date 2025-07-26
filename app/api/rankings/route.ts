import { NextResponse } from 'next/server';
import { getRankings } from '@/lib/games';
import { ApiResponse, RankingData } from '@/types';

export async function GET(): Promise<NextResponse<ApiResponse<RankingData>>> {
  try {
    const games = getRankings();
    const totalVotes = games.reduce((sum, game) => sum + game.votes, 0);
    
    const rankingData: RankingData = {
      games,
      totalVotes,
      lastUpdated: new Date()
    };
    
    return NextResponse.json({
      success: true,
      data: rankingData,
      message: 'Rankings retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching rankings:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch rankings'
    }, { status: 500 });
  }
}