import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const EmptyState = ({ icon, title, description, buttonText, onButtonClick }: EmptyStateProps) => {
  return (
    <Card className="p-8 sm:p-12 md:p-16 lg:p-20 text-center bg-card border-border">
      <Icon name={icon} size={48} className="sm:w-16 sm:h-16 md:w-20 md:h-20 text-muted-foreground mx-auto mb-4 sm:mb-6" />
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8">{description}</p>
      {buttonText && onButtonClick && (
        <Button className="bg-button-primary hover:bg-button-primary/90 w-full sm:w-auto" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
};

export default EmptyState;