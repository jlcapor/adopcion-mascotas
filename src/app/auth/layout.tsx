import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

const AuthLayout = async({ children }: { children: ReactNode }) => {
  const session = await getSession();
  if (session) {
    redirect('/')
  }
  return (
    <div className="grid min-h-screen place-items-center p-4">{children}</div>
  );
};

export default AuthLayout;