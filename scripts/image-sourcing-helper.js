// Legal Image Sourcing Helper
// This script helps you organize and track legal image acquisition

const games = [
  'chrono-trigger',
  'ff7', 
  'ff6',
  'persona5',
  'secret-of-mana',
  'xenogears',
  'dq11',
  'radiant-historia',
  'tales-symphonia',
  'suikoden2'
];

const imageSources = {
  'chrono-trigger': {
    officialPress: 'https://press.na.square-enix.com/CHRONO-TRIGGER',
    steamStore: 'https://store.steampowered.com/app/613830/CHRONO_TRIGGER/',
    guidelines: 'https://www.square-enix-games.com/en_US/documents/chrono-trigger-guidelines-for-livestreaming-and-posting-videos-images',
    publisher: 'Square Enix',
    notes: 'Check press kit for official screenshots'
  },
  'ff7': {
    officialPress: 'https://press.na.square-enix.com/FINAL-FANTASY-VII',
    steamStore: 'https://store.steampowered.com/app/39140/FINAL_FANTASY_VII/',
    guidelines: 'https://www.square-enix-games.com/en_US/documents/final-fantasy-vii-material-usage-guidelines',
    publisher: 'Square Enix',
    notes: 'Material usage guidelines allow limited screenshot use'
  },
  'persona5': {
    officialSite: 'https://atlus.com/persona5/',
    steamStore: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/',
    publisher: 'Atlus',
    notes: 'Check Atlus press materials'
  }
  // Add more games...
};

function generateAcquisitionPlan() {
  console.log('=== LEGAL IMAGE ACQUISITION PLAN ===\\n');
  
  games.forEach(game => {
    const sources = imageSources[game];
    if (sources) {
      console.log(`📸 ${game.toUpperCase()}`);
      console.log(`   Publisher: ${sources.publisher}`);
      if (sources.officialPress) console.log(`   Press Kit: ${sources.officialPress}`);
      if (sources.steamStore) console.log(`   Steam Store: ${sources.steamStore}`);
      if (sources.guidelines) console.log(`   Guidelines: ${sources.guidelines}`);
      console.log(`   Notes: ${sources.notes}`);
      console.log('');
    }
  });
  
  console.log('⚖️ LEGAL CHECKLIST:');
  console.log('□ Check press kits for official materials');
  console.log('□ Review publisher usage guidelines');
  console.log('□ Document image sources and licenses');
  console.log('□ Ensure compliance with fair use');
  console.log('□ Keep attribution records');
}

// Helper function to optimize images once legally obtained
function optimizeImage(inputPath, outputPath) {
  console.log(`
  📋 IMAGE OPTIMIZATION STEPS:
  1. Resize to 600x800 pixels (3:4 ratio)
  2. Convert to WebP format for best compression
  3. Target file size under 100KB
  4. Maintain good visual quality
  
  Command examples:
  # Using ImageMagick
  convert "${inputPath}" -resize 600x800^ -gravity center -extent 600x800 "${outputPath}"
  
  # Using cwebp for WebP conversion
  cwebp -q 80 "${inputPath}" -o "${outputPath.replace('.jpg', '.webp')}"
  `);
}

module.exports = {
  generateAcquisitionPlan,
  optimizeImage,
  imageSources
};