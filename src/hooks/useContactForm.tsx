import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
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

  return {
    formData,
    setFormData,
    handleSubmit,
  };
};
