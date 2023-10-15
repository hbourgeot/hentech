"use client";

import { ProjectForm } from "@/components/Project";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { client } from "@/lib/axios";
import { Employee, Project } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil } from "lucide-react";
import { useEffect } from "react";
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
          <Dialog>
            <DialogTrigger>
                <Pencil className="w-4 h-4 text-primary" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit {row.original.comercialDesignation}</DialogTitle>
              </DialogHeader>
              {/*@ts-ignore */}
              <ProjectForm employees={row.original.employees} edit values={row.original} />
            </DialogContent>
          </Dialog>
        </>
      );
    },
  },
];
const getEmployees = () => {
  return client
    .get("/api/employees")
    .then((response) => {
      const { data }: {data: Employee[]} = response;
      console.log(data);
      const mappedData = data.map((item) => ({
        label: `${item.name} ${item.lastName}`,
        value: item.id,
      }));
      return mappedData;
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
      throw error; // Puedes manejar el error según tus necesidades
    });
};