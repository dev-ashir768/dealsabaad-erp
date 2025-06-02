"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/shadcn/card"
import DataTable from '@/components/ui/shadcn/data-table'
import { Checkbox } from '@/components/ui/shadcn/checkbox'
import { Button } from '@/components/ui/shadcn/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/shadcn/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import DatatableColumnHeader from '@/components/ui/shadcn/datatable-column-header'

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const page = () => {
    return (
        <>
            <Card className='bg-card border-none shadow-none'>
                <CardHeader className='border-b border-sidebar-border gap-0'>
                    <CardTitle className='text-xl text-foreground'>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                    <DataTable
                        columns={
                            [
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
                                            className='data-[state=checked]:border-border data-[state=checked]:bg-foreground data-[state=checked]:text-accent-foreground'
                                        />
                                    ),
                                    cell: ({ row }) => (
                                        <Checkbox
                                            checked={row.getIsSelected()}
                                            onCheckedChange={(value) => row.toggleSelected(!!value)}
                                            aria-label="Select row"
                                            className='data-[state=checked]:border-border data-[state=checked]:bg-foreground data-[state=checked]:text-accent-foreground'
                                        />
                                    ),
                                    enableSorting: false,
                                    enableHiding: false,
                                },
                                {
                                    accessorKey: "status",
                                    header: "Status",
                                    cell: ({ row }) => (
                                        <div className="capitalize">{row.getValue("status")}</div>
                                    ),
                                },
                                {
                                    accessorKey: "email",
                                    header: ({ column }) => {
                                        return (
                                            <DatatableColumnHeader
                                                title='Email'
                                                column={column}
                                                className="text-left"
                                            />
                                        )
                                    },
                                    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
                                },
                                {
                                    accessorKey: "amount",
                                    header: () => <div className="text-right">Amount</div>,
                                    cell: ({ row }) => {
                                        const amount = parseFloat(row.getValue("amount"))

                                        // Format the amount as a dollar amount
                                        const formatted = new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        }).format(amount)

                                        return <div className="text-right font-medium">{formatted}</div>
                                    },
                                },
                                {
                                    id: "actions",
                                    enableHiding: false,
                                    cell: ({ row }) => {
                                        const payment = row.original

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
                                        )
                                    },
                                },
                            ] as ColumnDef<Payment>[]
                        }
                        data={[
                            {
                                id: "m5gr84i9",
                                amount: 316,
                                status: "success",
                                email: "ken99@example.com",
                            },
                            {
                                id: "3u1reuv4",
                                amount: 242,
                                status: "success",
                                email: "Abe45@example.com",
                            },
                            {
                                id: "derv1ws0",
                                amount: 837,
                                status: "processing",
                                email: "Monserrat44@example.com",
                            },
                            {
                                id: "5kma53ae",
                                amount: 874,
                                status: "success",
                                email: "Silas22@example.com",
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
                        ] as Payment[]
                        }
                    />
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

        </>
    )
}

export default page