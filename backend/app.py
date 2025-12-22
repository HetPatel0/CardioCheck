from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd

model = joblib.load("cardio_model.pkl")


app = FastAPI(title="Cardio Disease Prediction API")

class PatientData(BaseModel):
    age: int
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

def calculate_bmi(weight, height_cm):
    return weight / ((height_cm / 100) ** 2)

@app.post("/predict")
def predict(data: PatientData):
    input_data = data.dict()

    # calculate BMI internally
    input_data["bmi"] = calculate_bmi(
        input_data["weight"],
        input_data["height"]
    )

    df = pd.DataFrame([input_data])

    # enforce feature order
    df = df[model.feature_names_in_]

    # prediction
    pred = model.predict(df)[0]

    # probability
    proba = model.predict_proba(df)[0]

    return {
        "prediction": int(pred),
        "probability_no_disease": round(float(proba[0]), 3),
        "probability_disease": round(float(proba[1]), 3)
    }   
