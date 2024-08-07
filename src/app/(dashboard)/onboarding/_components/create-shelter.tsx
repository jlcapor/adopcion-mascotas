"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { Balancer } from "react-wrap-balancer";
import ShelterRequestForm from "./shelter-request-form"


interface CreateShelterProps {
    userId?: string
}
export default function CreateShelter({ userId }: CreateShelterProps) {
  return (
    <motion.div
        exit={{ opacity: 0, scale: 0.95 }}
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
            <ShelterRequestForm/>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}


//cssgridgenerator.io