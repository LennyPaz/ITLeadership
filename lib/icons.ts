import {
  Heart,
  Users,
  BookOpen,
  Star,
  Shield,
  Apple,
  Clock,
  Utensils,
  FileEdit,
  GraduationCap,
  Briefcase,
  Award,
  Gift,
  Home,
  CreditCard,
  Mail,
  Building,
  HandHeart,
  Calendar,
  type LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  Heart,
  Users,
  BookOpen,
  Star,
  Shield,
  Apple,
  Clock,
  Utensils,
  FileEdit,
  GraduationCap,
  Briefcase,
  Award,
  Gift,
  Home,
  CreditCard,
  Mail,
  Building,
  HandHeart,
  Calendar,
}

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Heart
}
