import { PredictionInput, PredictionResponse } from '@/types/prediction';

// IMPORTANT: base URL must NOT include /predict
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ||
  'http://localhost:8000';

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async healthCheck(): Promise<{ status: string }> {
    const response = await fetch(`${this.baseURL}/`);
    if (!response.ok) {
      throw new Error(`API health check failed: ${response.status}`);
    }
    return response.json();
  }

  async predict(data: PredictionInput): Promise<PredictionResponse> {
    const response = await fetch(`${this.baseURL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // 🔍 Better error visibility
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`API request failed (${response.status}): ${text}`);
    }

    const result: PredictionResponse = await response.json();

    if ((result as any).error) {
      throw new Error((result as any).error);
    }

    return result;
  }
}

export const apiClient = new APIClient(API_BASE_URL);

// Helper function to calculate BMI
export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  return Number((weight / (heightInMeters * heightInMeters)).toFixed(2));
};
