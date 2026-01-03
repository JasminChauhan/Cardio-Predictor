import { z } from 'zod';

export const predictionFormSchema = z.object({
  // Personal Information
  gender: z.string().min(1, 'Gender is required'),
  age: z.string()
    .min(1, 'Age is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 18 && Number(val) <= 120, {
      message: 'Age must be between 18 and 120',
    }),
  height: z.string()
    .min(1, 'Height is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 100 && Number(val) <= 250, {
      message: 'Height must be between 100 and 250 cm',
    }),
  weight: z.string()
    .min(1, 'Weight is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 30 && Number(val) <= 300, {
      message: 'Weight must be between 30 and 300 kg',
    }),
  
  // Vital Signs
  systolicBP: z.string()
    .min(1, 'Systolic BP is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 80 && Number(val) <= 250, {
      message: 'Systolic BP must be between 80 and 250 mmHg',
    }),
  diastolicBP: z.string()
    .min(1, 'Diastolic BP is required')
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 40 && Number(val) <= 150, {
      message: 'Diastolic BP must be between 40 and 150 mmHg',
    }),
  
  // Health Markers
  cholesterol: z.string().min(1, 'Cholesterol level is required'),
  glucose: z.string().min(1, 'Glucose level is required'),
  
  // Lifestyle
  smoker: z.string().min(1, 'Smoking status is required'),
  alcohol: z.string().min(1, 'Alcohol consumption is required'),
  physicalActivity: z.string().min(1, 'Physical activity is required'),
});

export type PredictionFormData = z.infer<typeof predictionFormSchema>;