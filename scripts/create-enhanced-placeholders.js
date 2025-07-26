// Enhanced placeholder image generator
// This script creates more detailed SVG placeholders with game-inspired themes

const games = [
  {
    name: 'chrono-trigger',
    title: 'CHRONO TRIGGER',
    year: '1995',
    theme: 'time',
    colors: ['#6366f1', '#8b5cf6', '#a855f7'],
    symbols: ['⏰', '⚡', '🌟']
  },
  {
    name: 'ff7',
    title: 'FINAL FANTASY VII',
    year: '1997',
    theme: 'fantasy',
    colors: ['#1e40af', '#3b82f6', '#60a5fa'],
    symbols: ['⚔️', '🗲', '✨']
  },
  {
    name: 'persona5',
    title: 'PERSONA 5',
    year: '2016',
    theme: 'modern',
    colors: ['#991b1b', '#dc2626', '#ef4444'],
    symbols: ['🎭', '🌃', '💫']
  }
  // Add more games as needed
];

function generateEnhancedSVG(game) {
  return `<svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad-${game.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${game.colors[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${game.colors[1]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${game.colors[2]};stop-opacity:1" />
    </linearGradient>
    <pattern id="pattern-${game.name}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/>
    </pattern>
  </defs>
  <rect width="300" height="400" fill="url(#grad-${game.name})"/>
  <rect width="300" height="400" fill="url(#pattern-${game.name})"/>
  
  <!-- Game symbol -->
  <text x="150" y="120" font-family="Arial, sans-serif" font-size="48" text-anchor="middle">
    ${game.symbols[0]}
  </text>
  
  <!-- Game title -->
  <text x="150" y="200" font-family="Arial, sans-serif" font-size="18" font-weight="bold" 
        fill="white" text-anchor="middle" stroke="rgba(0,0,0,0.3)" stroke-width="1">
    ${game.title}
  </text>
  
  <!-- Release year -->
  <text x="150" y="230" font-family="Arial, sans-serif" font-size="14" 
        fill="rgba(255,255,255,0.8)" text-anchor="middle">
    ${game.year}
  </text>
  
  <!-- Decorative elements -->
  <circle cx="50" cy="350" r="15" fill="rgba(255,255,255,0.2)"/>
  <circle cx="250" cy="350" r="15" fill="rgba(255,255,255,0.2)"/>
  
  <!-- Theme indicator -->
  <text x="150" y="320" font-family="Arial, sans-serif" font-size="12" 
        fill="rgba(255,255,255,0.6)" text-anchor="middle">
    ${game.theme.toUpperCase()}
  </text>
</svg>`;
}

console.log('Enhanced placeholder generator ready!');