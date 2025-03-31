'use client';
import { useState, useEffect, useRef } from 'react';


interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, delay = 0, prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationId: number;
    
    const startAfterDelay = () => {
      setTimeout(() => {
        startTime = performance.now();
        animationId = requestAnimationFrame(animateCount);
      }, delay);
    };
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };
    
    startAfterDelay();
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isVisible, end, duration, delay]);
  
  return (
    <div ref={counterRef} className="text-[8rem] md:text-[10rem] font-light text-white leading-none">
      {prefix}{count}
    </div>
  );
};

export default Counter;
