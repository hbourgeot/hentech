"use client";

import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil } from "lucide-react";
export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          ID
          <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Name
          <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />
        </Button>
      );
    },
  },
  {
    accessorKey: "comercialDesignation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Comercial Designation
          <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />
        </Button>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Type
          <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Status
          <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />
        </Button>
      );
    },
  },
  {
    accessorKey: "leader",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Leader
          <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return `${row.original.leader.name} ${row.original.leader.lastName}`;
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return (
        <>
          <Button size={"sm"} className="rounded-full" variant={"ghost"}>
            <Pencil className="w-4 h-4 text-primary" />
          </Button>
        </>
      );
    },
  },
];
