import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CardioResult() {
  const cookieStore = await cookies();
  const predictionCookie = cookieStore.get("prediction");

  if (!predictionCookie) {
    redirect("/");
  }

  const result = JSON.parse(predictionCookie.value);

  const isSafe = result.prediction === 0;

  const risk = isSafe
    ? (result.probability_no_disease * 100).toFixed(1)
    : (result.probability_disease * 100).toFixed(1);

  const ui = {
    title: isSafe ? "Low Cardiac Risk" : "High Cardiac Risk",
    badgeText: isSafe ? "Safe Condition" : "Critical Risk Detected",
    badgeColor: isSafe
      ? "border-green-500 text-green-400 bg-green-500/10"
      : "border-red-500 text-red-400 bg-red-500/10",
    mainColor: isSafe ? "text-green-500" : "text-red-500",
    barColor: isSafe ? "bg-green-500" : "bg-red-500",
  };

  return (
    <main className="min-h-screen px-6 py-16 overflow-hidden ">
      <div className="max-w-6xl mx-auto space-y-16 mt-5">

        {/* Header */}
        <section className="space-y-4">
          <Badge
            variant="outline"
            className={isSafe ? "border-green-500 text-green-400" : "border-red-500 text-red-400"}
          >
            AI Risk Analysis
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold">
            Cardiac Health Result
          </h1>

          <p className="text-muted-foreground max-w-xl">
            This report is generated using a trained machine learning model
            based on your submitted health data.
          </p>
        </section>

        {/* Main Risk Card */}
        <Card className="dark:bg-zinc-950 dark:border-zinc-800">
          <CardContent className="py-16 text-center space-y-8">
            <p className="text-sm tracking-widest text-muted-foreground">
              ESTIMATED CARDIOVASCULAR RISK
            </p>

            <h2 className={`text-7xl font-bold ${ui.mainColor}`}>
              {risk}%
            </h2>

            <Badge className={ui.badgeColor}>
              {ui.badgeText}
            </Badge>

            <div className="max-w-md mx-auto">
              <div className="h-2 rounded-full dark:bg-zinc-800 overflow-hidden">
                <div
                  className={`h-full transition-all ${ui.barColor}`}
                  style={{ width: `${risk}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dark:bg-zinc-950 dark:border-zinc-800">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Blood Pressure</p>
              <h3 className={`text-xl font-semibold ${isSafe ? "text-green-400" : "text-red-400"}`}>
                {isSafe ? "Normal" : "Elevated"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isSafe
                  ? "Blood pressure is within healthy range."
                  : "Systolic BP exceeds optimal range."}
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-zinc-950 dark:border-zinc-800">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Cholesterol</p>
              <h3 className={`text-xl font-semibold ${isSafe ? "text-green-400" : "text-red-400"}`}>
                {isSafe ? "Normal" : "High Risk"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isSafe
                  ? "Cholesterol levels appear controlled."
                  : "LDL levels may be elevated."}
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-zinc-950 dark:border-zinc-800">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Lifestyle</p>
              <h3 className={`text-xl font-semibold ${isSafe ? "text-green-400" : "text-yellow-400"}`}>
                {isSafe ? "Healthy" : "Needs Improvement"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isSafe
                  ? "You are maintaining a healthy lifestyle."
                  : "Physical activity is below recommendation."}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* AI Guidance */}
        <Card className="dark:bg-zinc-950 dark:border-zinc-800">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-2xl font-semibold">
              AI-Based Guidance
            </h3>

            <Separator className="dark:bg-zinc-800" />

            <ul className="space-y-3 text-muted-foreground">
              {isSafe ? (
                <>
                  <li>• Maintain your current healthy lifestyle.</li>
                  <li>• Continue regular physical activity.</li>
                  <li>• Periodic health checkups are recommended.</li>
                </>
              ) : (
                <>
                  <li>• Maintain systolic blood pressure below 130 mmHg.</li>
                  <li>• Reduce sodium intake and monitor cholesterol levels.</li>
                  <li>• Schedule a professional cardiac evaluation.</li>
                </>
              )}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href='/form' >
              <Button variant="secondary">
                Re-check Assessment
              </Button>
              </Link>
              
            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}
