# Legal Screenshot Creation Guide

## 📸 Taking Your Own Screenshots

If you own these games, you can legally take your own screenshots for your website. Here's how to do it properly:

### For Modern PC Versions

#### Steam Screenshots
1. **Launch game through Steam**
2. **Press F12** during gameplay to take screenshot
3. **Navigate to Steam Library** → View Screenshots
4. **Show on Disk** to find files in: 
   ```
   Steam/userdata/[user_id]/760/remote/[app_id]/screenshots/
   ```

#### Manual Screenshots
- **Windows**: Use Windows Key + Print Screen
- **macOS**: Use Cmd + Shift + 4
- **Dedicated tools**: OBS Studio, Fraps, or Greenshot

### Screenshot Strategy for Each Game

#### 1. Chrono Trigger
- **Best scenes**: Time portal effects, world map, Millennial Fair
- **Visual highlights**: Luminaire spell, Epoch time machine
- **Iconic moments**: Frog's transformation, Lavos emergence

#### 2. Final Fantasy VII
- **Best scenes**: Midgar cityscape, Highwind airship, summon animations
- **Visual highlights**: Limit Breaks, materia effects, battle screens
- **Iconic moments**: Meteor spell, Gold Saucer, motorcycle chase

#### 3. Persona 5
- **Best scenes**: Metaverse Palace interiors, All-Out Attack screens
- **Visual highlights**: Persona summoning, Tokyo cityscape, UI elements
- **Iconic moments**: Calling card scenes, phantom thief costumes

### Technical Requirements

#### Screenshot Quality
- **Resolution**: At least 1920x1080 
- **Format**: PNG for best quality, JPG for smaller files
- **Compression**: Minimal compression for source images

#### Post-Processing
1. **Crop to 3:4 aspect ratio** (600x800 for web)
2. **Enhance contrast/colors** if needed
3. **Remove UI elements** if desired (health bars, menus)
4. **Convert to WebP** for web optimization

### Legal Considerations

#### Fair Use Guidelines
- ✅ **Allowed**: Screenshots from games you own for commentary/review
- ✅ **Allowed**: Non-commercial educational use
- ✅ **Allowed**: Transformative use (rankings, analysis)
- ❌ **Avoid**: Commercial use without permission
- ❌ **Avoid**: Distributing full game content

#### Best Practices
1. **Take original screenshots** - don't download from other sources
2. **Use minimal portions** - single scenes, not full cutscenes
3. **Add commentary** - explain why the image represents the game
4. **Credit properly** - mention game title, developer, publisher
5. **Respect guidelines** - check each publisher's specific policies

### Image Optimization Workflow

```bash
# 1. Resize image to web dimensions
convert screenshot.png -resize 600x800^ -gravity center -extent 600x800 game-name.jpg

# 2. Convert to WebP for smaller file size
cwebp -q 80 game-name.jpg -o game-name.webp

# 3. Verify file size is under 100KB
ls -lh game-name.webp
```

### Alternative: AI-Generated Game-Inspired Art

If you want to avoid copyright issues entirely:

1. **Use AI art generators** like Midjourney, DALL-E, or Stable Diffusion
2. **Create prompts** inspired by game themes, not copying exact scenes
3. **Examples**:
   - "Fantasy time travel portal in anime art style"
   - "Steampunk city with flying vehicles, digital art"
   - "Modern Tokyo nightscape with supernatural elements"

### Game Availability for Screenshots

#### Currently Available on PC
- ✅ Chrono Trigger (Steam, mobile)
- ✅ Final Fantasy VII (Steam, Epic)
- ✅ Final Fantasy VI (Steam, mobile)
- ✅ Persona 5 Royal (Steam, Epic)
- ✅ Secret of Mana (Steam, Switch)
- ✅ Dragon Quest XI (Steam, Epic)
- ✅ Tales of Symphonia (Steam)

#### Harder to Access
- ⚠️ Xenogears (PlayStation only, emulation)
- ⚠️ Radiant Historia (Nintendo DS/3DS)
- ⚠️ Suikoden II (PlayStation, limited availability)

### Quick Start Checklist

□ **Identify games you own**
□ **Set up screenshot tools**
□ **Plan iconic scenes to capture**
□ **Take high-quality screenshots**
□ **Edit and optimize for web**
□ **Document sources and rights**
□ **Replace placeholder images**
□ **Test website with new images**

This approach ensures you have full legal rights to all images on your website!