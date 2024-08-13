import { redirect } from "next/navigation";


/**
 * Suboptimal, would be better off doing this in middleware
 */
export default function ProjectPage(props: {
  params: { shelterId: string };
}) {
  
  redirect(`/shelter/${props.params.shelterId}/overview`);
}

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { env } from "@/env";
// import { db } from "@/server/db";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import UpdateShelterForm from "./_components/update-shelter-form";



// interface DashboardShelterPageProps {
//   params: {
//     shelterId: string
//   }
// }

// async function getShelterFromParams(params: DashboardShelterPageProps["params"]) {
//   const { shelterId } = params;
//   try {
//     const shelter = await db.shelter.findUnique({
//       where: { id: shelterId },
//     });
//     return shelter || null;
//   } catch (error) {
//     console.error("Database Error:", error);
//     return null;
//   }

// }

// export async function generateMetadata({
//   params,
// }: DashboardShelterPageProps): Promise<Metadata> {
//   const shelter = await getShelterFromParams(params)

//   if (!shelter) {
//     return {}
//   }

//   return {
//     metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
//     title: shelter.name,
//     description: shelter.description ?? "",
//   }
// }


// export default async function DashboardShelterPage({ params }: DashboardShelterPageProps) {
//   const shelter = await getShelterFromParams(params)
//   if (!shelter) {
//     notFound()
//   // }
  
//    return (
//     <div className="flex items-center justify-center pt-6 lg:py-6">
//         <Card className="w-full max-w-3xl">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl">Refugio</CardTitle>
//             <CardDescription>Actualiza la información de tu refugio</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <UpdateShelterForm shelter={shelter}/>
//           </CardContent>
//         </Card>
//     </div>
//   );
// }