
import { Instagram, Phone } from "lucide-react";

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
                <svg className="w-8 h-8 text-patola-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.462-1.555 4.114-.659.653-2.257 1.386-4.114 1.555-1.858.169-7.747.169-9.605 0-1.858-.169-3.462-.896-4.114-1.555-.653-.659-1.386-2.257-1.555-4.114-.169-1.858-.169-7.747 0-9.605.169-1.858.896-3.462 1.555-4.114.659-.653 2.257-1.386 4.114-1.555 1.858-.169 7.747-.169 9.605 0 1.858.169 3.462.896 4.114 1.555.653.659 1.386 2.257 1.555 4.114.169 1.858.169 7.747 0 9.605z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 1.621c2.508 0 4.541 2.033 4.541 4.541S14.508 16.541 12 16.541 7.459 14.508 7.459 12 9.492 7.459 12 7.459z"/>
                </svg>
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
