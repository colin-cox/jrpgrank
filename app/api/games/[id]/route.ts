import { NextResponse } from 'next/server';
import { getGameById } from '@/lib/games';
import { ApiResponse, Game } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse<Game>>> {
  try {
    const game = getGameById(params.id);
    
    if (!game) {
      return NextResponse.json({
        success: false,
        error: 'Game not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: game,
      message: 'Game retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching game:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch game'
    }, { status: 500 });
  }
}