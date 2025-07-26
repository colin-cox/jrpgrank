'use client';

import { useState } from 'react';
import { Game } from '@/types';

interface GameCardProps {
  game: Game;
  onVote: (gameId: string, voteType: 'up' | 'down') => Promise<void>;
  hasVoted: boolean;
}

export default function GameCard({ game, onVote, hasVoted }: GameCardProps) {
  const [isVoting, setIsVoting] = useState(false);
  const [localVotes, setLocalVotes] = useState(game.votes);

  const handleVote = async (voteType: 'up' | 'down') => {
    if (hasVoted || isVoting) return;
    
    setIsVoting(true);
    try {
      await onVote(game.id, voteType);
      setLocalVotes(prev => prev + (voteType === 'up' ? 1 : -1));
    } catch (error) {
      console.error('Error voting:', error);
    } finally {
      setIsVoting(false);
    }
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500 text-yellow-900';
    if (rank === 2) return 'bg-gray-400 text-gray-900';
    if (rank === 3) return 'bg-amber-600 text-amber-100';
    return 'bg-blue-500 text-blue-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-200">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="text-4xl mb-2">🎮</div>
            <div className="text-sm">Game Cover</div>
          </div>
        </div>
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold ${getRankBadgeColor(game.rank)}`}>
          #{game.rank}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {game.developer} • {game.releaseYear}
        </p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {game.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {game.genre.slice(0, 3).map((g, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleVote('up')}
              disabled={hasVoted || isVoting}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                hasVoted 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isVoting ? '...' : '👍'}
            </button>
            <button
              onClick={() => handleVote('down')}
              disabled={hasVoted || isVoting}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                hasVoted 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              {isVoting ? '...' : '👎'}
            </button>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{localVotes.toLocaleString()}</div>
            <div className="text-xs text-gray-500">votes</div>
          </div>
        </div>
        
        {hasVoted && (
          <div className="mt-3 text-center text-sm text-green-600 font-medium">
            ✓ You've voted for this game
          </div>
        )}
      </div>
    </div>
  );
}