
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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

// Mock data - replace with actual images from folders
const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "single-ekat",
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800",
    title: "Traditional Single Ekat Patola"
  },
  {
    id: "2",
    category: "semi-ekat",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=800",
    title: "Elegant Semi Ekat Design"
  },
  {
    id: "3",
    category: "double-ekat",
    price: "₹45,000",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800",
    title: "Premium Double Ekat Masterpiece"
  },
  {
    id: "4",
    category: "single-ekat",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800",
    title: "Classic Single Ekat Pattern"
  },
  {
    id: "5",
    category: "more",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800",
    title: "Special Collection Item"
  },
  {
    id: "6",
    category: "double-ekat",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800",
    title: "Luxurious Double Ekat Creation"
  }
];

const Gallery = ({ filter }: GalleryProps) => {
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (filter === "all" || filter === "featured") {
      setFilteredItems(galleryItems.slice(0, 6));
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === filter));
    }
  }, [filter]);

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
