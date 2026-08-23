export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'tax' | 'accounting' | 'registration' | 'compliance';
  tagline: string;
  description: string;
  deliverables: string[];
  documentsRequired: string[];
  turnaroundTime: string;
  badge?: string;
}

export interface ComplianceDeadline {
  id: string;
  title: string;
  frequency: string;
  dueDate: string;
  category: 'GST' | 'ITR' | 'TDS' | 'PF' | 'ROC';
  importance: 'urgent' | 'regular';
  description: string;
}

export interface WorkingHourDay {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  preferredTime?: string;
}
