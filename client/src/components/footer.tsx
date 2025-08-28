export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="footer-company-name">
              GMPG International
            </h3>
            <p className="text-background/80 leading-relaxed" data-testid="footer-description">
              Your trusted partner for GMP-compliant medical cannabis export from Sudan to international markets.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4" data-testid="footer-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4" data-testid="footer-contact-title">
              Contact Information
            </h4>
            <div className="space-y-2 text-background/80">
              <p data-testid="footer-email">info@GMPGinternational.com</p>
              <p data-testid="footer-address">Khartoum, Sudan</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80" data-testid="footer-copyright">
            © 2025 GMPG International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
