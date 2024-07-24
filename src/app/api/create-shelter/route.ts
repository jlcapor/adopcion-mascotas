import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/server/db';

export async function POST(request: NextRequest) {
	try {
        
	} catch (error) {
		console.error('Error creating tenant:', error);
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
