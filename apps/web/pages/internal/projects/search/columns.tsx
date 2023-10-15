"use client";

import { Project } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "comercialDesignation",
    header: "Comercial Designation",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "leader",
    header: "Leader",
    cell: ({ row }) => {
      return `${row.original.leader.name} ${row.original.leader.lastName}`
    }
  },
];