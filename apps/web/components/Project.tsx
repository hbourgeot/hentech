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
  FormDescription,
} from "./ui/form";
import { Input } from "./ui/input";
import * as React from "react";
import { Button } from "./ui/button";
import { Combobox } from "./Combobox";
import { client } from "@/lib/axios";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SelectInput } from "./Select";
import { CheckIcon, SlidersHorizontal } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { CommandInput, Command, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

const projectSchema = z.object({
  name: z
    .string()
    .min(1,{ message: "Name is required" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  comercialDesignation: z
    .string()
    .min(1,{ message: "Commercial Designation is required" })
    .max(50, { message: "Commercial Designation cannot exceed 50 characters" }),
  status: z
    .string()
    .min(1, { message: "Status is required" })
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
    .min(1,{message: "Type is required"})
    .max(50, { message: "Type cannot exceed 50 characters" })
    .nullable(),
});

const stateOptions = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Pending", value: "Pending" },
  { label: "Finished", value: "Finished" },
  { label: "Abandoned", value: "Abandoned" },
];

interface FormProps extends React.HTMLAttributes<HTMLDivElement>{
  employees: { label: string; value: number; }[]
}

export function ProjectForm({ className, employees, ...props }: FormProps) {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      comercialDesignation: "",
      status: "",
      leaderId: null,
      type: "",
    },
  });

  async function onSubmit(values: z.infer<typeof projectSchema>) {
    const {data} = await client.post('/api/projects', values)
    console.log(data)
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {stateOptions.map((state, index) => (
                      <SelectItem key={index} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Status of the project
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field for leaderId */}
          <FormField
            control={form.control}
            name="leaderId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Leader</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}>
                        {field.value
                          ? employees.find(
                              (employees) => employees.value === field.value
                            )?.label
                          : "Select employee"}
                        <SlidersHorizontal className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search employee..."
                        className="h-9"
                      />
                      <CommandEmpty>No employee found.</CommandEmpty>
                      <CommandGroup>
                        {employees.map((employee) => (
                          <CommandItem
                            value={employee.label}
                            key={employee.value}
                            onSelect={() => {
                              form.setValue("leaderId", employee.value);
                            }}>
                            {employee.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                employee.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This is the employee that will be the Project Leader
                </FormDescription>
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
                  <Input placeholder="Type" {...field} />
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
