"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/Combobox";
import { SelectInput } from "@/components/Select";
import { X } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  stateOptions: any[];
  employees: any[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  stateOptions,
  employees,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });
  return (
    <div>
      <section className="flex flex-wrap w-full place-content-center">
        <span className="w-1/4 p-4">
          <label htmlFor="name">Project Name</label>
          <Input
            name="name"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(e) =>
              table.getColumn("name")?.setFilterValue(e.target.value)
            }
          />
        </span>
        <span className="w-1/4 p-4">
          <label htmlFor="comercialDesignation">Commercial Designation</label>
          <Input
            name="comercialDesignation"
            value={
              (table
                .getColumn("comercialDesignation")
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(e) =>
              table
                .getColumn("comercialDesignation")
                ?.setFilterValue(e.target.value)
            }
          />
        </span>
        <span className="w-1/4 p-4">
          <label htmlFor="type">Project Type</label>
          <Input
            name="type"
            value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
            onChange={(e) =>
              table.getColumn("type")?.setFilterValue(e.target.value)
            }
          />
        </span>
        <span className="w-1/4 p-4 flex flex-col">
          <label htmlFor="status">Project Status</label>
          <div className="flex gap-x-2">
            <SelectInput
              data={stateOptions}
              label="Select a status"
              className="border-primary"
              placeholder=""
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? ""
              }
              onChange={(value: string) => {
                table.getColumn("status")?.setFilterValue(value);
              }}
            />
            <Button
              variant={"outline"}
              onClick={() => table.getColumn("status")?.setFilterValue("")}
              size={"icon"}>
              <X className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </span>
      </section>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
}
