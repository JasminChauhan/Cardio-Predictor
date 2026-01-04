from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

# -------------------------------
# App init
# -------------------------------
app = FastAPI(title="Cardio Disease Prediction API")

# -------------------------------
# CORS (Next.js)
# -------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:3000",                     
    "https://cardio-predictor.vercel.app/",    
    "https://*.vercel.app"                 
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Load model & scaler
# -------------------------------
model = joblib.load("model.joblib")
scaler = joblib.load("scaler.joblib")

print("✅ Model loaded")
print("✅ Scaler loaded")
print("Expected features:", model.n_features_in_)

# -------------------------------
# Input Schema (12 FEATURES)
# -------------------------------
class InputData(BaseModel):
    gender: int
    height: int
    weight: float
    ap_hi: int
    ap_lo: int
    cholesterol: int
    gluc: int
    smoke: int
    alco: int
    active: int
    age_years: int
    bmi: float

# -------------------------------
# Health check
# -------------------------------
@app.get("/")
def root():
    return {"status": "Cardio ML API running"}

# -------------------------------
# Prediction
# -------------------------------
@app.post("/predict")
def predict(data: InputData):
    try:
        # Arrange features EXACTLY like training
        input_data = np.array([[
            data.gender,
            data.height,
            data.weight,
            data.ap_hi,
            data.ap_lo,
            data.cholesterol,
            data.gluc,
            data.smoke,
            data.alco,
            data.active,
            data.age_years,
            data.bmi
        ]])

        # Scale
        input_scaled = scaler.transform(input_data)

        # Predict
        prediction = model.predict(input_scaled)

        probability = None
        if hasattr(model, "predict_proba"):
            probability = float(model.predict_proba(input_scaled)[0][1])

        return {
            "prediction": int(prediction[0]),
            "probability": probability
        }

    except Exception as e:
        return {"error": str(e)}

