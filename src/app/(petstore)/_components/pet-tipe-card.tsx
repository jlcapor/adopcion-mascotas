import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface PetTypeCardProps {
	// petType : Awaited<ReturnType<typeof getCategories>>[number]
}

export default function PetTypeCard() {
	return (
    <div className="p-6 min-h-screen">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-[#2a2a2a] text-white">
          <CardContent className="flex flex-col items-center justify-center h-40">
            <p className="text-center">Dogs</p>
          </CardContent>
        </Card>
        <Card className="bg-[#2a2a2a] text-white">
          <CardContent className="flex flex-col items-center justify-center h-40">
            <p className="text-center">Cats</p>
          </CardContent>
        </Card>
       
        
        
        
      </div>
    </div>
  )
}

