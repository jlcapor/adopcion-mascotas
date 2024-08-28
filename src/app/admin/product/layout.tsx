import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { type PropsWithChildren } from "react";

export default function ProductLayout(props: PropsWithChildren) {
  return (
    <>
      <div className="text-muted-foreground text-sm flex justify-start gap-2 items-center">
        <Link
          href="/admin/products"
          className="hover:text-primary"
        >
          <span>Productos</span>
        </Link>
        <ChevronRight size={18} />{" "}
        <span className="text-primary">Detalles del producto</span>
      </div>
      {props.children}
    </>
  );
}



// https://www.youtube.com/@SergieCode

// https://www.youtube.com/@DotDager

// https://www.youtube.com/@midulive

// https://www.youtube.com/@mouredev