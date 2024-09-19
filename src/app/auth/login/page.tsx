import React from 'react';
import LoginForm from './_components/LoginForm';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
export default async function LoginPage() {
	const user = await getCurrentUser();

	if (user) {
		if (user.role === 'ADMIN') redirect('/');
		redirect('/profile');
	}
	
	return <LoginForm />;
}
