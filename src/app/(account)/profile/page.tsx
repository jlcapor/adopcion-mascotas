import React from 'react';
import { getCurrentUser } from '@/lib/session';

export default async function page() {
	const user = await getCurrentUser();

	return(
    <div>
      <h1>Profile</h1>
    </div>
  )
}
