interface SubcategoryPageProps {
    params: {
      categorySlug: string
      subcategorySlug: string
      petTypeSlug: string
    }
    searchParams: {
      [key: string]: string | string[] | undefined
    }
}
export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  console.log(params)
  return (
    <div>
      <h1>Subcategory Page</h1>
    </div>
  )
}
