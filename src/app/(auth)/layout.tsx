import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

const AuthLayout = async({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (user) {
    if (user.role === "SHELTER") redirect("/dashboard");
    redirect("/profile");
  }

  return (
    <div className="grid min-h-screen place-items-center p-4">{children}</div>
  );
};

export default AuthLayout;