import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';
import { hashPassword } from '@/utils/auth';

export async function POST(request: NextRequest) {
	try {
		const { name, lastName, email, password } = await request.json();
		const userExists = await db.user.findUnique({
			where: {
				email,
			},
		});
		if (userExists) {
			return NextResponse.json({ error: 'El Usuario ya está registrado' }, { status: 400 });
		}
		const userPassword = await hashPassword(password)
		await db.user.create({
			data: {
				name,
				lastName,
				email,
				password: userPassword,
			}
		})
		return NextResponse.json({ message: 'Usuario creado correctamente, revisa tu email para confirmarla' });
	} catch (error) {
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
