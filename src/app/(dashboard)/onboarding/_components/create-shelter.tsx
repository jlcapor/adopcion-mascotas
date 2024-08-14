"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Balancer } from "react-wrap-balancer";
import ShelterRequestForm from "../../shelter/[shelterId]/_components/shelter-request-form"
import { createShelterSchema, CreateShelterSchema } from "@/lib/validations/shelter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/Icons";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";


interface CreateShelterProps {
  userId: string
}
export default function CreateShelter({ userId }: CreateShelterProps) {
  const router = useRouter()
  const toaster = useToast();
  const form = useForm<CreateShelterSchema>({
		resolver: zodResolver(createShelterSchema),
		defaultValues: {
			shelterName: '', 
			address: '',
			neighborhood: '',
			telephone: '',
			provinceId: '',
			cityId: '',
			description: '',
		},
	});

  const createShelterMutation = api.shelter.createShelter.useMutation({
    onSuccess: (data) => { 
      router.push(`/shelter/${data.id}`)
      toaster.toast({
        title: "Refugio creado",
        description: `Refugio ${data.name} creado exitosamente.`,
      });
    },
    onError: (error) => {
      toaster.toast({
        title: "Error al crear el refugio",
        variant: "destructive",
        description:
          "Se produjo un problema al crear el refugio. Por favor inténtalo de nuevo.",
      });
    }
  })
  
  function onSubmit(input: CreateShelterSchema) {

    createShelterMutation.mutate({
      ...input, 
      userId
    })
    form.reset()
  }
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, type: "spring" }}
    >
        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-4 rounded-xl bg-background/60 p-8"
        >
          <motion.h1
          className="mb-4 font-cal text-2xl font-bold transition-colors sm:text-3xl text-center"
          variants={{
            hidden: { opacity: 0, x: 250 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, type: "spring" },
            },
          }}
        >
          <Balancer>
            {`Crea tu refugio`}
          </Balancer>
        </motion.h1>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, type: "spring" },
              },
            }}
          >
            <ShelterRequestForm form={form} onSubmit={onSubmit}>
              <Button type="submit" className="w-full uppercase text-sm font-bold" disabled={createShelterMutation.isPending}>
                {createShelterMutation.isPending && (
                  <Icons.spinner className="mr-2 size-4 animate-spin" />
                )}
                Crear refugio
              </Button>
            </ShelterRequestForm>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}


//cssgridgenerator.io