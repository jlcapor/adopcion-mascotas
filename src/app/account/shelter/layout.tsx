
interface AccountLayoutProps {
    children: React.ReactNode
  }
export default function ShelterLayout({ children }: AccountLayoutProps) {
	return (
		<div className="container relative">
			{ children }
		</div>
	);
}

//https://appmaster.io/es/blog/creacion-de-una-aplicacion-para-la-adopcion-de-mascotas
