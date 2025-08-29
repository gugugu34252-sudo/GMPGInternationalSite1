import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary" data-testid="logo-title">
              GMPG International
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Services
            </a>
          </nav>
          <button 
            className="md:hidden text-muted-foreground hover:text-primary"
            onClick={toggleMobileMenu}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden border-t border-border ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-2 text-muted-foreground hover:text-primary"
              onClick={closeMobileMenu}
              data-testid="mobile-nav-about"
            >
              About
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 text-muted-foreground hover:text-primary"
              onClick={closeMobileMenu}
              data-testid="mobile-nav-services"
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
