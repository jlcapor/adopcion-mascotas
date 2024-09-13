import { Spinner } from "@/components/spinner";
import { Suspense, type ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
 
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <div className="grid min-h-screen place-items-center p-4">{children}</div>
    </Suspense>
  );
};

export default AuthLayout;

//R0j45_$_#34 --- jcapoteRojas123
//Departamento y municipio 193695 