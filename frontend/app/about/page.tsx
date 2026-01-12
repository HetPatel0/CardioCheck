import React from "react";

function About() {
  return (
    <main className="flex min-h-screen items-start justify-center px-4 pt-24">
      <div className="bg-card max-w-4xl rounded-2xl p-6 text-left shadow-md space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center">
          Cardiovascular Disease Prediction
        </h1>

        {/* Project Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p className="text-base leading-relaxed">
            This application predicts the likelihood of cardiovascular disease using
            machine learning techniques. The model is trained on real-world health
            data to assist in early risk identification and clinical decision support.
          </p>
        </section>

        {/* Dataset */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Dataset Used</h2>
          <p className="text-base leading-relaxed">
            The dataset used for this project is sourced from Kaggle and contains
            patient health records including age, gender, blood pressure,
            cholesterol level, glucose, BMI, smoking habits, alcohol intake, and
            physical activity.
          </p>
          <p className="mt-2">
            The target variable indicates whether a patient is at risk of
            cardiovascular disease.
          </p>
        </section>

        {/* Preprocessing */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Data Preprocessing</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Removed invalid and inconsistent data entries</li>
            <li>Converted age from days into years</li>
            <li>Encoded categorical variables into numerical form</li>
            <li>Applied feature scaling to normalize input values</li>
            <li>Split data into training and testing sets</li>
          </ul>
        </section>

        {/* Model Training */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Model Training</h2>
          <p className="text-base leading-relaxed">
            Multiple machine learning models were evaluated during experimentation.
            A boosting-based model was selected due to its strong performance on
            structured medical data and its ability to capture complex patterns.
          </p>
        </section>

        {/* Prediction Flow */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Prediction Workflow</h2>
          <p className="text-base leading-relaxed">
            User health inputs are collected through the frontend interface and sent
            to a FastAPI backend. The backend processes the data and passes it to the
            trained machine learning model, which returns a real-time cardiovascular
            risk prediction.
          </p>
        </section>

      </div>
    </main>
  );
}

export default About;
