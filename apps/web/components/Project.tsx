"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import * as React from "react";
import { Button } from "./ui/button";
import { Combobox } from "./Combobox";

const projectSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  comercialDesignation: z
    .string()
    .nonempty({ message: "Commercial Designation is required" })
    .max(50, { message: "Commercial Designation cannot exceed 50 characters" }),
  status: z
    .string()
    .nonempty({ message: "Status is required" })
    .max(50, { message: "Status cannot exceed 50 characters" }),
  leaderId: z
    .number()
    .int({ message: "Leader ID must be an integer" })
    .nullable()
    .refine((value) => value !== null, {
      message: "Leader ID cannot be null",
      params: { nullable: false },
    }),
  type: z
    .string()
    .max(50, { message: "Type cannot exceed 50 characters" })
    .nullable(),
});

interface FormProps extends React.HTMLAttributes<HTMLDivElement>{
  employees: { label: string; value: string; }[]
}

export function ProjectForm({className, employees, ...props}: FormProps) {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      comercialDesignation: "",
      status: "",
      leaderId: null,
      type: null,
    },
  });

  function onSubmit(values: z.infer<typeof projectSchema>) {
    console.log(values);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Field for name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Project Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field for comercialDesignation */}
          <FormField
            control={form.control}
            name="comercialDesignation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commercial Designation</FormLabel>
                <FormControl>
                  <Input placeholder="Commercial Designation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field for status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Input placeholder="Status" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field for leaderId */}
          <FormField
            control={form.control}
            name="leaderId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Leader</FormLabel>
                <FormControl>
                  <Combobox data={employees} notFound="Employee not found" placeholder="Search employee..." className="w-full"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field for type */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input placeholder="Type" {...field} value={""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
