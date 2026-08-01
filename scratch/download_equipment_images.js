const fs = require('fs');
const path = require('path');
const https = require('https');

const imageList = [
  {
    name: '16-18-ton-heavy-duty-forklift.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: '3-5-ton-industrial-forklift.jpg',
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: '36-ton-roro-tractor.jpg',
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: '36-ton-terminal-tractor.jpg',
    url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'roro-trailer-rtl.jpg',
    url: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'terminal-trailer-ttl.jpg',
    url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: '46-ton-reach-stacker-rst.jpg',
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop'
  }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'equipment');

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, filePath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved: ${filePath}`);
        resolve();
      });
    });
    request.on('error', (err) => reject(err));
  });
}

async function run() {
  for (const img of imageList) {
    const dest = path.join(targetDir, img.name);
    try {
      await download(img.url, dest);
    } catch (e) {
      console.error(`Error downloading ${img.name}:`, e.message);
    }
  }
  console.log('Equipment image downloads completed.');
}

run();
