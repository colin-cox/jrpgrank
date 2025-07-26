export interface Game {
  id: string;
  title: string;
  releaseYear: number;
  developer: string;
  publisher: string;
  platforms: string[];
  coverImageUrl: string;
  description: string;
  genre: string[];
  votes: number;
  rank: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vote {
  id: string;
  gameId: string;
  sessionId: string;
  userId?: string;
  voteType: 'up' | 'down';
  timestamp: Date;
}

export interface VoteRequest {
  gameId: string;
  voteType: 'up' | 'down';
}

export interface RankingData {
  games: Game[];
  totalVotes: number;
  lastUpdated: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}