import React from 'react';
import { Button } from '../ui/button';

export default function AuthActions() {
	return (
		<div className="flex items-center space-x-4">
			<Button size="sm" className="leading-[18px]">
				Iniciar sesión
				<span className="sr-only">Iniciar sesión</span>
			</Button>

			<Button size="sm" className="leading-[18px] hover:text-black" variant="secondary">
				Registrarse
			</Button>
		</div>
	);
}
