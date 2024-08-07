import { env } from "@/env";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mascotas",
  description: "Descubre a nuestros adorables animales en busca de un hogar",
}

export default function Page() {
  return <h1>Welcome to page!</h1>;
}