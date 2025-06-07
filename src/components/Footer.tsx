
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-patola-dark text-patola-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-patola-burgundy rounded-lg flex items-center justify-center">
                <span className="font-playfair font-bold text-lg">JK</span>
              </div>
              <span className="font-playfair font-bold text-xl">J K PATOLA</span>
            </div>
            <p className="text-patola-cream/70 leading-relaxed max-w-md">
              Preserving the ancient art of Patola weaving through authentic, 
              handcrafted textiles that celebrate India's rich cultural heritage.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Stay in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-patola-gold" />
                <a 
                  href="https://instagram.com/jkpatola_official" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-patola-cream/80 hover:text-patola-gold transition-colors duration-200"
                >
                  @jkpatola_official
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-patola-gold" />
                <a 
                  href="tel:+919123456789" 
                  className="text-patola-cream/80 hover:text-patola-gold transition-colors duration-200"
                >
                  +91 91234 56789
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-patola-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:info@jkpatola.com" 
                  className="text-patola-cream/80 hover:text-patola-gold transition-colors duration-200"
                >
                  info@jkpatola.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-patola-cream/20 mt-8 pt-8 text-center">
          <p className="text-patola-cream/60 text-sm">
            © 2024 J K PATOLA. All rights reserved. | Handcrafted with tradition and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
