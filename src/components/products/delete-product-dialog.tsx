import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Product } from '@prisma/client';
import { toast } from 'sonner';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button'; 
import { TrashIcon } from '@radix-ui/react-icons';
import { Icons } from '@/components/shared/Icons';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Row } from '@tanstack/react-table';

interface DeleteProductsDialogPros extends React.ComponentPropsWithoutRef<typeof Dialog> {
	products: Row<Product>["original"][]
	showTrigger?: boolean,
    onSuccess?: () => void
}
export function DeleteProductsDialog({ products, showTrigger = true, onSuccess, ...props }: DeleteProductsDialogPros) {
    const [ isDeletePending, startDeleteTransition ] = React.useTransition();
	const isDesktop = useMediaQuery('(min-width: 640px)')
    
    
	function onDelete() {
        props.onOpenChange?.(false)
        toast.success("productos eliminados")
        onSuccess?.()
    }
    if (isDesktop) {
        return (
            <Dialog {...props}>
                {showTrigger ? (
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                            <TrashIcon className="mr-2 size-4" aria-hidden="true" />
                        </Button>
                    </DialogTrigger>
                ) : null}
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>¿Estás absolutamente seguro?</DialogTitle>
                        <DialogDescription>
                            Esta acción no se puede deshacer. Esto eliminará permanentemente{" "}
                            <span className="font-medium">{products.length}</span>{" "}
                            {products.length === 1 ? "producto" : "productos"} de nuestros servidores.
                        </DialogDescription>
                        <DialogFooter className="gap-2 sm:space-x-0">
                            <DialogClose asChild>
                                <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button
                             aria-label="Delete selected rows"
                             variant="destructive"
                             onClick={onDelete}
                             disabled={isDeletePending}
                            >
                                {isDeletePending && (
                                    <Icons.spinner
                                    className="mr-2 size-4 animate-spin"
                                    aria-hidden="true"
                                    />
                                )}
                                Eliminar
                            </Button>
                        </DialogFooter>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }
	return (
        <Drawer {...props}>
            {showTrigger ? (
                <DrawerTrigger asChild>
                <Button variant="outline" size="sm">
                    <TrashIcon className="mr-2 size-4" aria-hidden="true" />
                    Eliminar ({products.length})
                </Button>
                </DrawerTrigger>
            ) : null}
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>¿Estás absolutamente seguro?</DrawerTitle>
                    <DrawerDescription>
                    Esta acción no se puede deshacer. Esto eliminará permanentemente{" "}
                        <span className="font-medium">{products.length}</span>{" "}
                        {products.length === 1 ? "producto" : "productos"} de nuestros servidores.
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="gap-2 sm:space-x-0">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                    <Button
                        aria-label="Delete selected rows"
                        variant="destructive"
                        onClick={onDelete}
                        // disabled={deleteProductMutation.isPending}
                    >
                    {/* {deleteProductMutation.isPending && (
                        <Icons.spinner
                            className="mr-2 size-4 animate-spin"
                            aria-hidden="true"
                        />
                        )} */}
                        Eliminar
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
