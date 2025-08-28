import { Package, Shield, Globe } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Medical Grade Products Export",
      description: "Professional export services for medical-grade products with full regulatory compliance and quality assurance."
    },
    {
      icon: Shield,
      title: "GMP-Compliant Supply Chain",
      description: "Complete supply chain management following GMP standards with full quality control and traceability."
    },
    {
      icon: Globe,
      title: "International Trade Consulting",
      description: "Expert regulatory compliance consulting and documentation services for international trade operations."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-description">
            Professional solutions for international trade and regulatory compliance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 shadow-sm border border-border hover:shadow-md transition-shadow rounded"
                data-testid={`service-card-${index}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center mb-6 rounded ${
                  index === 0 ? 'bg-primary/10' : 
                  index === 1 ? 'bg-accent/10' : 
                  'bg-secondary/50'
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    index === 0 ? 'text-primary' : 
                    index === 1 ? 'text-accent' : 
                    'text-primary'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
