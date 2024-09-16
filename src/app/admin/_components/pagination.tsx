'use client';

import { generatePagination } from '@/lib/utils';
import clsx from 'clsx';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="flex space-x-px"> {/* Cambié de -space-x-px a space-x-px */}
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;
          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';
          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string,
  href: string,
  position?: 'first' | 'last' | 'middle' | 'single',
  isActive: boolean,
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border border-solid', // Asegúrate de que border-solid esté presente
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'border-gray-600 text-gray-600 bg-gray-200': isActive, // Gris oscuro para el estado activo
      'border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700': !isActive && position !== 'middle', // Gris claro para hover
      'text-gray-400 dark:text-gray-500': position === 'middle', // Gris claro para '...'
    }
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string,
  direction: 'left' | 'right',
  isDisabled?: boolean,
}) {
  const router = useRouter();
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border border-solid', // Asegúrate de que border-solid esté presente
    {
      'pointer-events-none border-gray-300 text-gray-300 dark:text-gray-500': isDisabled,
      'border-gray-300 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700': !isDisabled, // Gris suave para hover
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    }
  );

  const icon = direction === 'left' ? <ArrowLeftIcon className="w-4" /> : <ArrowRightIcon className="w-4" />;

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className} >
      {icon}
    </Link>
  );
}
