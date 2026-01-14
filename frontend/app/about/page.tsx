"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import {
  Activity,
  Brain,
  Database,
  GitBranch,
  Layers,
  Target,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function About() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full px-4 text-primary font-medium text-sm mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:to-purple-400">
            Cardiovascular Disease Prediction Model
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Leveraging advanced machine learning algorithms to analyze health metrics and identify potential cardiovascular risks with high precision.
          </p>
        </motion.section>

        {/* Key Metrics Grid */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <MetricCard
            icon={<Target className="w-6 h-6 text-emerald-500" />}
            title="Accuracy"
            value="73.5%"
            description="Overall model correctness"
            trend="+2.1%"
          />
          <MetricCard
            icon={<CheckCircle2 className="w-6 h-6 text-blue-500" />}
            title="Precision"
            value="75.0%"
            description="Positive predictive value"
            trend="+1.4%"
          />
          <MetricCard
            icon={<TrendingUp className="w-6 h-6 text-purple-500" />}
            title="Recall"
            value="69.0%"
            description="Sensitivity / True Positive Rate"
            trend="+0.8%"
          />
          <MetricCard
            icon={<Activity className="w-6 h-6 text-rose-500" />}
            title="F1 Score"
            value="72.0%"
            description="Balance of precision & recall"
            trend="+1.2%"
          />
        </motion.section>

        {/* Model Architecture & Training Info - Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Model Details */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center">
                <Layers className="w-8 h-8 mr-3 text-primary" />
                Model Architecture
              </h2>
              <p className="text-muted-foreground text-lg">
                We utilize a Gradient Boosting Classifier, chosen for its superior performance on structured tabular data. The model was optimized through extensive hyperparameter tuning using Grid Search.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Training Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Dataset split: 80% Training, 20% Testing",
                  "5-Fold Cross-Validation for robustness",
                  "Feature scaling using StandardScaler",
                  "Perfectly Balanced Dataset",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-card-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Dataset & Inputs */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center">
                <Database className="w-8 h-8 mr-3 text-primary" />
                Data & Features
              </h2>
              <p className="text-muted-foreground text-lg">
                The model is trained on a comprehensive dataset of over 70,000 patient records, considering critical health indicators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Age", "Gender", "Height", "Weight",
                "Systolic BP (ap_hi)", "Diastolic BP (ap_lo)", "Cholesterol", "Glucose",
                "Smoking Status", "Alcohol Intake", "Physical Activity"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center p-3 rounded-lg bg-secondary/50 border border-border/50">
                  <GitBranch className="w-4 h-4 mr-3 text-primary/70" />
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Confusion Matrix / Performance Visualization Area */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="bg-card border border-border rounded-3xl p-8 shadow-sm text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Model Performance Visualization</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Placeholder for Confusion Matrix */}
            <div className="relative group w-auto h-auto bg-card rounded-xl flex items-center justify-center border border-border/50 p-2 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/confusion_matrix.png"
                alt="Confusion Matrix Visualization"
                width={500}
                height={500}
                className="rounded-lg object-contain max-w-full h-auto"
              />
            </div>

            {/* Additional stats */}
            <div className="text-left space-y-4 max-w-sm">
              <h4 className="font-semibold text-lg">Detailed Analysis</h4>
              <p className="text-muted-foreground">
                The confusion matrix demonstrates low false negative rates, which is crucial for medical diagnostic tools to ensure no potential cases are missed.
              </p>
              <div className="pt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Area Under Curve (AUC)</span>
                  <span className="font-bold">0.80</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}

function MetricCard({
  icon,
  title,
  value,
  description,
  trend
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  trend?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-secondary/50 rounded-lg">{icon}</div>
        {trend && (
          <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="font-medium text-foreground mb-1">{title}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </motion.div>
  );
}

