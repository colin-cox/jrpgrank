import { Vote } from '@/types';

// In-memory storage for votes (replace with database later)
let votes: Vote[] = [];

export function hasUserVoted(gameId: string, sessionId: string): boolean {
  return votes.some(vote => vote.gameId === gameId && vote.sessionId === sessionId);
}

export function addVote(gameId: string, sessionId: string, voteType: 'up' | 'down'): Vote {
  const vote: Vote = {
    id: `vote-${Date.now()}-${Math.random()}`,
    gameId,
    sessionId,
    voteType,
    timestamp: new Date()
  };
  
  votes.push(vote);
  return vote;
}

export function getUserVotes(sessionId: string): Vote[] {
  return votes.filter(vote => vote.sessionId === sessionId);
}

export function getGameVotes(gameId: string): Vote[] {
  return votes.filter(vote => vote.gameId === gameId);
}

export function generateSessionId(): string {
  return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}