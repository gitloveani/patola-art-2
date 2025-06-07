
const Hero = () => {
  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          J K PATOLA
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Exquisite Traditional Textile Art
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
          Discover the timeless beauty of authentic Patola weaves, where centuries-old craftsmanship meets contemporary elegance
        </p>
      </div>
    </section>
  );
};

export default Hero;
