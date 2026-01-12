"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import { Form as ShadForm, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm, Resolver } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useRouter } from "next/navigation";
import { LucideLoader2 } from "lucide-react";
import { LoaderFive } from "./ui/loader";


const formSchema = z
  .object({
    age: z.coerce
      .number()
      .min(18, "Age must be at least 18")
      .max(120, "Age must be less than 120"),
    height: z.coerce
      .number()
      .min(100, "Height must be at least 100 cm")
      .max(250, "Height must be less than 250 cm"),
    weight: z.coerce
      .number()
      .min(30, "Weight must be at least 30 kg")
      .max(300, "Weight must be less than 300 kg"),
    gender: z.coerce
      .number()
      .pipe(z.union([z.literal(1), z.literal(2)], "Please select a gender")),
    ap_hi: z.coerce
      .number()
      .min(60, "Systolic BP must be at least 60")
      .max(250, "Systolic BP must be less than 250"),
    ap_lo: z.coerce
      .number()
      .min(40, "Diastolic BP must be at least 40")
      .max(150, "Diastolic BP must be less than 150"),
    cholesterol: z.coerce
      .number()
      .pipe(
        z.union(
          [z.literal(1), z.literal(2), z.literal(3)],
          "Selection required",
        ),
      ),
    gluc: z.coerce
      .number()
      .pipe(
        z.union(
          [z.literal(1), z.literal(2), z.literal(3)],
          "Selection required",
        ),
      ),
    smoke: z.boolean().default(false),
    alco: z.boolean().default(false),
    active: z.boolean().default(false),
  })
  .refine((data) => data.ap_hi > data.ap_lo, {
    message: "Systolic BP must be greater than Diastolic BP",
    path: ["ap_hi"],
  });



type FormData = z.infer<typeof formSchema>;

export function Form() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as Resolver<FormData>,
    mode: "onBlur",
    defaultValues: {
      age: "" as unknown as number,
      height: "" as unknown as number,
      weight: "" as unknown as number,
      gender: undefined,
      ap_hi: "" as unknown as number,
      ap_lo: "" as unknown as number,
      cholesterol: 1,
      gluc: 1,
      smoke: false,
      alco: false,
      active: false,
    },
  });


  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false);
async function onSubmit(data: FormData) {
  try {
    setIsLoading(true)
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    
}
);
  setIsLoading(false) 
console.log(res); 
router.push("/result");
  } catch (error) {
    console.error("Prediction error:", error);
  }
}

  return (
    <div className="shadow-input mx-auto w-full  md:max-w-8/12 rounded-md  mt-0 md:mt-15  p-4 md:rounded-2xl md:p-8  border bg-card">
      <h2 className="text-3xl font-bold ">
       Prediction Form
      </h2>
      <p className="mt-2 max-w-fit  text-sm ">
        Fill in the form , make sure to provide accurate information and we will consider the security of your personal data.
      </p>
      <ShadForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* AGE + GENDER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Age</FormLabel>
                  <FormDescription>Enter your age in years</FormDescription>
                  <FormControl>
                    <Input type="number" placeholder="Years" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gender</FormLabel>
                  <FormDescription> Choose your gender</FormDescription>  
                  <Select onValueChange={(v) => field.onChange(Number(v))}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Male</SelectItem>
                      <SelectItem value="2">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
              />
          </div>

          {/* HEIGHT + WEIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Height (cm)</FormLabel>
                  <FormDescription> Enter your height in centimeters</FormDescription>  
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormDescription> Enter your weight in kilograms</FormDescription>  
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
          </div>

          {/* BLOOD PRESSURE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="ap_hi"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Systolic BP</FormLabel>
                  <FormDescription> Enter your systolic blood pressure (the higher number on your reading)</FormDescription>  
                  
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            <FormField
              control={form.control}
              name="ap_lo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Diastolic BP</FormLabel>
                  <FormDescription> Enter your diastolic blood pressure (the lower number on your reading)</FormDescription>  
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
          </div>

          {/* CHOLESTEROL + GLUCOSE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="cholesterol"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Cholesterol</FormLabel>
                  <FormDescription> Range of total cholesterol given, select according to your readings </FormDescription>  
                  <Select onValueChange={(v) => field.onChange(Number(v))} defaultValue="1">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Normal (below 200)</SelectItem>
                      <SelectItem value="2">Above Normal (200-239)</SelectItem>
                      <SelectItem value="3">High ( 240 or higher)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
              />

            <FormField
              control={form.control}
              name="gluc"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Glucose</FormLabel>
                  <FormDescription> Enter your glucose level according to blood test in mg/dl </FormDescription>  
                  <Select onValueChange={(v) => field.onChange(Number(v))} defaultValue="1">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Normal (below 100)</SelectItem>
                      <SelectItem value="2">Above Normal (100-125)</SelectItem>
                      <SelectItem value="3">High (126 or higher) </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* LIFESTYLE */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(["smoke", "alco", "active"] as const).map((name) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3 rounded-lg border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="capitalize">{name}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>

          <Button type="submit" className="w-full">
            {
              isLoading?<LoaderFive   text="predicting result ..."/>:"submit"
            }
          </Button>
        </form>
      </ShadForm>



    </div>
  );
}



