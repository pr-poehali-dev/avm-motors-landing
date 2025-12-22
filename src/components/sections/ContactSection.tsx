import { useState, useCallback, lazy, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PhoneInput = lazy(() =>
  import('react-international-phone').then(module => ({
    default: module.PhoneInput
  }))
);

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Наш специалист свяжется с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  }, [toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Контакт</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Начнём подбор автомобиля прямо сейчас</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed">
              Эксперт AVM свяжется с вами, уточнит детали и предложит подходящие варианты с расчетом полной стоимости до покупки
            </p>
          </div>
          <Card className="p-4 sm:p-8 md:p-12 bg-card border-accent/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Ваше имя"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 sm:h-14 text-sm sm:text-base bg-background border-border focus:border-accent"
              />
              <Suspense fallback={<Input type="tel" placeholder="+7" className="h-12 sm:h-14" />}>
                <PhoneInput
                  defaultCountry="ru"
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputClassName="h-12 sm:h-14 text-sm sm:text-base bg-background border-border focus:border-accent"
                  className="phone-input-custom"
                />
              </Suspense>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-button-primary hover:bg-button-primary/90 h-12 sm:h-14 text-base sm:text-lg"
              >
                Получить консультацию
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Конфиденциальность гарантируется
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
