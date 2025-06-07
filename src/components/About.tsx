
const About = () => {
  return (
    <section className="py-20 bg-patola-cream/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-patola-dark mb-8">
            The Art of Patola
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="text-left">
              <h3 className="font-playfair text-2xl font-semibold text-patola-burgundy mb-4">
                Heritage & Craftsmanship
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Patola is a double ikat silk fabric, traditionally woven in Gujarat, India. This ancient art form represents one of the finest traditions in Indian textiles, where both warp and weft threads are tie-dyed before weaving.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Each piece is a masterwork of precision, taking months to complete and representing generations of inherited skill and cultural heritage.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-playfair text-2xl font-semibold text-patola-burgundy mb-4">
                J K PATOLA Legacy
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our collection celebrates this magnificent tradition, offering authentic Patola textiles that embody the highest standards of quality and artisanship.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                From Single Ekat to Double Ekat varieties, each piece in our collection tells a story of cultural richness and timeless beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
