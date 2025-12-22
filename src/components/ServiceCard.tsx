import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color: 'accent' | 'blue-accent' | 'green-accent' | 'orange-accent';
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => {
  const colorClasses = {
    'accent': {
      bg: 'bg-accent/10 group-hover:bg-accent/20',
      text: 'text-accent'
    },
    'blue-accent': {
      bg: 'bg-blue-accent/10 group-hover:bg-blue-accent/20',
      text: 'text-blue-accent'
    },
    'green-accent': {
      bg: 'bg-green-accent/10 group-hover:bg-green-accent/20',
      text: 'text-green-accent'
    },
    'orange-accent': {
      bg: 'bg-orange-accent/10 group-hover:bg-orange-accent/20',
      text: 'text-orange-accent'
    }
  };

  return (
    <Card className="p-6 md:p-8 bg-card border-border hover:border-accent transition-all group cursor-pointer hover:shadow-lg">
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all ${colorClasses[color].bg}`}>
        <Icon name={icon} size={28} className={`md:w-8 md:h-8 ${colorClasses[color].text}`} />
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default ServiceCard;
