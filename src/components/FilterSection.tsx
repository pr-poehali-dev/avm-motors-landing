import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FilterSectionProps {
  icon: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FilterSection = ({ icon, title, isOpen, onToggle, children }: FilterSectionProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon name={icon} size={16} className="text-accent" />
          <h3 className="text-sm font-bold">{title}</h3>
        </div>
        <Icon
          name="ChevronDown"
          size={16}
          className={`text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="px-3 pb-3">{children}</div>}
    </Card>
  );
};

export default FilterSection;
