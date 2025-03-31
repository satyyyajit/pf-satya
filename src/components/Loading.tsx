'use client';
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-white text-2xl font-mono">
        SATTZ<span className="animate-pulse">_</span>
      </div>
    </div>
  );
}

export default Loading;