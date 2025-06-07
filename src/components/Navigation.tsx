
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "single-ekat", label: "Single Ekat" },
    { id: "semi-ekat", label: "Semi Ekat" },
    { id: "double-ekat", label: "Double Ekat" },
    { id: "more", label: "More" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-patola-burgundy rounded-lg flex items-center justify-center">
              <span className="text-patola-cream font-playfair font-bold text-lg">JK</span>
            </div>
            <span className="font-playfair font-bold text-xl text-patola-dark">J K PATOLA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                  currentSection === item.id
                    ? "text-patola-burgundy"
                    : "text-foreground hover:text-patola-burgundy"
                )}
              >
                {item.label}
                {currentSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-patola-burgundy"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-patola-burgundy"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200",
                  currentSection === item.id
                    ? "text-patola-burgundy bg-patola-cream/20"
                    : "text-foreground hover:text-patola-burgundy hover:bg-patola-cream/10"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
