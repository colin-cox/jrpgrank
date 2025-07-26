import { Game } from '@/types';

// Initial seed data for top 10 JRPGs
export const initialGames: Omit<Game, 'id' | 'votes' | 'rank' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: "Chrono Trigger",
    releaseYear: 1995,
    developer: "Square",
    publisher: "Square",
    platforms: ["SNES", "PlayStation", "Nintendo DS", "PC", "Mobile"],
    coverImageUrl: "/images/chrono-trigger.svg",
    description: "A time-traveling adventure featuring multiple endings and innovative gameplay mechanics.",
    genre: ["JRPG", "Time Travel", "Adventure"]
  },
  {
    title: "Final Fantasy VII",
    releaseYear: 1997,
    developer: "Square",
    publisher: "Square",
    platforms: ["PlayStation", "PC", "Switch", "PS4", "Xbox One"],
    coverImageUrl: "/images/ff7.svg",
    description: "Cloud Strife's epic journey to save the planet from Sephiroth and Shinra Corporation.",
    genre: ["JRPG", "Fantasy", "Steampunk"]
  },
  {
    title: "Final Fantasy VI",
    releaseYear: 1994,
    developer: "Square",
    publisher: "Square",
    platforms: ["SNES", "PlayStation", "GBA", "PC", "Mobile"],
    coverImageUrl: "/images/ff6.svg",
    description: "An ensemble cast fights against the mad emperor Kefka in a steampunk fantasy world.",
    genre: ["JRPG", "Fantasy", "Steampunk"]
  },
  {
    title: "Persona 5",
    releaseYear: 2016,
    developer: "Atlus",
    publisher: "Atlus",
    platforms: ["PlayStation 3", "PlayStation 4", "PlayStation 5", "Switch", "PC"],
    coverImageUrl: "/images/persona5.svg",
    description: "Stylish modern JRPG about phantom thieves changing corrupt hearts in Tokyo.",
    genre: ["JRPG", "Modern", "Social Simulation"]
  },
  {
    title: "Secret of Mana",
    releaseYear: 1993,
    developer: "Square",
    publisher: "Square",
    platforms: ["SNES", "PlayStation 4", "Switch", "PC"],
    coverImageUrl: "/images/secret-of-mana.svg",
    description: "Action RPG featuring real-time combat and beautiful sprite graphics.",
    genre: ["Action RPG", "Fantasy", "Multiplayer"]
  },
  {
    title: "Xenogears",
    releaseYear: 1998,
    developer: "Square",
    publisher: "Square",
    platforms: ["PlayStation"],
    coverImageUrl: "/images/xenogears.svg",
    description: "Complex narrative combining religious themes, mecha combat, and philosophical questions.",
    genre: ["JRPG", "Mecha", "Philosophy"]
  },
  {
    title: "Dragon Quest XI",
    releaseYear: 2017,
    developer: "Square Enix",
    publisher: "Square Enix",
    platforms: ["PlayStation 4", "Switch", "PC", "Xbox One"],
    coverImageUrl: "/images/dq11.svg",
    description: "Traditional JRPG celebrating the series' 30th anniversary with modern polish.",
    genre: ["JRPG", "Traditional", "Fantasy"]
  },
  {
    title: "Radiant Historia",
    releaseYear: 2010,
    developer: "Atlus",
    publisher: "Atlus",
    platforms: ["Nintendo DS", "3DS"],
    coverImageUrl: "/images/radiant-historia.svg",
    description: "Time manipulation mechanics and strategic grid-based combat system.",
    genre: ["JRPG", "Time Travel", "Strategy"]
  },
  {
    title: "Tales of Symphonia",
    releaseYear: 2003,
    developer: "Namco Tales Studio",
    publisher: "Namco",
    platforms: ["GameCube", "PlayStation 2", "PC", "PlayStation 3"],
    coverImageUrl: "/images/tales-symphonia.svg",
    description: "Real-time combat system and compelling story about saving two worlds.",
    genre: ["JRPG", "Real-time Combat", "Fantasy"]
  },
  {
    title: "Suikoden II",
    releaseYear: 1998,
    developer: "Konami",
    publisher: "Konami",
    platforms: ["PlayStation"],
    coverImageUrl: "/images/suikoden2.svg",
    description: "Political intrigue and war featuring 108 recruitable characters.",
    genre: ["JRPG", "Political", "War"]
  }
];

// In-memory storage for development (replace with database later)
let games: Game[] = initialGames.map((game, index) => ({
  ...game,
  id: `game-${index + 1}`,
  votes: Math.floor(Math.random() * 1000) + 500, // Random initial votes
  rank: index + 1,
  createdAt: new Date(),
  updatedAt: new Date()
}));

export function getAllGames(): Game[] {
  return games.sort((a, b) => b.votes - a.votes).map((game, index) => ({
    ...game,
    rank: index + 1
  }));
}

export function getGameById(id: string): Game | undefined {
  return games.find(game => game.id === id);
}

export function updateGameVotes(gameId: string, voteChange: number): Game | null {
  const gameIndex = games.findIndex(game => game.id === gameId);
  if (gameIndex === -1) return null;
  
  games[gameIndex].votes = Math.max(0, games[gameIndex].votes + voteChange);
  games[gameIndex].updatedAt = new Date();
  
  return games[gameIndex];
}

export function getRankings(): Game[] {
  return getAllGames();
}