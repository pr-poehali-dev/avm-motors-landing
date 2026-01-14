import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BackgroundBlur } from '@/components/ui/decorative-background';

const Calculator = () => {
  const [activeTab, setActiveTab] = useState<'detail' | 'credit'>('detail');
  const [currency, setCurrency] = useState<'RUB' | 'BYN'>('RUB');
  const [country, setCountry] = useState<'BY' | 'RU'>('BY');
  const [basePrice, setBasePrice] = useState(1143364);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [loanTerm, setLoanTerm] = useState(40);

  const auctionFees = Math.round(basePrice * 0.08);
  const deliveryCost = currency === 'RUB' ? 354837 : Math.round(354837 / 3.3);
  const serviceFee = currency === 'RUB' ? 98566 : Math.round(98566 / 3.3);
  const customsCost = currency === 'RUB' ? Math.round(basePrice * 4.6) : Math.round((basePrice * 4.6) / 3.3);
  
  const totalCost = basePrice + auctionFees + deliveryCost + serviceFee + customsCost;

  const downPayment = Math.round(totalCost * (downPaymentPercent / 100));
  const loanAmount = totalCost - downPayment;
  const interestRate = 0.06;
  const monthlyPayment = Math.round((loanAmount * (interestRate / 12) * Math.pow(1 + interestRate / 12, loanTerm)) / (Math.pow(1 + interestRate / 12, loanTerm) - 1));

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={() => {}} />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 relative overflow-hidden">
        <BackgroundBlur variant="hero" />
        
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Калькулятор стоимости автомобиля
            </h1>
            <p className="text-muted-foreground text-lg">
              Рассчитайте полную стоимость доставки авто с аукциона под ключ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('detail')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'detail'
                      ? 'bg-accent text-white'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Детализация
                </button>
                <button
                  onClick={() => setActiveTab('credit')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === 'credit'
                      ? 'bg-accent text-white'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Кредит
                </button>
              </div>

              {activeTab === 'detail' && (
                <div className="space-y-6">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrency('RUB')}
                      className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        currency === 'RUB'
                          ? 'bg-secondary text-foreground'
                          : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      В РБ
                    </button>
                    <button
                      onClick={() => setCurrency('BYN')}
                      className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        currency === 'BYN'
                          ? 'bg-secondary text-foreground'
                          : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      В РФ
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Цена авто на аукционе
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={basePrice}
                        onChange={(e) => setBasePrice(Number(e.target.value))}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-xl font-bold pr-16"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        {currency}
                      </div>
                    </div>
                  </div>

                  <div className="h-2 bg-accent rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-accent" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Сборы аукциона</span>
                      <span className="font-semibold">{formatPrice(auctionFees)} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className="font-semibold">от {formatPrice(deliveryCost)} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Наши услуги</span>
                      <span className="font-semibold">от {formatPrice(serviceFee)} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Растаможка</span>
                      <span className="font-semibold">≈ {formatPrice(customsCost)} ₽</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Icon name="Calculator" size={20} className="text-accent" />
                    <span className="font-semibold">Таможенный калькулятор</span>
                  </button>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Итого "под ключ" в РФ</span>
                      <Icon name="Info" size={16} className="text-muted-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-accent">{formatPrice(totalCost)} ₽*</div>
                  </div>
                </div>
              )}

              {activeTab === 'credit' && (
                <div className="space-y-6">
                  <div className="text-center py-3 bg-secondary rounded-lg font-semibold">
                    Кредит
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setCountry('BY')}
                      className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        country === 'BY'
                          ? 'bg-secondary text-foreground'
                          : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      Беларусь
                    </button>
                    <button
                      onClick={() => setCountry('RU')}
                      className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                        country === 'RU'
                          ? 'bg-secondary text-foreground'
                          : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      Россия
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Сумма кредита</span>
                        <select
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value as 'RUB' | 'BYN')}
                          className="px-3 py-1 bg-secondary border border-border rounded text-sm"
                        >
                          <option value="RUB">RUB</option>
                          <option value="BYN">BYN</option>
                        </select>
                      </div>
                      <div className="text-2xl font-bold">{formatPrice(loanAmount)}</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Первый взнос от 10 до 30%</span>
                        <select
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                          className="px-3 py-1 bg-secondary border border-border rounded text-sm"
                        >
                          <option value={10}>10%</option>
                          <option value={20}>20%</option>
                          <option value={30}>30%</option>
                        </select>
                      </div>
                      <div className="text-2xl font-bold">{formatPrice(downPayment)}</div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Срок до 40 месяцев</span>
                      </div>
                      <div className="text-2xl font-bold mb-2">{loanTerm}</div>
                      <input
                        type="range"
                        min="12"
                        max="40"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="w-full h-2 bg-accent rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                      />
                    </div>

                    <div className="text-xs text-center text-blue-accent underline cursor-pointer">
                      Я согласен на обработку персональных данных
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="text-3xl font-bold mb-1">от {formatPrice(monthlyPayment)} RUB/мес</div>
                      <div className="text-sm text-muted-foreground">Ставка: 6%</div>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Ваше Имя*"
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg"
                      />
                      <div className="text-xs text-center text-blue-accent underline cursor-pointer">
                        Использовать мессенджер
                      </div>
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 h-12 text-base font-semibold">
                      Оставить заявку
                    </Button>

                    <button className="w-full py-3 text-foreground flex items-center justify-between hover:bg-secondary rounded-lg px-4 transition-colors">
                      <span className="font-semibold">Банки партнеры</span>
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h2 className="text-xl font-bold">Как работает калькулятор</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Цена на аукционе</h3>
                    <p className="text-sm text-muted-foreground">
                      Стартовая цена автомобиля на аукционе Copart или IAAI
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Package" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Сборы аукциона</h3>
                    <p className="text-sm text-muted-foreground">
                      Комиссия аукциона за покупку (≈8% от стоимости)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Ship" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Доставка</h3>
                    <p className="text-sm text-muted-foreground">
                      Транспортировка из США в порт + доставка до вашего города
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Растаможка</h3>
                    <p className="text-sm text-muted-foreground">
                      Таможенные платежи зависят от объема двигателя и возраста авто
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Наши услуги</h3>
                    <p className="text-sm text-muted-foreground">
                      Полное сопровождение сделки: покупка, доставка, оформление
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-3">Что входит в "под ключ"?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-accent mt-0.5 flex-shrink-0" />
                    <span>Покупка автомобиля на аукционе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-accent mt-0.5 flex-shrink-0" />
                    <span>Доставка из США до вашего города</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-accent mt-0.5 flex-shrink-0" />
                    <span>Таможенное оформление</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-accent mt-0.5 flex-shrink-0" />
                    <span>Регистрация в ГАИ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-accent mt-0.5 flex-shrink-0" />
                    <span>Помощь в ремонте (опционально)</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 h-12 text-base font-semibold">
                Получить консультацию
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Icon name="AlertCircle" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Важная информация</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Калькулятор показывает приблизительную стоимость. Итоговая цена может отличаться в зависимости от 
                  технических характеристик автомобиля, актуальных тарифов на доставку и курса валют. Для точного расчета 
                  свяжитесь с нашими менеджерами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;
