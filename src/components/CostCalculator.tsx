import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { jsPDF } from 'jspdf';

interface SavedCalculation {
  id: string;
  vehicleName: string;
  basePrice: number;
  currency: 'RUB' | 'BYN';
  totalCost: number;
  date: string;
  downPaymentPercent?: number;
  loanTerm?: number;
  monthlyPayment?: number;
}

interface CostCalculatorProps {
  basePrice: number;
  vehicleName: string;
  onClose: () => void;
}

const CostCalculator = ({ basePrice, vehicleName, onClose }: CostCalculatorProps) => {
  const [activeTab, setActiveTab] = useState<'detail' | 'credit'>('detail');
  const [currency, setCurrency] = useState<'RUB' | 'BYN'>('BYN');
  const [country, setCountry] = useState<'BY' | 'RU'>('BY');
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [loanTerm, setLoanTerm] = useState(40);
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('savedCalculations');
    if (saved) {
      setSavedCalculations(JSON.parse(saved));
    }
  }, []);

  const auctionFees = Math.round(basePrice * 0.08);
  const deliveryCost = currency === 'BYN' ? 354837 : Math.round(354837 / 100);
  const serviceFee = currency === 'BYN' ? 98566 : Math.round(98566 / 100);
  const customsCost = currency === 'BYN' ? Math.round(basePrice * 4.6) : Math.round((basePrice * 4.6) / 100);
  
  const totalCost = basePrice + auctionFees + deliveryCost + serviceFee + customsCost;
  const totalCostUSD = Math.round(totalCost / 100);

  const downPayment = Math.round(totalCost * (downPaymentPercent / 100));
  const loanAmount = totalCost - downPayment;
  const interestRate = 0.06;
  const monthlyPayment = Math.round((loanAmount * (interestRate / 12) * Math.pow(1 + interestRate / 12, loanTerm)) / (Math.pow(1 + interestRate / 12, loanTerm) - 1));

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };
  
  const displayCurrency = currency === 'BYN' ? '₽' : '$';
  const displayTotal = currency === 'BYN' ? totalCost : totalCostUSD;
  const convertForDisplay = (price: number) => currency === 'RUB' ? Math.round(price / 100) : price;
  const convertBasePriceForDisplay = () => currency === 'RUB' ? Math.round(basePrice / 100) : basePrice;

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    doc.addFont('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf', 'Roboto', 'normal');
    doc.setFont('Roboto');
    
    doc.setFontSize(20);
    doc.text('Расчет стоимости автомобиля', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Автомобиль: ${vehicleName}`, 20, 35);
    doc.text(`Дата: ${new Date().toLocaleDateString('ru-RU')}`, 20, 45);
    
    doc.setFontSize(14);
    doc.text('Детализация:', 20, 60);
    
    doc.setFontSize(11);
    let y = 70;
    const pdfCurrency = currency === 'BYN' ? 'RUB' : 'USD';
    
    doc.text(`Cena na ploshhadke: ${formatPrice(convertBasePriceForDisplay())} ${pdfCurrency}`, 20, y);
    y += 10;
    doc.text(`Sbory ploshhadki: ${formatPrice(convertForDisplay(auctionFees))} ${pdfCurrency}`, 20, y);
    y += 10;
    doc.text(`Dostavka: ot ${formatPrice(convertForDisplay(deliveryCost))} ${pdfCurrency}`, 20, y);
    y += 10;
    doc.text(`Nashi uslugi: ot ${formatPrice(convertForDisplay(serviceFee))} ${pdfCurrency}`, 20, y);
    y += 10;
    doc.text(`Rastamozhka: ~ ${formatPrice(convertForDisplay(customsCost))} ${pdfCurrency}`, 20, y);
    y += 15;
    
    doc.setFontSize(16);
    doc.text(`Itogo "pod klyuch": ${formatPrice(displayTotal)} ${pdfCurrency}`, 20, y);
    
    if (activeTab === 'credit') {
      y += 20;
      doc.setFontSize(14);
      doc.text('Kredit:', 20, y);
      y += 10;
      doc.setFontSize(11);
      doc.text(`Pervyj vznos (${downPaymentPercent}%): ${formatPrice(convertForDisplay(downPayment))} ${pdfCurrency}`, 20, y);
      y += 10;
      doc.text(`Summa kredita: ${formatPrice(convertForDisplay(loanAmount))} ${pdfCurrency}`, 20, y);
      y += 10;
      doc.text(`Srok kredita: ${loanTerm} mes.`, 20, y);
      y += 10;
      doc.text(`Stavka: 6%`, 20, y);
      y += 10;
      doc.setFontSize(14);
      doc.text(`Ezhemesyachnyj platezh: ${formatPrice(convertForDisplay(monthlyPayment))} ${pdfCurrency}`, 20, y);
    }
    
    doc.save(`raschet-${vehicleName.replace(/\s+/g, '-')}-${Date.now()}.pdf`);
  };

  const deleteCalculation = (id: string) => {
    const updated = savedCalculations.filter(calc => calc.id !== id);
    setSavedCalculations(updated);
    localStorage.setItem('savedCalculations', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {showSaved ? 'Сохраненные расчеты' : activeTab === 'detail' ? 'Детализация на 14.01.26' : 'Расчет оплаты частями'}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSaved(!showSaved)}
              className="p-1 hover:bg-secondary rounded"
              title="Сохраненные расчеты"
            >
              <Icon name="History" size={20} />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-secondary rounded">
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {showSaved ? (
          <div className="p-6 space-y-4">
            {savedCalculations.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Icon name="Inbox" size={48} className="mx-auto mb-3 opacity-50" />
                <p>Нет сохраненных расчетов</p>
              </div>
            ) : (
              savedCalculations.map((calc) => (
                <div key={calc.id} className="bg-secondary rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{calc.vehicleName}</h3>
                      <p className="text-sm text-muted-foreground">{calc.date}</p>
                    </div>
                    <button
                      onClick={() => deleteCalculation(calc.id)}
                      className="p-1 hover:bg-background rounded"
                    >
                      <Icon name="Trash2" size={16} className="text-muted-foreground" />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Цена на аукционе:</span>
                      <span className="font-semibold">{formatPrice(calc.basePrice)} {calc.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Итого под ключ:</span>
                      <span className="font-bold text-accent">{formatPrice(calc.totalCost)} ₽</span>
                    </div>
                    {calc.monthlyPayment && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Платеж/мес:</span>
                        <span className="font-semibold">{formatPrice(calc.monthlyPayment)} ₽</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : activeTab === 'detail' && (
          <div className="p-6 space-y-6">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrency('BYN')}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  currency === 'BYN'
                    ? 'bg-secondary text-foreground'
                    : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                }`}
              >
                В РБ
              </button>
              <button
                onClick={() => setCurrency('RUB')}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  currency === 'RUB'
                    ? 'bg-secondary text-foreground'
                    : 'bg-transparent text-muted-foreground hover:bg-secondary/50'
                }`}
              >
                В РФ
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground text-sm">Цена на площадке</span>
                <div className="text-right">
                  <div className="text-2xl font-bold">{formatPrice(convertBasePriceForDisplay())}</div>
                  <div className="text-sm text-muted-foreground">{displayCurrency}</div>
                </div>
              </div>

              <div className="h-2 bg-accent rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-orange-accent" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сборы площадки</span>
                  <span className="font-semibold">{formatPrice(convertForDisplay(auctionFees))} {displayCurrency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="font-semibold">от {formatPrice(convertForDisplay(deliveryCost))} {displayCurrency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Наши услуги</span>
                  <span className="font-semibold">от {formatPrice(convertForDisplay(serviceFee))} {displayCurrency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Растаможка</span>
                  <span className="font-semibold">≈ {formatPrice(convertForDisplay(customsCost))} {displayCurrency}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-secondary hover:bg-secondary/80 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Icon name="Calculator" size={20} className="text-accent" />
                <span className="font-semibold">Таможенный калькулятор</span>
              </button>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Итого "под ключ" в {currency === 'BYN' ? 'Беларуси' : 'России'}</span>
                  <Icon name="Info" size={16} className="text-muted-foreground" />
                </div>
                <div className="text-3xl font-bold">{formatPrice(displayTotal)} {displayCurrency}*</div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={exportToPDF}
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  PDF
                </Button>
                <Button
                  className="flex-1 bg-accent hover:bg-accent/90"
                  onClick={() => setActiveTab('credit')}
                >
                  В кредит
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
                <div className="text-2xl font-bold">{formatPrice(convertForDisplay(loanAmount))} {displayCurrency}</div>
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
                <div className="text-2xl font-bold">{formatPrice(convertForDisplay(downPayment))} {displayCurrency}</div>
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
                <div className="text-3xl font-bold mb-1">от {formatPrice(convertForDisplay(monthlyPayment))} {displayCurrency}/мес</div>
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

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setActiveTab('detail')}
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={exportToPDF}
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    PDF
                  </Button>
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={onClose}
                  >
                    Связаться
                  </Button>
                </div>
              </div>

              <button className="w-full py-3 text-foreground flex items-center justify-between hover:bg-secondary rounded-lg px-4 transition-colors">
                <span className="font-semibold">Банки партнеры</span>
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculator;