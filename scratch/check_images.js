const fs = require('fs');
const path = require('path');

const services = [
  { slug: 'onshore-offshore-remote-catering', hero: 'catering-hero.jpg', gallery: ['catering-gallery-1.jpg'] },
  { slug: 'qhse-consultancy', hero: 'qhse-hero.jpg', gallery: ['qhse-gallery-1.jpg'] },
  { slug: 'equipment-vehicle-rental', hero: 'equipment-hero.jpg', gallery: ['equipment-gallery-1.jpg'] },
  { slug: 'office-accommodation-rental', hero: 'accommodation-hero.jpg', gallery: ['accommodation-gallery-1.jpg'] },
  { slug: 'facilities-camp-management', hero: 'camp-hero.jpg', gallery: ['camp-gallery-1.jpg'] },
  { slug: 'manpower-management', hero: 'manpower-hero.jpg', gallery: ['manpower-gallery-1.jpg'] },
  { slug: 'laundry-janitorial-fumigation', hero: 'laundry-hero.jpg', gallery: ['laundry-gallery-1.jpg'] },
  { slug: 'supply-chain-logistics', hero: 'logistics-hero.jpg', gallery: ['logistics-gallery-1.jpg'] },
  { slug: 'wholesale-retail-supply', hero: 'supply-hero.jpg', gallery: ['supply-gallery-1.jpg'] },
  { slug: 'travel-visa-acquisition', hero: 'travel-hero.jpg', gallery: ['travel-gallery-1.jpg'] }
];

const equipment = [
  '16-18-ton-heavy-duty-forklift.jpg',
  '3-5-ton-industrial-forklift.jpg',
  '36-ton-roro-tractor.jpg',
  '36-ton-terminal-tractor.jpg',
  'roro-trailer-rtl.jpg',
  'terminal-trailer-ttl.jpg',
  '46-ton-reach-stacker-rst.jpg'
];

console.log('--- Checking Service Images ---');
services.forEach(s => {
  const heroPath = path.join(__dirname, '..', 'public', 'images', 'services', s.hero);
  const heroExists = fs.existsSync(heroPath);
  const heroSize = heroExists ? fs.statSync(heroPath).size : 0;
  console.log(`[Service: ${s.slug}] Hero: ${s.hero} -> Exists: ${heroExists} (${(heroSize/1024).toFixed(1)} KB)`);

  s.gallery.forEach(g => {
    const gPath = path.join(__dirname, '..', 'public', 'images', 'services', g);
    const gExists = fs.existsSync(gPath);
    const gSize = gExists ? fs.statSync(gPath).size : 0;
    console.log(`  Gallery: ${g} -> Exists: ${gExists} (${(gSize/1024).toFixed(1)} KB)`);
  });
});

console.log('\n--- Checking Equipment Images ---');
equipment.forEach(e => {
  const ePath = path.join(__dirname, '..', 'public', 'images', 'equipment', e);
  const eExists = fs.existsSync(ePath);
  const eSize = eExists ? fs.statSync(ePath).size : 0;
  console.log(`[Equipment: ${e}] -> Exists: ${eExists} (${(eSize/1024).toFixed(1)} KB)`);
});
