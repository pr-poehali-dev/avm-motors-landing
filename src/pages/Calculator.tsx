import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

const Calculator = () => {
  const [region, setRegion] = useState<'RB' | 'RF'>('RB');
  const [platformPrice, setPlatformPrice] = useState<number>(8000);
  const [currency] = useState('CNY');
  const [exchangeRate] = useState(13.5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [commission, setCommission] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [customs, setCustoms] = useState(0);
  const [services] = useState(500);

  useEffect(() => {
    const priceInRub = platformPrice * exchangeRate;
    
    setCommission(Math.round(priceInRub * 0.08));
    setDelivery(region === 'RB' ? 80000 : 60000);
    
    const customsRate = region === 'RB' ? 0.54 : 0.48;
    setCustoms(Math.round(priceInRub * customsRate));
  }, [platformPrice, region, exchangeRate]);

  const totalRub = Math.round(platformPrice * exchangeRate + commission + delivery + services + customs);
  const totalUsd = Math.round(totalRub / 100);

  const includedServices = [
    'Подбор под Ваши задачи и бюджет автомобиля, его проверка и организация покупки',
    'Оформление экспортных документов + страхование перед отправкой',
    'Доставка по Китаю + до СВХ в г. Минске',
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
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="flex gap-3 p-1 bg-secondary rounded-lg">
                <button
                  onClick={() => setRegion('RB')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                    region === 'RB'
                      ? 'bg-background shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  в РБ
                </button>
                <button
                  onClick={() => setRegion('RF')}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                    region === 'RF'
                      ? 'bg-background shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  в РФ
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Цена авто на площадке (торговая площадка)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={platformPrice}
                    onChange={(e) => setPlatformPrice(Number(e.target.value))}
                    className="w-full px-4 py-4 bg-background border border-border rounded-lg text-2xl font-bold pr-20"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                    {currency}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Комиссия и оформление документов</span>
                  <span className="font-semibold">{commission.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="font-semibold">{delivery.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Наши услуги</span>
                  <span className="font-semibold">{services.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Растаможка</span>
                  <span className="font-semibold">{customs.toLocaleString()} ₽</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-lg font-semibold">Итого под ключ в {region === 'RB' ? 'РБ' : 'РФ'}</span>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-accent">{totalRub.toLocaleString()} ₽</div>
                  <div className="text-xl text-muted-foreground">{totalUsd.toLocaleString()} $</div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                * Итоговая стоимость зависит от характеристик автомобиля и курса валют
              </p>
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
                    <span>Доставка (включает в себя доставку по Китаю + до СВХ в Минске)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">4.</span>
                    <span>Растаможка (включает в себя утилизационный сбор, таможенную пошлину, таможенный сбор, расходы на СВХ, расходы на декларирование, оформление ЭПТС)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-accent">5.</span>
                    <span>Наши услуги остаются как указано</span>
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

              <Button size="lg" className="w-full" onClick={() => setIsModalOpen(true)}>
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