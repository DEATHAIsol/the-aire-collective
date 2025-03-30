'use client';

import React from 'react';
import Image from 'next/image';

const BackgroundImage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10" /> {/* Lighter overlay */}
      <Image
        src="/monaco-background.jpg"
        alt="Monaco cityscape and harbor at dusk"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover"
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
  );
};

export default BackgroundImage; 