import { string } from "zod"


interface CategoryPageProps {
    params: {
      category: string
      petType:string
    }
  }


export default function CategoryPage({ params } : CategoryPageProps) {
  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  )
}
