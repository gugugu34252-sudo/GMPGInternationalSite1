export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="about-title">
            About GMPG International
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional medical cannabis facility" 
              className="w-full h-auto shadow-lg rounded"
              data-testid="about-image"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-paragraph-1">
              GMPG International specializes in the export of GMP-compliant medical-grade cannabis from Sudan to international markets. Our commitment to quality, compliance, and reliability has positioned us as a trusted partner in the global medical cannabis industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-paragraph-2">
              We maintain the highest standards of Good Manufacturing Practice (GMP) throughout our entire supply chain, ensuring that our products meet the stringent regulatory requirements of international markets while delivering consistent, pharmaceutical-grade medical cannabis with proper medical grade labeling.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-paragraph-3">
              Our experienced team understands the complex regulatory landscape of international cannabis trade and works closely with clients to ensure seamless, compliant transactions from source to destination.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <div className="text-center" data-testid="stat-gmp">
                <div className="text-2xl font-bold text-primary">GMP</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
              <div className="text-center" data-testid="stat-countries">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center" data-testid="stat-support">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
