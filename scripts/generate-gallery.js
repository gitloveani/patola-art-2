import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public'); // Still needed for reading images
const outputManifestPath = path.join(process.cwd(), 'src', 'gallery-manifest.json');
const imageBasePath = '/'; // Vite base path

const categories = ['single-ekat', 'semi-ekat', 'double-ekat', 'more'];
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

const galleryItems = [];
let itemId = 1;

console.log('Starting gallery generation...');
console.log(`Public directory: ${publicDir}`);

categories.forEach(category => {
  const categoryDir = path.join(publicDir, category);
  console.log(`Processing category: ${category}, directory: ${categoryDir}`);

  if (fs.existsSync(categoryDir)) {
    try {
      const files = fs.readdirSync(categoryDir);
      console.log(`Files in ${category}: ${files.join(', ')}`);

      files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const priceString = path.basename(file, ext);
          const price = parseInt(priceString, 10);

          if (!isNaN(price)) {
            const formattedPrice = `₹${price.toLocaleString('en-IN')}`;
            const imagePath = `${imageBasePath}${category}/${file}`;

            galleryItems.push({
              id: String(itemId++),
              category: category,
              price: formattedPrice,
              image: imagePath,
              // You can create more descriptive titles if needed
              title: `${category.replace('-', ' ')} Patola ${itemId -1}`
            });
            console.log(`Added: ${imagePath}, Price: ${formattedPrice}`);
          } else {
            console.warn(`Could not parse price from filename: ${file} in category ${category}`);
          }
        }
      });
    } catch (err) {
      console.error(`Error reading directory ${categoryDir}:`, err);
    }
  } else {
    console.warn(`Category directory not found: ${categoryDir}. Skipping.`);
  }
});

try {
  fs.writeFileSync(outputManifestPath, JSON.stringify(galleryItems, null, 2));
  console.log(`Gallery manifest created successfully at ${outputManifestPath} with ${galleryItems.length} items.`); // Path in log updated
} catch (err) {
  console.error('Error writing gallery manifest:', err);
  process.exit(1); // Exit with error
}

if (galleryItems.length === 0) {
  console.warn('No items were added to the gallery manifest. Make sure images are present in the public/<category> folders and named correctly (e.g., public/single-ekat/15000.jpg).');
}
