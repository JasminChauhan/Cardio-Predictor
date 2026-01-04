import { PredictionInput, PredictionResponse } from '@/types/prediction';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async healthCheck(): Promise<{ status: string }> {
    const response = await fetch(`${this.baseURL}/`);
    if (!response.ok) {
      throw new Error('API health check failed');
    }
    return response.json();
  }

  async predict(data: PredictionInput): Promise<PredictionResponse> {
    try {
      const response = await fetch(`${this.baseURL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const result: PredictionResponse = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Prediction failed: ${error.message}`);
      }
      throw new Error('An unexpected error occurred');
    }
  }
}

export const apiClient = new APIClient(API_BASE_URL);

// Helper function to calculate BMI
export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  return Number((weight / (heightInMeters * heightInMeters)).toFixed(2));
};