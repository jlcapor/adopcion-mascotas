"use client"

import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table"

import { DataTable } from "@/components/data-table/data-table"
import { Product, PRODUCT_STATUS } from "@prisma/client"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"
import { getCategories } from "@/lib/data/product"
import { useDataTable } from "@/hooks/use-data-table"
import { Badge } from "@/components/ui/badge"
import { DataTableFilterField } from "@/types"
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar"
import { ProductsTableToolbarActions } from "./products-table-toolbar-actions"
import { formatDate } from "@/lib/utils"
import { DeleteProductsDialog } from "./delete-product-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export interface ProductsTableProps {
  data: Product[]
  pageCount: number
  categories: Awaited<ReturnType<typeof getCategories>>
}

export function ProductsTable({
  data,
  pageCount,
  categories,
}: ProductsTableProps) {
  
 console.log(pageCount)
  const columns = React.useMemo<ColumnDef<Product, unknown>[]>(
    () => [
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
            className="translate-y-0.5"
          />
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
        ),
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Estado" />
        ),
        cell: ({ row }) => {
          const status = row.original.status; 
          if (!status) return null; 
          const statusMap: Record<PRODUCT_STATUS, string> = {
            DISPONIBLE: "Disponible",
            AGOTADO: "Agotado",
            DESCONTINUADO: "Descontinuado",
          };

          return (
            <div className="flex w-[6.25rem] items-center">
              <span className="capitalize">{statusMap[status]}</span>
            </div>
          );
        }
      },
      {
        accessorKey: "categoryId",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Categoria" />
        ),
        cell: ({ cell }) => {
          const categoryId = cell.getValue() as string; 
          const existingCategory = categories.find(
            (categoryData) => categoryData.id === Number(categoryId)
          );
          
          if (!existingCategory) return null
          return (
            <Badge variant="outline" className="capitalize">
              {existingCategory.name}
            </Badge>
          )
        },
        filterFn: (row, id, value) => {
          return Array.isArray(value) && value.includes(row.getValue(id))
        },
      },
      {
        accessorKey: "price",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Precio" />
        )
      },
      {
        accessorKey: "quantity",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Cantidad" />
        )
      },
      {
        accessorKey: "rating",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Calificación" />
        )
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
          const [showDeleteProductskDialog, setShowDeleteProductskDialog] = React.useState(false)
          return (
            <>
              <DeleteProductsDialog
                open={showDeleteProductskDialog}
                onOpenChange={setShowDeleteProductskDialog}
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
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onSelect={() => setShowDeleteProductskDialog(true)}
                    >
                      Delete
                    </DropdownMenuItem>
                 </DropdownMenuContent>
               </DropdownMenu>
            </>
          )
        }
      }
    ],
    [data]
  )

  const filterFields: DataTableFilterField<Product>[] = [
    {
      label: "Name",
      value: "name",
      placeholder: "Filter name...",
    },
  
  ]
  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    initialState: {
      sorting: [{ id: "createdAt", desc: true }],
      columnPinning: { right: ["actions"] },
    },
    
  })

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} filterFields={filterFields}>
          <ProductsTableToolbarActions table={table} />
        </DataTableToolbar>
    </DataTable>
  )
}
