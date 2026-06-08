"use client"
import React, { useState } from 'react';
import Image from 'next/image';

type AdProps = {
  href: string;
  imageSrc: string;
};

export default function AdFooter({ href, imageSrc }: AdProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-full h-28  relative">
        <button
          onClick={() => setIsVisible(false)}
          className="min-h-10 min-w-10 absolute top-2 right-2
           text-gray-500 hover:text-gray-700 font-bold text-2xl bg-red rounded-full"
        >
          X
        </button>
        <div className="mr-10 h-28 relative">
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
    >
        <Image
            src={imageSrc}
            alt="Advertisement"
            fill
            className="object-contain"
        />
    </a>
</div>
      </div>
    </footer>
  );
}
