import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CostCalculatorProps {
  basePrice: number;
  vehicleName: string;
  onClose: () => void;
}

const CostCalculator = ({ basePrice, vehicleName, onClose }: CostCalculatorProps) => {
  const [activeTab, setActiveTab] = useState<'detail' | 'credit'>('detail');
  const [currency, setCurrency] = useState<'RUB' | 'BYN'>('RUB');
  const [country, setCountry] = useState<'BY' | 'RU'>('BY');
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {activeTab === 'detail' ? 'Детализация на 14.01.26' : 'Расчет оплаты частями'}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-secondary rounded">
            <Icon name="X" size={20} />
          </button>
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
                  <div className="text-2xl font-bold">{formatPrice(basePrice)}</div>
                  <div className="text-sm text-muted-foreground">{currency}</div>
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

              <Button
                variant="outline"
                onClick={() => setActiveTab('detail')}
                className="w-full"
              >
                Вернуться к детализации
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculator;