'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const pathname = usePathname();
	useEffect(
		() => {
			setIsOpen(false);
		},
		[ pathname ]
	);

	

	useEffect(
		() => {
			if (isOpen) document.body.classList.add('overflow-hidden');
			else document.body.classList.remove('overflow-hidden');
		},
		[ isOpen ]
	);
	if (!isOpen) 
		return (
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="md:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 mr-1"
			>
				<Menu className="h-6 w-6" aria-hidden="true" />
			</button>
		);
	
    return (
        <>
            <div className='relative z-40 lg:hidden'>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </div>
            <div className='fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex'>
                <div className='w-4/5'>
                    <div className='relative flex w-full max-w-sm flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                        <div className='flex px-4 pb-2 pt-5'>
                            <button
                                type='button'
                                onClick={() => setIsOpen(false)}
                                className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
                                <X className='h-6 w-6' aria-hidden='true' />
                            </button>
                        </div>
                        <div className='mt-2'>
                            hfhfghfg
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
