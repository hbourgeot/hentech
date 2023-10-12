"use client";

import * as React from "react";
import { SlidersHorizontal, CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props{
  data: { label: string, value: string }[],
  placeholder: string;
  notFound: string;
  className?: string
}

export function Combobox({data, placeholder, notFound, className}: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | number>("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-between ${className}`}>
          {value
            ? data.find((item) => item.value === value)?.label
            : placeholder}
          <SlidersHorizontal className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandEmpty>{notFound}</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  console.log(currentValue)
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                {item.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
