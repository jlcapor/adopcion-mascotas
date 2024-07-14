import { Icons } from '@/components/Icons';
import React from 'react';
import { AuthLayoutForm } from '../_components/AuthLayoutForm';
import UserAuthForm from '../_components/UserAuthForm';
export default function page() {
	return (
		<AuthLayoutForm
			title="AUTENTICACION"
			subtitle="Por favor, ingresa tu correo electrónico y contraseña para acceder a tu cuenta"
		>
			<UserAuthForm />
		</AuthLayoutForm>
	);
}
