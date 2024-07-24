'use client';
import { images } from '@/lib/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { PageActions, PageHeader, PageHeaderHeading } from './PageHeader';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(() => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1)), 7000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, hasInteracted]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative w-full h-[489px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image 
              src={images[currentImageIndex] ?? ''} 
              alt="hero" 
              fill
              className="absolute inset-0 object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bg-translucentDark top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center px-4 py-4">
        <div className="max-w-7xl text-center">
          <PageHeader as="section" className="mx-auto items-center gap-2 text-center" withPadding>
            <PageHeaderHeading
              className="p-4 text-3xl font-bold text-center text-white animate-fade-up"
              style={{ animationDelay: "0.30s", animationFillMode: "both" }}
            >
              ¡Descubre amor en cuatro patas! Adopta y cambia vidas hoy mismo. Sé un héroe.
            </PageHeaderHeading>
            <PageActions 
              className="animate-fade-up mt-4 flex justify-center space-x-4" 
              style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
            >
              <Link href="/pets" className={cn(buttonVariants())}>
                Adopta una mascota
              </Link>

              {/* <Link href="/auth/register-shelter" className={cn(buttonVariants({ variant: 'outline' }))}>
                Únete como refugio
              </Link> */}
            </PageActions>
          </PageHeader>
        </div>
      </div>
      <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentImageIndex(i);
              setHasInteracted(true);
            }}
            className="w-4 h-4 rounded-full border-2 border-white"
            style={{ backgroundColor: currentImageIndex === i ? '#ffffff' : 'transparent' }}
          />
        ))}
      </div>
    </div>
  );
};

const Indicator = ({ filled }: { filled: boolean }) => {
  return <div className={cn('w-3 h-3 rounded-full border-primary border-2 mt-2', filled && 'bg-primary')} />;
};

Hero.Indicator = Indicator;
