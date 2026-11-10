const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

const distDir = path.join(__dirname, 'dist');
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.bin': 'application/octet-stream',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(distDir, reqPath);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // fallback to index.html for SPA
    const indexPath = path.join(distDir, 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexPath).pipe(res);
  }
});

const PORT = 5173;
server.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const widths = [320, 360, 375, 414, 480, 768, 820, 1024, 1280, 1366, 1440, 1920, 2560];
  const outScreenshots = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outScreenshots)) fs.mkdirSync(outScreenshots);

  for (const w of widths) {
    const shotPath = path.join(outScreenshots, `shot_${w}.png`);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=${w},1200 --screenshot="${shotPath}" http://localhost:${PORT}`;
    try {
      execSync(cmd, { timeout: 15000, stdio: 'pipe' });
      const stat = fs.statSync(shotPath);
      console.log(`✓ Tested width: ${w}px -> ${stat.size} bytes screenshot saved`);
    } catch (err) {
      console.error(`✗ Error testing width ${w}:`, err.message);
    }
  }

  server.close(() => {
    console.log('Testing completed successfully.');
    process.exit(0);
  });
});
