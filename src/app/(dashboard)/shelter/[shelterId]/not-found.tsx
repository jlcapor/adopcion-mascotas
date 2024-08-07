import { Shell } from "@/components/shared/Shell";
import Link from "next/link";

export default function NotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Shell>
  );
}
