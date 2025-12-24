"use client";
import React from "react";
import { Input } from "@/components/ui/input";

import { Form as ShadForm, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm, Resolver } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";


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


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-8/12 rounded-md  mt-0 md:mt-15  p-4 md:rounded-2xl md:p-8 dark:bg-black border border-neutral-200 dark:border-neutral-700">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Info Form
      </h2>
      <p className="mt-2 max-w-fit  text-sm text-neutral-600 dark:text-neutral-300">
        Fill in the form , make sure to provide accurate information and we will consider the security of your personal data.
      </p>
      <ShadForm {...form}>
        <form
          onSubmit={form.handleSubmit(console.log)}
          className="mt-8 space-y-8"
        >
          {/* AGE + GENDER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Age</FormLabel>
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
                  <Select onValueChange={(v) => field.onChange(Number(v))} defaultValue="1">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Normal</SelectItem>
                      <SelectItem value="2">Above Normal</SelectItem>
                      <SelectItem value="3">High</SelectItem>
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
                  <Select onValueChange={(v) => field.onChange(Number(v))} defaultValue="1">
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Normal</SelectItem>
                      <SelectItem value="2">Above Normal</SelectItem>
                      <SelectItem value="3">High</SelectItem>
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

          {/* SUBMIT */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </ShadForm>



    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
