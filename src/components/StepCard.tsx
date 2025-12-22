import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
  stepNumber: number;
  isOpen: boolean;
  onToggle: () => void;
}

const StepCard = ({ icon, title, description, stepNumber, isOpen, onToggle }: StepCardProps) => {
  return (
    <Card
      className="bg-background border-border hover:border-accent transition-all cursor-pointer group"
      onClick={onToggle}
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
            <Icon name={icon} size={28} className="text-accent" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Шаг {stepNumber}.</div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <Icon
          name="ChevronDown"
          size={24}
          className={`text-accent transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-lg text-muted-foreground leading-relaxed ml-[88px]">
            {description}
          </p>
        </div>
      )}
    </Card>
  );
};

export default StepCard;
