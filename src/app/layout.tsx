import '@/styles/globals.css';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { cn } from '@/lib/utils';
import { Viewport, type Metadata } from 'next';

import { TRPCReactProvider } from '@/trpc/react';
import { fontHeading } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import SessionWrapper from '@/components/SessionWrapper';
import { Analytics } from '@/components/analytics';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { env } from '@/env';
import { siteConfig } from '@/config/site';
import { extractRouterConfig } from 'uploadthing/server';

import { ourFileRouter } from './api/uploadthing/core';

export const metadata: Metadata = {
	metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: [ { rel: 'icon', url: '/favicon.ico' } ],
};

export const viewport: Viewport = {
	colorScheme: 'dark light',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="h-full" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					GeistSans.variable,
					GeistMono.variable,
					fontHeading.variable
				)}
			>
				<NextSSRPlugin
					routerConfig={extractRouterConfig(ourFileRouter)}
				/>
				<SessionWrapper>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<TRPCReactProvider>{children}</TRPCReactProvider>
						<TailwindIndicator />
						<Analytics />
					</ThemeProvider>
				</SessionWrapper>
				<Toaster position="top-center" richColors />
			</body>
		</html>
	);
}
