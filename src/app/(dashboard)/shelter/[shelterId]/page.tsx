import { env } from "@/env";
import { db } from "@/server/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";



interface DashboardShelterPageProps {
  params: {
    shelterId: string
  }
}

async function getShelterFromParams(params: DashboardShelterPageProps["params"]) {
  const { shelterId } = params
  const shelter = await db.shelter.findUnique({
    where: { id: shelterId },
  })

  if (!shelter) return null

  return shelter

}

export async function generateMetadata({
  params,
}: DashboardShelterPageProps): Promise<Metadata> {
  const shelter = await getShelterFromParams(params)

  if (!shelter) {
    return {}
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: `Administrar ${shelter.name} refugio`,
    description: shelter.description ?? "",
  }
}


export default async function DashboardShelterPage({ params }: DashboardShelterPageProps) {
  const shelter = await getShelterFromParams(params)
  if (!shelter) {
    notFound()
  }
  return <h1>Welcome to page!</h1>;
}