export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
          GMPG International
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-tagline">
          Exporting Quality Medical Cannabis Globally
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
          Your trusted partner for GMP-compliant medical cannabis export from Sudan to international markets.
        </p>
        <div className="mt-10">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 text-lg font-medium hover:bg-primary/90 transition-colors"
            data-testid="hero-cta-button"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
