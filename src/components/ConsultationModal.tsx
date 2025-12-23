import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationModal = ({ open, onOpenChange }: ConsultationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    if (!agreedToPolicy) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие с политикой конфиденциальности",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Наш эксперт свяжется с вами в ближайшее время",
      });
      
      setFormData({ name: "", phone: "" });
      setAgreedToPolicy(false);
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Консультация эксперта</DialogTitle>
          <DialogDescription className="text-base">
            Оставьте ваши контактные данные, и наш специалист свяжется с вами в течение 15 минут
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Ваше имя
            </label>
            <div className="relative">
              <Icon name="User" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10 h-12"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Номер телефона
            </label>
            <div className="relative">
              <Icon name="Phone" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="+375 29 123 45 67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-10 h-12"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="policy"
              checked={agreedToPolicy}
              onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
              disabled={isSubmitting}
              className="mt-1"
            />
            <label
              htmlFor="policy"
              className="text-sm leading-relaxed cursor-pointer"
            >
              Я согласен с{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                политикой конфиденциальности
              </a>
              {" "}и{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                пользовательским соглашением
              </a>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base bg-button-primary hover:bg-button-primary/90"
            disabled={isSubmitting || !agreedToPolicy}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;