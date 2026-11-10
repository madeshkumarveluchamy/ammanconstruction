const fs = require('fs');
const path = require('path');

console.log('=== THE AMMAN CONSTRUCTIONS FIDELITY & RESPONSIVENESS AUDIT ===\n');

// 1. Check all required assets
const requiredAssets = [
  'hero-bg.jpg',
  'about-legacy.jpg',
  'stats-bg.jpg',
  'project-1.jpg',
  'project-2.jpg',
  'project-3.jpg',
  'kodai-map.jpg',
  'process-bg.jpg',
  'process-mountain-2.jpg',
  'brand-logo.png',
  'reviewer-avatar.png',
];

let allAssetsOk = true;
requiredAssets.forEach(asset => {
  const p = path.join(__dirname, 'public', 'assets', asset);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  console.log(`[Asset Check] ${asset.padEnd(25)} -> ${exists ? 'EXISTS (' + size + ' bytes)' : 'MISSING'}`);
  if (!exists || size === 0) allAssetsOk = false;
});

// 2. Check CSS variables and Breakpoints in global.css
const cssContent = fs.readFileSync(path.join(__dirname, 'src', 'styles', 'global.css'), 'utf8');
const varsContent = fs.readFileSync(path.join(__dirname, 'src', 'styles', 'variables.css'), 'utf8');

const requiredBreakpoints = ['480px', '768px', '1024px', '1280px', '1536px', '1920px', '2560px'];
console.log('\n[Breakpoint Check in CSS]');
requiredBreakpoints.forEach(bp => {
  const hasBp = cssContent.includes(bp);
  console.log(`Breakpoint ${bp.padEnd(8)}: ${hasBp ? 'FOUND' : 'MISSING'}`);
});

// 3. Check Design Tokens / Hex Codes
const requiredColors = ['#FC3F04', '#FBF1E6', '#14181F'];
console.log('\n[Color Palette Check]');
requiredColors.forEach(hex => {
  const hasHex = varsContent.includes(hex) || cssContent.includes(hex);
  console.log(`Color ${hex.padEnd(10)}: ${hasHex ? 'FOUND' : 'MISSING'}`);
});

// 4. Verify Components in App.jsx
const appContent = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
const expectedSections = [
  'Navbar',
  'Hero',
  'ServicesRibbon',
  'AboutLegacy',
  'StatsBanner',
  'FeaturedProjects',
  'RootedPresence',
  'WhyChooseUs',
  'HowWeApproach',
  'Testimonials',
  'PreFooterNewsletter',
  'Footer',
  'BookingModal'
];

console.log('\n[Section Hierarchy Check]');
expectedSections.forEach((sec, idx) => {
  const present = appContent.includes(`<${sec}`);
  console.log(`Step ${(idx + 1).toString().padStart(2, '0')}: <${sec} /> -> ${present ? 'PRESENT' : 'MISSING'}`);
});

console.log('\nAudit complete.');
