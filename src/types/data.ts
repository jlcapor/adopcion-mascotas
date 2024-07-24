import { USER_ROLE } from '@prisma/client';

export type User = {
	id: string,
	name: string | null,
	email: string,
	image: string | null,
	role: USER_ROLE,
} | null;
