"use client"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DeleteProductsDialog } from "./delete-product-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { formatDate, formatPrice } from "@/lib/utils";
import { Product } from "@prisma/client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export function getColumns(): ColumnDef<Product>[] {
    return [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                    className="translate-y-0.5"
                >
                </Checkbox>
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                    className="translate-y-0.5"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <DataTableColumnHeader column={column} title="Producto" />
            )
        },
        {
            accessorKey: "price",
            header: ({ column }) => (
              <DataTableColumnHeader column={column} title="Precio" />
            ),
            cell: ({ cell }) => formatPrice(cell.getValue() as number),
        },
        {
            accessorKey: "quantity",
            header: ({ column }) => (
              <DataTableColumnHeader column={column} title="Cantidad" />
            ),
        },
        {
            accessorKey: "rating",
            header: ({ column }) => (
              <DataTableColumnHeader column={column} title="Rating" />
            ),
        },
        {
            accessorKey: "createdAt",
            header: ({ column }) => (
              <DataTableColumnHeader column={column} title="Created At" />
            ),
            cell: ({ cell }) => formatDate(cell.getValue() as Date),
            enableColumnFilter: false,
        },
        {
            id: "actions",
            cell: function Cell({ row }) {
                const [showDeleteProductDialog, setShowDeleteProductDialog] = React.useState(false)
                return (
                    <>
                        <DeleteProductsDialog
                            open={showDeleteProductDialog}
                            onOpenChange={setShowDeleteProductDialog}
                            products={[row.original]}
                            showTrigger={false}
                            onSuccess={() => row.toggleSelected(false)}
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    aria-label="Open menu"
                                    variant="ghost"
                                    className="flex size-8 p-0 data-[state=open]:bg-muted"
                                >
                                    <DotsHorizontalIcon className="size-4" aria-hidden="true" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                                <DropdownMenuItem>
                                    Editar
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                 onSelect={() => setShowDeleteProductDialog(true)}
                                >
                                    Eliminar
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )
            }
        }
    ]
}