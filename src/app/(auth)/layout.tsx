import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

const AuthLayout = async({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === "SHELTER") redirect("/");
    redirect("/account");
  }

  return (
    <div className="grid min-h-screen place-items-center p-4">{children}</div>
  );
};

export default AuthLayout;

//R0j45_$_#34 --- jcapoteRojas123
//Departamento y municipio 193695 