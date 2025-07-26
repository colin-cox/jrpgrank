import { NextResponse } from 'next/server';
import { getAllGames } from '@/lib/games';
import { ApiResponse, Game } from '@/types';

export async function GET(): Promise<NextResponse<ApiResponse<Game[]>>> {
  try {
    const games = getAllGames();
    
    return NextResponse.json({
      success: true,
      data: games,
      message: 'Games retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch games'
    }, { status: 500 });
  }
}