import '@/styles/globals.css';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { cn } from '@/lib/utils';
import type { Viewport, Metadata } from 'next';

import { TRPCReactProvider } from '@/trpc/react';
import { fontHeading } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ThemeProvider';
import SessionWrapper from '@/components/SessionWrapper';
import { Analytics } from '@/components/analytics';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { env } from '@/env';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/toast';

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
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					GeistSans.variable,
					GeistMono.variable,
					fontHeading.variable
				)}
			>
				<SessionWrapper>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<TRPCReactProvider>
							<div className="relative flex min-h-screen flex-col bg-background">
								{children}
							</div>
						</TRPCReactProvider>
						<TailwindIndicator />
						<Analytics />
					</ThemeProvider>
				</SessionWrapper>
				<Toaster />
			</body>
		</html>
	);
}
