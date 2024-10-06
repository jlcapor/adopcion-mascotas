

interface CategoryPageProps {
    params: {
      categorySlug: string
      petTypeSlug:string
    }
  }


export default function CategoryPage({ params } : CategoryPageProps) {
  return (
    <div>
      <h1>{params.categorySlug}</h1>
    </div>
  )
}
