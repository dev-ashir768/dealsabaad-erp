"use client";

import React, { useState } from 'react'
import {
  ColumnDef,  // 
  ColumnFiltersState, FilterFn, // State for column filters
  SortingState, // State for sorting
  VisibilityState,  // State for column visibility
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,

  useReactTable,
} from "@tanstack/react-table"

import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table"
import DataTablePagination from './datatable-pagination';
import DataTableGlobalFilter from './datatable-global-filter';
import DataTableColumnVisibility from './datatable-column-visibility';
import DataTableExport from './datatable-export';


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[],
  excludeExportColumns?: string[]; // Optional prop to exclude specific columns from export
  exportFilename?: string; // Optional prop for export filename
  enableExport?: boolean; // Optional prop to enable export functionality
  enableGlobalFilter?: boolean; // Optional prop to enable global filtering
  enablePagination?: boolean; // Optional prop to enable pagination
  enableColumnVisibility?: boolean; // Optional prop to enable column visibility
}

// Custom filter function for multi-select
const multiSelectFilter: FilterFn<any> = (row, columnId, filterValue) => {
  if (!filterValue?.length) return true;
  const cellValue = String(row.getValue(columnId));
  return filterValue.includes(cellValue);
};


const DataTable = <TData, TValue>({
  columns,
  data,
  excludeExportColumns,
  exportFilename,
  enableExport,
  enableGlobalFilter,
  enablePagination,
  enableColumnVisibility,
}: DataTableProps<TData, TValue>) => {

  // State management for sorting, column filters, visibility, and row selection
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState<string>("")


  // Initialize the table with the provided data and columns
  // and the state management functions for sorting, filtering, visibility, and selection
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      multiSelect: multiSelectFilter, // Register the custom filter function
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter
    }
  })

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            {enableGlobalFilter && (<DataTableGlobalFilter table={table} />)}
          </div>
          <div className='flex items-center gap-3'>
            {enableColumnVisibility && (<DataTableColumnVisibility table={table} />)}
            {enableExport && (<DataTableExport table={table} filename={exportFilename} excludeColumns={excludeExportColumns} />)}
          </div>
        </div>
        <ScrollArea className="h-[420px] rounded-md border border-sidebar-border mb-6 w-full">
          <ScrollBar orientation="vertical" />
          <Table className='relative'>
            <TableHeader className="bg-accent-foreground sticky z-20 top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className='text-foreground' key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className='text-foreground' key={cell.id}>
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
                    className="h-[380px] text-center text-foreground"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {enablePagination && (
          <DataTablePagination table={table} />
        )}
      </div>
    </>
  )
}

export default DataTable