"use client";
import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import DataTable from "@/components/ui/foundations/data-table";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { Button } from "@/components/ui/shadcn/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import DatatableColumnHeader from "@/components/ui/foundations/datatable-column-header";
import { ColumnMeta } from "@/types/dataTableTypes";


export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const page = () => {

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@example.com",
    },
    {
      id: "3u1reuv4",
      amount: 316,
      status: "success",
      email: "Abe45@example.com",
    },
    {
      id: "derv1ws0",
      amount: 316,
      status: "processing",
      email: "Monserrat44@example.com",
    },
    {
      id: "5kma53ae",
      amount: 316,
      status: "success",
      email: "Silas22@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 316,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@example.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@example.com",
    },
  ]

  // Filter options

  const statusFilterOptions = useMemo(() => {
    // 1) Collect all statuses
    const allStatuses = data.map((item) => item.status);
    // 2) Turn into a Set to dedupe
    const uniqueStatuses = Array.from(new Set(allStatuses));
    // 3) Map each status ➔ { label: TitleCase(status), value: status }
    return uniqueStatuses.map((status) => ({
      label: status.charAt(0).toUpperCase() + status.slice(1),
      value: status,
    }));
  }, [data]);

  const emailFilterOptions = useMemo(() => {
    const allEmails = data.map((item) => item.email);
    const uniqueEmails = Array.from(new Set(allEmails));
    return uniqueEmails.map((email) => ({
      label: email,
      value: email,
    }));
  }, [data]);

  const amountFilterOptions = useMemo(() => {
    const allAmounts = data.map((item) => item.amount)
    const uniqueAmounts = Array.from(new Set(allAmounts))
    return uniqueAmounts.map((amount) => ({
      label: amount.toString(),
      value: amount.toString()
    }))
  }, [data])

  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="data-[state=checked]:border-border data-[state=checked]:bg-foreground data-[state=checked]:text-accent-foreground"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="data-[state=checked]:border-border data-[state=checked]:bg-foreground data-[state=checked]:text-accent-foreground"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: ({ column }) => <DatatableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
      filterFn: "multiSelect",
      meta: {
        filterType: "multiselect",
        filterOptions: statusFilterOptions,
        filterPlaceholder: "Filter status...",
      } as ColumnMeta,
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <DatatableColumnHeader
            title="Email"
            column={column}
            className="text-left"
          />
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
      filterFn: "multiSelect",
      meta: {
        filterType: "multiselect",
        filterOptions: emailFilterOptions,
        filterPlaceholder: "Filter email...",
      } as ColumnMeta,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => <DatatableColumnHeader column={column} title="Amount" />,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="font-medium">{formatted}</div>;
      },
      filterFn: "multiSelect",
      meta: {
        filterType: "multiselect",
        filterOptions: amountFilterOptions,
        filterPlaceholder: "Filter amount..."
      } as ColumnMeta
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const payment = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      enableSorting: false,
      enableHiding: false,
    },
  ];


  return (
    <>
      <Card className="bg-card border-none shadow-none">
        <CardHeader className="border-b border-sidebar-border gap-0">
          <CardTitle className="text-xl text-foreground">Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            enableExport={true}
            exportFilename="payments-export"
            excludeExportColumns={["actions", "select"]}
            enableGlobalFilter={true}
            enablePagination={true}
            enableColumnVisibility={true}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default page;
