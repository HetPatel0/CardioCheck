

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function CardioResult() {
  const risk = 71;
   const cookieStore = await cookies();
  const predictionCookie = cookieStore.get("prediction");

  if (!predictionCookie) {
    redirect("/");
  }

  const result = JSON.parse(predictionCookie.value);

  return (
    <main className="min-h-screen px-6 py-16 overflow-hidden ">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <section className="space-y-4">
          <Badge
            variant="outline"
            className="border-red-500 text-red-400"
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

            <h2 className="text-7xl font-bold text-red-500">
              {risk}%
            </h2>

            <Badge className="dark:bg-red-500/10 text-red-400 border border-red-500">
              Critical Risk Detected
            </Badge>

            {/* Progress */}
            <div className="max-w-md mx-auto">
              <div className="h-2 rounded-full dark:bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-red-500 transition-all"
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
              <p className="text-sm text-muted-foreground">
                Blood Pressure
              </p>
              <h3 className="text-xl font-semibold text-red-400">
                Elevated
              </h3>
              <p className="text-sm text-muted-foreground">
                Systolic BP exceeds optimal range.
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-zinc-950 dark:border-zinc-800">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                Cholesterol
              </p>
              <h3 className="text-xl font-semibold text-red-400">
                High Risk
              </h3>
              <p className="text-sm text-muted-foreground">
                LDL levels may be elevated.
              </p>
            </CardContent>
          </Card>

          <Card className="dark:bg-zinc-950 dark:border-zinc-800">
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                Lifestyle
              </p>
              <h3 className="text-xl font-semibold text-green-400">
                Needs Improvement
              </h3>
              <p className="text-sm text-muted-foreground">
                Physical activity is below recommendation.
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
              <li>• Maintain systolic blood pressure below 130 mmHg.</li>
              <li>• Reduce sodium intake and monitor cholesterol levels.</li>
              <li>• Schedule a professional cardiac evaluation.</li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="secondary">
                Re-check Assessment
              </Button>
              <Button className="bg-red-500 hover:bg-red-600">
                Download Report
              </Button>
            </div>

          </CardContent>
        </Card>

      </div>
    </main>
  );
}
