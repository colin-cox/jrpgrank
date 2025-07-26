'use client';

import { useState, useEffect } from 'react';
import { Game } from '@/types';
import GameCard from './GameCard';

export default function RankingList() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [votedGames, setVotedGames] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/games');
      const data = await response.json();
      
      if (data.success) {
        setGames(data.data);
      } else {
        setError(data.error || 'Failed to fetch games');
      }
    } catch (err) {
      setError('Failed to fetch games');
      console.error('Error fetching games:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (gameId: string, voteType: 'up' | 'down') => {
    try {
      const response = await fetch(`/api/games/${gameId}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voteType }),
      });

      const data = await response.json();

      if (data.success) {
        setVotedGames(prev => new Set(prev).add(gameId));
        // Refresh the games list to get updated rankings
        await fetchGames();
      } else {
        throw new Error(data.error || 'Failed to vote');
      }
    } catch (err) {
      console.error('Error voting:', err);
      throw err;
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="h-10 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-lg font-medium mb-4">
          Error: {error}
        </div>
        <button
          onClick={fetchGames}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Top 10 JRPGs of All Time</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Community-voted rankings of the greatest Japanese RPGs ever created. 
          Cast your vote to influence the rankings!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onVote={handleVote}
            hasVoted={votedGames.has(game.id)}
          />
        ))}
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        Rankings update in real-time based on community votes
      </div>
    </div>
  );
}