'use client';

import React, { memo, useMemo } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

import { TooltipProvider } from '@/components/ui/tooltip';

// Memoize the children to prevent unnecessary re-renders
const MemoizedChildren = memo(({ children }: { children: React.ReactNode }) => <>{children}</>);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	// Use useMemo to ensure children are stable and only change when necessary
	const stableChildren = useMemo(() => children, [children]);

	return (
		<NextThemesProvider {...props}>
			<TooltipProvider>
				<MemoizedChildren>{stableChildren}</MemoizedChildren>
			</TooltipProvider>
		</NextThemesProvider>
	);
}
