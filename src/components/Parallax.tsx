// src/components/Parallax.tsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div<{ overlay: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Fill the parent container */
  overflow: hidden;
  z-index: -1; /* Ensure it stays behind the IntroContainer */
`;

const ParallaxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the container */
  transform: translateY(0);
  will-change: transform; /* Optimize performance */
`;

const Overlay = styled.div<{ overlay: boolean }>`
  display: ${({ overlay }) => (overlay ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust opacity as needed */
  z-index: 1; /* Above the image */
`;

interface ParallaxProps {
  src: string;
  alt?: string;
  overlay?: boolean; // Prop to toggle overlay
}

const Parallax: React.FC<ParallaxProps> = ({
  src,
  alt = 'Parallax Image',
  overlay = true, // Default to true
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const requestRef = useRef<number>(0);
  const previousScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

  const handleScroll = () => {
    previousScrollY.current = window.scrollY;
    if (!ticking.current) {
      requestRef.current = requestAnimationFrame(updatePosition);
      ticking.current = true;
    }
  };

  const updatePosition = () => {
    if (imageRef.current) {
      const offset = previousScrollY.current * 0.5; // Adjust parallax speed
      imageRef.current.style.transform = `translateY(${offset}px)`;
    }
    ticking.current = false;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <ParallaxContainer overlay={overlay}>
      <ParallaxImage ref={imageRef} src={src} alt={alt} />
      <Overlay overlay={overlay} />
    </ParallaxContainer>
  );
};

export default Parallax;
