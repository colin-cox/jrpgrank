# Game Cover Images

## Current Status
The website currently uses custom SVG placeholder images for each JRPG game cover. These are styled, colorful placeholders that include the game title and release year.

## Image Specifications
- **Format**: SVG (scalable vector graphics)
- **Dimensions**: 300x400 pixels (3:4 aspect ratio)
- **Location**: `/public/images/`
- **Naming**: Lowercase with hyphens (e.g., `chrono-trigger.svg`)

## Current Placeholder Images
1. `chrono-trigger.svg` - Purple gradient
2. `ff7.svg` - Blue gradient  
3. `ff6.svg` - Red gradient
4. `persona5.svg` - Dark red/black gradient
5. `secret-of-mana.svg` - Green gradient
6. `xenogears.svg` - Orange/brown gradient
7. `dq11.svg` - Blue to yellow gradient
8. `radiant-historia.svg` - Purple gradient
9. `tales-symphonia.svg` - Teal gradient
10. `suikoden2.svg` - Gray gradient

## Upgrading to Real Game Covers

To replace these with actual game cover art:

1. **Source high-quality images** (preferably 600x800 or higher)
2. **Ensure legal compliance** - use only public domain or properly licensed images
3. **Optimize for web**:
   - Convert to WebP format for best performance
   - Maintain 3:4 aspect ratio
   - Target file size under 100KB each
4. **Replace files** in `/public/images/` keeping the same naming convention
5. **Update file extensions** in `/lib/games.ts` if changing from `.svg`

## Technical Implementation
- Uses Next.js `Image` component for optimization
- Automatic fallback to placeholder if image fails to load
- Responsive sizing with proper `sizes` attribute
- Priority loading for top 3 games
- Error handling with `onError` callback

## Fallback System
If an image fails to load, the component shows:
- Game controller emoji (🎮)
- Game title
- Release year
- Styled background gradient