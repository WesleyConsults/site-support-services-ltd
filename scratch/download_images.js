const fs = require('fs');
const path = require('path');
const https = require('https');

const imageList = [
  {
    name: 'catering-hero.jpg',
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'catering-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'qhse-hero.jpg',
    url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'qhse-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'equipment-hero.jpg',
    url: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'equipment-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'accommodation-hero.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'accommodation-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'camp-hero.jpg',
    url: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'camp-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'manpower-hero.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'manpower-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'laundry-hero.jpg',
    url: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'laundry-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'logistics-hero.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'logistics-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'supply-hero.jpg',
    url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'supply-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'travel-hero.jpg',
    url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'travel-gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop'
  }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'services');

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
      console.error(e.message);
    }
  }
  console.log('All downloads finished.');
}

run();
