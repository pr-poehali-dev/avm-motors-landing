import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import StepCard from "@/components/StepCard";
import FAQCard from "@/components/FAQCard";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface InfoSectionsProps {
  formData: { name: string; phone: string };
  setFormData: (data: { name: string; phone: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const InfoSections = ({ formData, setFormData, handleSubmit }: InfoSectionsProps) => {
  const [workflowTab, setWorkflowTab] = useState('Этапы работ');
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="w-full px-6 lg:px-12">
          <SectionHeader
            label="Сервис"
            title="Полный цикл обслуживания"
            description="Что вы получаете до, во время и после покупки с нами"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "Search", title: "Индивидуальный подбор", desc: "Подбор авто под бюджет и задачи с полной проверкой до покупки", color: "accent" as const },
              { icon: "Shield", title: "Юридическое сопровождение сделки", desc: "Проверка продавца на риски, проверка документов и договора, сопровождение до выдачи", color: "blue-accent" as const },
              { icon: "Truck", title: "VIP доставка", desc: "Безопасная контейнерная доставка, страхование, контроль и отчет на всех этапах пути", color: "green-accent" as const },
              { icon: "FileCheck", title: "Таможенная очистка под ключ", desc: "Размещение на СВХ, расчёт таможенных платежей, удалённая растаможка и сопровождение до выпуска автомобиля", color: "orange-accent" as const },
            ].map((service, idx) => (
              <ServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-4 sm:px-6 lg:px-12 relative">
          <SectionHeader
            label="Преимущества"
            title="Почему AVM Motors"
            description="Опыт, надежность и прозрачность на каждом этапе"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "Calculator", title: "Прозрачная цена до покупки", desc: "Рассчитываем полную стоимость до покупки - без скрытых платежей, доплат и \"всплывающих\" расходов после покупки", color: "accent" as const },
              { icon: "SearchCheck", title: "Проверка автомобиля до выкупа", desc: "Проверяем ЛКП, следы затопления или пожара, механические повреждения, техническое состояние деталей и агрегатов. Предоставляем подробный фото и видеоотчёт до оплаты", color: "blue-accent" as const },
              { icon: "CreditCard", title: "Кредит и лизинг удаленно", desc: "Подбираем оптимальные условия и сопровождаем сделку без визита в офис", color: "green-accent" as const },
              { icon: "Package", title: "Дополнительное оборудование с выгодой", desc: "Помогаем заказать вместе с автомобилем резину и аксессуары дешевле рынка", color: "orange-accent" as const },
              { icon: "ClipboardCheck", title: "Сопровождение до постановки на учет", desc: "Передаём автомобиль и документы, даём пошаговую памятку по регистрации в ГАИ", color: "accent" as const },
              { icon: "Users", title: "Экосистема партнеров", desc: "Детейлинг, антикор, русификация, прошивки, запчасти и масла по оптовым ценам", color: "blue-accent" as const },
              { icon: "Award", title: "Опыт и доверие, подтвержденные временем", desc: "На рынке с 2012 года. Более 5 лет работы с Китаем, собственная логистика, кредитный отдел, представительство в Китае. AVM - бренд года 2025", color: "green-accent" as const },
              { icon: "Gift", title: "Программа лояльности", desc: "Любой наш клиент вместе с заказом автомобиля получает скидку 10% на любой товар среди ассортимента avtovelomoto.by", color: "orange-accent" as const },
            ].map((item, idx) => (
              <ServiceCard
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              label="Процесс"
              title="Как мы работаем"
            />

            <div className="flex gap-4 mb-12 border-b border-border">
              {['Этапы работ', 'Вопрос-ответ'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setWorkflowTab(tab)}
                  className={`pb-4 px-8 text-lg font-medium transition-all relative ${
                    workflowTab === tab 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                  {workflowTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                  )}
                </button>
              ))}
            </div>

            {workflowTab === 'Этапы работ' && (
              <div className="space-y-4">
                {[
                  { icon: 'MessageSquare', title: 'Консультация и подбор', desc: 'Обсуждаем ваши пожелания, подбираем идеальный автомобиль и рассчитываем полную стоимость — быстро и прозрачно' },
                  { icon: 'FileText', title: 'Оформление договора', desc: 'Заключаем официальный договор с фиксированной ценой — без скрытых платежей' },
                  { icon: 'SearchCheck', title: 'Диагностика и проверка автомобиля', desc: 'Проверяем техническое состояние, ЛКП, отсутствие затоплений. Отправляем вам подробный фото-видеоотчёт' },
                  { icon: 'Banknote', title: 'Выкуп и оплата', desc: 'Покупаем автомобиль после вашего одобрения. Безопасная сделка с полным юридическим сопровождением' },
                  { icon: 'Truck', title: 'Доставка', desc: 'Быстрая логистика и таможенное оформление — 30-60 дней от заказа до вашего города' },
                  { icon: 'Key', title: 'Получение автомобиля', desc: 'Передаём вам ключи, документы и помогаем с постановкой на учёт' },
                ].map((step, idx) => (
                  <StepCard
                    key={idx}
                    icon={step.icon}
                    title={step.title}
                    description={step.desc}
                    stepNumber={idx + 1}
                    isOpen={openStep === idx}
                    onToggle={() => setOpenStep(openStep === idx ? null : idx)}
                  />
                ))}
              </div>
            )}

            {workflowTab === 'Вопрос-ответ' && (
              <div className="space-y-4">
                {[
                  { q: 'Сколько времени занимает доставка?', a: 'В среднем 30-60 дней от момента заказа до получения автомобиля в России с полным пакетом документов.' },
                  { q: 'Какие гарантии вы предоставляете?', a: 'Официальный договор, юридическое сопровождение на всех этапах, страхование при доставке и гарантия производителя.' },
                  { q: 'Можно ли получить кредит на автомобиль?', a: 'Да, мы работаем с ведущими банками и поможем подобрать оптимальные условия кредитования или лизинга.' },
                  { q: 'Нужно ли мне самому заниматься растаможкой?', a: 'Нет, мы берём на себя все вопросы таможенного оформления, сертификации и постановки на учёт.' },
                  { q: 'Какая экономия по сравнению с покупкой в России?', a: 'В среднем экономия составляет 25-35% от рыночной цены аналогичного автомобиля в РФ.' },
                ].map((item, idx) => (
                  <FAQCard
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={openStep === idx}
                    onToggle={() => setOpenStep(openStep === idx ? null : idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-secondary">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Контакт"
              title="Начнём подбор автомобиля прямо сейчас"
              description="Эксперт AVM свяжется с вами, уточнит детали и предложит подходящие варианты с расчетом полной стоимости до покупки"
            />
            <Card className="p-4 sm:p-8 md:p-12 bg-card border-accent/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 sm:h-14 text-sm sm:text-base bg-background border-border focus:border-accent"
                  aria-label="Ваше имя"
                />
                <PhoneInput
                  defaultCountry="by"
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputClassName="h-12 sm:h-14 text-sm sm:text-base bg-background border-border focus:border-accent"
                  className="phone-input-custom"
                  inputProps={{ 'aria-label': 'Номер телефона' }}
                />
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
    </>
  );
};

export default InfoSections;