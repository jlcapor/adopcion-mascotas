"use client"

import { type Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { DeleteProductsDialog } from "./delete-product-dialog"
import { Product } from "@prisma/client"

interface ProductsTableToolbarActionsProps {
  table: Table<Product>
}

export function ProductsTableToolbarActions({
  table,
}: ProductsTableToolbarActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteProductsDialog
          products={table
            .getFilteredSelectedRowModel()
            .rows.map((row) => row.original)}
          onSuccess={() => table.toggleAllRowsSelected(false)}
        />
      ) : null}
      {/**
       * Other actions can be added here.
       * For example, import, view, etc.
       */}
    </div>
  )
}
