export interface PredictionInput {
  gender: number;
  height: number;
  weight: number;
  ap_hi: number;
  ap_lo: number;
  cholesterol: number;
  gluc: number;
  smoke: number;
  alco: number;
  active: number;
  age_years: number;
  bmi: number;
}

export interface PredictionResponse {
  prediction: number;
  probability: number | null;
  error?: string;
}

export interface FormData {
  // Personal Information
  gender: string;
  age: string;
  height: string;
  weight: string;
  
  // Vital Signs
  systolicBP: string;
  diastolicBP: string;
  
  // Health Markers
  cholesterol: string;
  glucose: string;
  
  // Lifestyle
  smoker: string;
  alcohol: string;
  physicalActivity: string;
}

export enum PredictionStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface RiskLevel {
  level: 'low' | 'moderate' | 'high' | 'very-high';
  color: string;
  message: string;
  recommendations: string[];
}