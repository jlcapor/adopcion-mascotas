interface SubcategoryPageProps {
    params: {
      category: string
      subcategory: string
    }
    searchParams: {
      [key: string]: string | string[] | undefined
    }
}
export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  return (
    <div>
      <h1>Subcategory Page</h1>
    </div>
  )
}
