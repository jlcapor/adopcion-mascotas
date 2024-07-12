import React from 'react';
import { Button } from '../ui/button';

export default function AuthActions() {
	return (
		<div className="hidden items-center gap-3 justify-self-end lg:flex">
			<Button size="sm" className="leading-[18px]">
				Iniciar sesión
				<span className="sr-only">Iniciar sesión</span>
			</Button>

			<Button size="sm" className="leading-[18px]" variant="secondary">
				Registrarse
			</Button>
		</div>
	);
}
