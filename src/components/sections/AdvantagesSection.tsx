import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { advantages } from "@/data/content";

const AdvantagesSection = () => {
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
      <div className="w-full px-4 sm:px-6 lg:px-12 relative">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-sm tracking-[0.3em] uppercase text-accent">Преимущества</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Почему AVM Motors</h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl">
            Опыт, надежность и прозрачность на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((item, idx) => {
            const colors = getColorClasses(item.color);
            return (
              <Card
                key={idx}
                className="p-6 bg-card border-border hover:border-accent transition-all group cursor-pointer hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all ${colors.bg} ${colors.hover}`}>
                  <Icon name={item.icon} size={28} className={colors.text} />
                </div>
                <h3 className="text-lg font-bold mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
