import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { services } from "@/data/content";

const ServicesSection = () => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
      'accent': { bg: 'bg-accent/10', text: 'text-accent', hover: 'group-hover:bg-accent/20' },
      'blue-accent': { bg: 'bg-blue-accent/10', text: 'text-blue-accent', hover: 'group-hover:bg-blue-accent/20' },
      'green-accent': { bg: 'bg-green-accent/10', text: 'text-green-accent', hover: 'group-hover:bg-green-accent/20' },
      'orange-accent': { bg: 'bg-orange-accent/10', text: 'text-orange-accent', hover: 'group-hover:bg-orange-accent/20' },
    };
    return colorMap[color] || colorMap['accent'];
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="w-full px-6 lg:px-12">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-sm tracking-[0.3em] uppercase text-accent">Сервис</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Полный цикл обслуживания</h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl">
            Что вы получаете до, во время и после покупки с нами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const colors = getColorClasses(service.color);
            return (
              <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${colors.bg} ${colors.hover}`}>
                  <Icon name={service.icon} size={32} className={colors.text} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
