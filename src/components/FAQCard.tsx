import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCard = ({ question, answer, isOpen, onToggle }: FAQCardProps) => {
  return (
    <Card
      className="bg-background border-border hover:border-accent transition-all cursor-pointer"
      onClick={onToggle}
    >
      <div className="p-6 flex items-center justify-between">
        <h3 className="text-xl font-bold pr-4">{question}</h3>
        <Icon
          name="ChevronDown"
          size={24}
          className={`text-accent transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-lg text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </Card>
  );
};

export default FAQCard;
