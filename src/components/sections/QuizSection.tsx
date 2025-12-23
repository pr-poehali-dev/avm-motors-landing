import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "@/components/SectionHeader";
import { PhoneInput } from 'react-international-phone';

const QuizSection = () => {
  const { toast } = useToast();
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    budget: '',
    tasks: [] as string[],
    chineseBrands: '',
    name: '',
    phone: '',
  });

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы подберём для вас идеальный автомобиль и свяжемся в течение часа",
    });
    setQuizData({ budget: '', tasks: [], chineseBrands: '', name: '', phone: '' });
    setQuizStep(1);
  };

  return (
    <section id="quiz" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <SectionHeader
              label="Подбор авто"
              title="Не нашли подходящий вариант?"
              description="Ответьте на 3 простых вопроса - эксперт AVM предложит оптимальные варианты в Ваш бюджет"
              centered
            />
          </div>

          <Card className="bg-background border-border shadow-2xl">
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex justify-center mb-6 md:mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all ${
                      quizStep === step 
                        ? 'bg-accent text-accent-foreground scale-110' 
                        : quizStep > step 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {quizStep > step ? <Icon name="Check" size={20} /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`w-8 sm:w-12 md:w-20 h-0.5 mx-1 sm:mx-2 transition-colors ${
                        quizStep > step ? 'bg-accent' : 'bg-secondary'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleQuizSubmit}>
                {quizStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Шаг 1 из 3
                      </label>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">В каком бюджете подбираем автомобиль?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { label: 'до 15 000$', value: 'do-15k' },
                          { label: '15 000 - 20 000$', value: '15k-20k' },
                          { label: '20 000 - 30 000$', value: '20k-30k' },
                          { label: '30 000$ и выше', value: '30k+' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setQuizData({ ...quizData, budget: option.value })}
                            className={`p-4 rounded-lg border-2 font-medium transition-all ${
                              quizData.budget === option.value
                                ? 'border-accent bg-accent/10 text-accent'
                                : 'border-border bg-secondary/50 hover:border-accent/50 text-foreground'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={() => setQuizStep(2)}
                      className="w-full h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                      disabled={!quizData.budget}
                    >
                      Далее
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Шаг 2 из 3
                      </label>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Для каких задач Вам нужен автомобиль?</h3>
                      <p className="text-sm text-muted-foreground mb-4">Можно выбрать несколько вариантов</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { label: 'Семейный автомобиль', value: 'family' },
                          { label: 'Поездки по городу', value: 'city' },
                          { label: 'Путешествия / трасса', value: 'travel' },
                          { label: 'Бездорожье', value: 'offroad' },
                          { label: 'Стиль и комфорт', value: 'luxury' },
                          { label: 'Пока не определился', value: 'unsure' },
                        ].map((option) => {
                          const isSelected = quizData.tasks.includes(option.value);
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                const newTasks = isSelected
                                  ? quizData.tasks.filter(t => t !== option.value)
                                  : [...quizData.tasks, option.value];
                                setQuizData({ ...quizData, tasks: newTasks });
                              }}
                              className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                                isSelected
                                  ? 'border-accent bg-accent/10 text-accent'
                                  : 'border-border bg-secondary/50 hover:border-accent/50 text-foreground'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{option.label}</span>
                                {isSelected && <Icon name="Check" size={20} className="ml-2" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={() => setQuizStep(1)}
                        variant="outline"
                        className="flex-1 h-14 text-lg border-border hover:border-accent"
                      >
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Назад
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setQuizStep(3)}
                        className="flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                        disabled={quizData.tasks.length === 0}
                      >
                        Далее
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Шаг 3 из 3
                      </label>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Как Вы относитесь к китайским маркам?</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { label: 'Рассматриваю к покупке', value: 'considering' },
                          { label: 'Рассмотрю, если очень выгодно', value: 'if-profitable' },
                          { label: 'Без разницы', value: 'no-preference' },
                          { label: 'Пока не рассматриваю', value: 'not-considering' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setQuizData({ ...quizData, chineseBrands: option.value })}
                            className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                              quizData.chineseBrands === option.value
                                ? 'border-accent bg-accent/10 text-accent'
                                : 'border-border bg-secondary/50 hover:border-accent/50 text-foreground'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        onClick={() => setQuizStep(2)}
                        variant="outline"
                        className="flex-1 h-14 text-lg border-border hover:border-accent"
                      >
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Назад
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setQuizStep(4)}
                        className="flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                        disabled={!quizData.chineseBrands}
                      >
                        Далее
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {quizStep === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        Последний шаг
                      </label>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Мы подготовим для Вас индивидуальную подборку автомобилей</h3>
                      <p className="text-base text-muted-foreground mb-6">
                        С учетом бюджета, задач и расчетом полной стоимости до покупки - без сюрпризов
                      </p>
                      <div className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Имя"
                          value={quizData.name}
                          onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                          className="h-12 sm:h-14 text-sm sm:text-base md:text-lg bg-secondary/50 border-border focus:border-accent"
                          required
                        />
                        <PhoneInput
                          defaultCountry="by"
                          value={quizData.phone}
                          onChange={(phone) => setQuizData({ ...quizData, phone })}
                          inputClassName="h-12 sm:h-14 text-sm sm:text-base md:text-lg bg-secondary/50 border-border focus:border-accent"
                          className="phone-input-custom"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="button"
                        onClick={() => setQuizStep(3)}
                        variant="outline"
                        className="w-full sm:flex-1 h-14 text-lg border-border hover:border-accent"
                      >
                        <Icon name="ArrowLeft" size={20} className="mr-2" />
                        Назад
                      </Button>
                      <Button
                        type="submit"
                        className="w-full sm:flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-sm sm:text-base"
                        disabled={!quizData.name.trim() || !quizData.phone.trim()}
                      >
                        <span className="hidden sm:inline">Получить подбор от эксперта AVM</span>
                        <span className="sm:hidden">Получить подбор</span>
                        <Icon name="Check" size={20} className="ml-2" />
                      </Button>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Контакты нужны, чтобы связаться и отправить варианты и расчет. Спама не будет
                    </p>
                  </div>
                )}
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
