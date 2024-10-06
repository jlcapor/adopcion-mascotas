import { Suspense, type ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
 
  return (
    <div className="grid min-h-screen place-items-center bg-muted p-4">
      {children}
    </div>
  );
};

export default AuthLayout;

//R0j45_$_#34 --- jcapoteRojas123
//Departamento y municipio 193695 