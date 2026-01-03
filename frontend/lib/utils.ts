import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RiskLevel } from '@/types/prediction';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRiskLevel(probability: number): RiskLevel {
  if (probability < 0.25) {
    return {
      level: 'low',
      color: 'text-green-600 bg-green-50 border-green-200',
      message: 'Low Risk',
      recommendations: [
        'Maintain your healthy lifestyle',
        'Continue regular physical activity',
        'Keep up with routine health checkups',
        'Monitor your blood pressure regularly'
      ]
    };
  } else if (probability < 0.50) {
    return {
      level: 'moderate',
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      message: 'Moderate Risk',
      recommendations: [
        'Consult with your healthcare provider',
        'Consider lifestyle modifications',
        'Increase physical activity to 150 min/week',
        'Monitor diet and reduce sodium intake',
        'Schedule regular health screenings'
      ]
    };
  } else if (probability < 0.75) {
    return {
      level: 'high',
      color: 'text-orange-600 bg-orange-50 border-orange-200',
      message: 'High Risk',
      recommendations: [
        'Schedule an appointment with a cardiologist soon',
        'Discuss medication options with your doctor',
        'Implement immediate lifestyle changes',
        'Monitor blood pressure daily',
        'Reduce stress and improve sleep quality',
        'Consider cardiac screening tests'
      ]
    };
  } else {
    return {
      level: 'very-high',
      color: 'text-red-600 bg-red-50 border-red-200',
      message: 'Very High Risk',
      recommendations: [
        'Seek immediate medical attention',
        'Consult a cardiologist as soon as possible',
        'Follow prescribed medication strictly',
        'Make urgent lifestyle modifications',
        'Monitor vital signs closely',
        'Avoid strenuous activities until cleared by doctor',
        'Consider comprehensive cardiac evaluation'
      ]
    };
  }
}

export function formatProbability(probability: number): string {
  return `${(probability * 100).toFixed(1)}%`;
}