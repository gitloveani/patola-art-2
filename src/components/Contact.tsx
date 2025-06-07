
import { Instagram, Pinterest, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 min-h-screen bg-patola-cream/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-patola-dark mb-8">
            Contact Us
          </h2>
          <p className="text-foreground/70 text-lg mb-16">
            Get in touch to explore our exclusive Patola collection
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-patola-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-patola-cream" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-patola-dark mb-4">
                Instagram
              </h3>
              <p className="text-foreground/70 mb-4">
                Follow us for daily updates and new collections
              </p>
              <a 
                href="https://instagram.com/jkpatola" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-patola-burgundy font-semibold hover:text-patola-gold transition-colors duration-200"
              >
                @jkpatola
              </a>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-patola-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Pinterest className="w-8 h-8 text-patola-cream" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-patola-dark mb-4">
                Pinterest
              </h3>
              <p className="text-foreground/70 mb-4">
                Discover design inspiration and our curated boards
              </p>
              <a 
                href="https://pinterest.com/jkpatola" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-patola-burgundy font-semibold hover:text-patola-gold transition-colors duration-200"
              >
                J K Patola
              </a>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-patola-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-patola-cream" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-patola-dark mb-4">
                Phone
              </h3>
              <p className="text-foreground/70 mb-4">
                Call us for personalized assistance
              </p>
              <a 
                href="tel:+919876543210" 
                className="text-patola-burgundy font-semibold hover:text-patola-gold transition-colors duration-200"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="mt-16 bg-background rounded-lg p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-patola-dark mb-6">
              Visit Our Studio
            </h3>
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Experience our collection in person at our traditional studio in Gujarat. 
              We welcome appointments for private viewings and consultations. 
              Witness the artisans at work and learn about the intricate process of Patola weaving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
