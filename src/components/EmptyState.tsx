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
    <Card className="p-20 text-center bg-card border-border">
      <Icon name={icon} size={64} className="text-muted-foreground mx-auto mb-6" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-muted-foreground mb-8">{description}</p>
      {buttonText && onButtonClick && (
        <Button className="bg-button-primary hover:bg-button-primary/90" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
};

export default EmptyState;
