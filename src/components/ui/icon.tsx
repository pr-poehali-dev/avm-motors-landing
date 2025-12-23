import React from 'react';
import { 
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Bike,
  Calendar,
  Calculator,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock,
  DollarSign,
  Eye,
  FileText,
  Filter,
  Fuel,
  Gauge,
  Globe,
  Grid,
  Heart,
  Info,
  List,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Package,
  Phone,
  Play,
  Scale,
  Search,
  Send,
  Settings,
  Share2,
  Shield,
  Star,
  Sun,
  Target,
  TrendingUp,
  Truck,
  User,
  Users,
  X,
  Zap,
  type LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.FC<LucideProps>> = {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Bike,
  Calendar,
  Calculator,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock,
  DollarSign,
  Eye,
  FileText,
  Filter,
  Fuel,
  Gauge,
  Globe,
  Grid,
  Heart,
  Info,
  List,
  ListChecks,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Package,
  Phone,
  Play,
  Scale,
  Search,
  Send,
  Settings,
  Share2,
  Shield,
  Star,
  Sun,
  Target,
  TrendingUp,
  Truck,
  User,
  Users,
  X,
  Zap,
};

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = 'CircleAlert', ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    const FallbackIcon = iconMap[fallback];
    if (!FallbackIcon) {
      return <span className="text-xs text-gray-400">[icon]</span>;
    }
    return <FallbackIcon {...props} />;
  }

  return <IconComponent {...props} />;
};

export default Icon;