
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import galleryDataFromFile from '@/gallery-manifest.json';

interface GalleryItem {
  id: string;
  category: string;
  price: string;
  image: string;
  title: string;
}

interface GalleryProps {
  filter: string;
}

const Gallery = ({ filter }: GalleryProps) => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(galleryDataFromFile);
  // const [isLoading, setIsLoading] = useState(true); // Removed
  // const [error, setError] = useState<string | null>(null); // Removed
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // useEffect for fetching data removed

  useEffect(() => {
    // if (galleryItems.length === 0) return; // Data is now loaded synchronously, this check might be redundant or behave differently
    // If galleryDataFromFile could be empty initially, this check might still be useful,
    // but typically imported JSON is available immediately.
    // For robustness, let's keep it, or ensure galleryDataFromFile is never an empty array if it implies "not loaded yet".
    // Assuming galleryDataFromFile is the actual array of items or an empty array if the manifest was empty.

    if (filter === "all" || filter === "featured") {
      setFilteredItems(galleryItems.slice(0, 6)); // Or however 'featured' is determined
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === filter));
    }
  }, [filter, galleryItems]);

  const getTitle = () => {
    switch (filter) {
      case "single-ekat":
        return "Single Ekat Collection";
      case "semi-ekat":
        return "Semi Ekat Collection";
      case "double-ekat":
        return "Double Ekat Collection";
      case "more":
        return "Special Collection";
      default:
        return "Featured Collection";
    }
  };

  // isLoading and error JSX removed

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-patola-dark mb-4">
            {getTitle()}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our exquisite collection of handwoven Patola textiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item cursor-pointer"
              onClick={() => setSelectedItem(item)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="price-overlay">
                <h3 className="font-playfair text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-patola-gold font-semibold text-xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/60 text-lg">
              Coming soon - New pieces being added to this collection
            </p>
          </div>
        )}
      </div>

      {/* Modal for enlarged view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-4xl w-full bg-background rounded-lg overflow-hidden">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-bold text-patola-dark mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-patola-gold font-semibold text-3xl mb-4">
                {selectedItem.price}
              </p>
              <p className="text-foreground/70">
                Authentic handwoven Patola textile representing centuries of traditional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
