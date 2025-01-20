import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  id: string;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: ServiceFeature[];
}