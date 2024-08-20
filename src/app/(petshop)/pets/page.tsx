import { env } from "@/env";
import { Metadata } from "next";
import { Shell } from '@/components/shared/Shell';
import { PageHeader, PageHeaderHeading } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Mascotas",
  description: "Descubre a nuestros adorables animales en busca de un hogar",
}

export default function Page() {
  return (
    <Shell>
      <PageHeader>
        <PageHeaderHeading size="sm" as="h1">Mascotas</PageHeaderHeading>
      </PageHeader>
    </Shell>
  )
}