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
              src="/src/assets/lab-team.png" 
              alt="GMPG International professional laboratory team" 
              className="w-full h-auto shadow-lg rounded"
              data-testid="about-image"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-paragraph-1">
              GMPG International specializes in GMP-compliant medical grade products and precursors for international markets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-paragraph-2">
              We maintain the highest standards of Good Manufacturing Practice throughout our supply chain, ensuring regulatory compliance and consistent quality.
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
