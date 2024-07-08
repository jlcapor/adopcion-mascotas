import React from "react";

export default function PetAdoptionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
        <div className="flex-1">
            {children}
        </div>
    </div>
  )
}
