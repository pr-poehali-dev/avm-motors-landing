import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import Icon from '@/components/ui/icon';

const Calculator = () => {
  const [activeTab, setActiveTab] = useState<'detail' | 'credit'>('detail');
  const [region, setRegion] = useState<'RB' | 'RF'>('RB');
  const [platformPrice, setPlatformPrice] = useState<number>(1143364);
  const [currency, setCurrency] = useState<'RUB' | 'BYN'>('RUB');
  const [exchangeRate] = useState(13.5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [loanTerm, setLoanTerm] = useState(40);

  const [commission, setCommission] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [customs, setCustoms] = useState(0);
  const [services] = useState(currency === 'RUB' ? 98566 : Math.round(98566 / 3.3));

  useEffect(() => {
    setCommission(Math.round(platformPrice * 0.08));
    setDelivery(currency === 'RUB' ? 354837 : Math.round(354837 / 3.3));
    setCustoms(currency === 'RUB' ? Math.round(platformPrice * 4.6) : Math.round((platformPrice * 4.6) / 3.3));
  }, [platformPrice, currency]);

  const totalCost = platformPrice + commission + delivery + services + customs;
  const downPayment = Math.round(totalCost * (downPaymentPercent / 100));
  const loanAmount = totalCost - downPayment;
  const interestRate = 0.06;
  const monthlyPayment = Math.round((loanAmount * (interestRate / 12) * Math.pow(1 + interestRate / 12, loanTerm)) / (Math.pow(1 + interestRate / 12, loanTerm) - 1));

  const formatPrice = (price: number) => price.toLocaleString('ru-RU');

  const includedServices = [
    'Подбор под Ваши задачи и бюджет автомобиля, его проверка и организация покупки',
    'Оформление экспортных документов + страхование перед отправкой',
    'Доставка по Китаю + доставка до СВХ',
    'Таможенное оформление',
    'Помощь в получении ЭПТС и регистрации в ГАИ'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onVehicleRegionChange={() => {}} />
      
      <section className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Калькулятор стоимости автомобиля
            </h1>
            <p className="text-muted-foreground text-lg">
              Рассчитайте полную стоимость авто под ключ из Китая
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-card border-b border-border p-4">
                <h2 className="text-xl font-bold">
                  {activeTab === 'detail' ? 'Детализация на 14.01.26' : 'Расчет оплаты частями'}
                </h2>
              </div>

              {activeTab === 'detail' && (
              <div className="p-6 space-y-6">
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

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground text-sm">Цена авто на аукционе</span>
                  <div className="text-right">
                    <input
                      type="number"
                      value={platformPrice}
                      onChange={(e) => setPlatformPrice(Number(e.target.value))}
                      className="text-2xl font-bold text-right bg-transparent border-none focus:outline-none w-40"
                    />
                    <div className="text-sm text-muted-foreground">{currency}</div>
                  </div>
                </div>

                <div className="h-2 bg-accent rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-accent" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сборы аукциона</span>
                    <span className="font-semibold">{formatPrice(commission)} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка</span>
                    <span className="font-semibold">от {formatPrice(delivery)} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Наши услуги</span>
                    <span className="font-semibold">от {formatPrice(services)} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Растаможка</span>
                    <span className="font-semibold">≈ {formatPrice(customs)} ₽</span>
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
                  <div className="text-3xl font-bold">{formatPrice(totalCost)} ₽*</div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setActiveTab('credit')}
                  >
                    Детализация
                  </Button>
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => setActiveTab('credit')}
                  >
                    Точный расчет
                  </Button>
                </div>
              </div>
            </div>
              )}

              {activeTab === 'credit' && (
              <div className="p-6 space-y-6">
                <div className="text-center py-3 bg-secondary rounded-lg font-semibold">
                  Кредит
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setRegion('RB')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      region === 'RB'
                        ? 'bg-secondary text-foreground'
                        : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                    }`}
                  >
                    Беларусь
                  </button>
                  <button
                    onClick={() => setRegion('RF')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      region === 'RF'
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
                      <span className="text-sm text-muted-foreground">Срок кредита от 20 до 40 мес.</span>
                      <select
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(Number(e.target.value))}
                        className="px-3 py-1 bg-secondary border border-border rounded text-sm"
                      >
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                      </select>
                    </div>
                    <div className="text-2xl font-bold">{loanTerm}</div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-2">Ежемесячный платеж</div>
                    <div className="text-3xl font-bold">{formatPrice(monthlyPayment)} ₽</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setActiveTab('detail')}
                    >
                      Назад
                    </Button>
                    <Button
                      className="flex-1 bg-accent hover:bg-accent/90"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Получить консультацию
                    </Button>
                  </div>
                </div>
              </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Как работает калькулятор</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">1.</span>
                    <span>Цена на площадке (стартовая цена автомобиля на торговой площадке)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">2.</span>
                    <span>Комиссия китайской компании за совершение сделки и оформление экспортных документов</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">3.</span>
                    <span>Доставка (включает в себя доставку по Китаю + доставку до СВХ)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">4.</span>
                    <span>Растаможка (включает в себя утилизационный сбор, таможенную пошлину, таможенный сбор, расходы на СВХ, расходы на декларирование, оформление ЭПТС)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">5.</span>
                    <span>Наши услуги (см. список «Что входит в под ключ?»)</span>
                  </li>
                </ol>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Что входит в под ключ?</h3>
                <ul className="space-y-3">
                  {includedServices.map((service, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent font-bold">{index + 1}.</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="w-full bg-button-primary hover:bg-button-primary/90 text-button-primary-foreground" onClick={() => setIsModalOpen(true)}>
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ConsultationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Calculator;