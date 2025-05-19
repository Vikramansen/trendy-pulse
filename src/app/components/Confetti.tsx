import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const colors = [
  '#ff0000', // red 
  '#ff7700', // orange
  '#ffff00', // yellow
  '#00ff00', // green
  '#0000ff', // blue
  '#ff00ff'  // magenta
];

interface ConfettiProps {
  count?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ count = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const confettiPieces: HTMLDivElement[] = [];
    const container = containerRef.current;
    
    // Create confetti pieces
    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      
      // Random size between 5-15px
      const size = Math.random() * 10 + 5;
      
      // Random rotation
      const rotation = Math.random() * 360;
      
      // Random color
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];
      
      // Style the confetti
      piece.style.position = 'absolute';
      piece.style.width = `${size}px`;
      piece.style.height = `${size}px`;
      piece.style.backgroundColor = color;
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      piece.style.opacity = '0.7';
      piece.style.transform = `rotate(${rotation}deg)`;
      
      // Initial position - randomly distribute across the screen
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = `${-Math.random() * 100 - 100}px`; // Start above the viewport
      
      // Add to container and tracking array
      container.appendChild(piece);
      confettiPieces.push(piece);
    }
    
    // Animate each piece
    confettiPieces.forEach((piece) => {
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 10;
      
      // Random horizontal movement
      const xMovement = 100 - Math.random() * 200; // -100px to 100px
      
      gsap.to(piece, {
        y: `${window.innerHeight + 100}px`, // Move to bottom of screen
        x: `+=${xMovement}px`, 
        rotation: `+=${Math.random() * 720 - 360}`,
        duration: duration,
        delay: delay,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          // Reset position when it falls off screen
          gsap.set(piece, { 
            y: -100, 
            x: `${Math.random() * 100}vw` 
          });
        }
      });
    });
    
    return () => {
      // Clean up animations
      confettiPieces.forEach(piece => {
        gsap.killTweensOf(piece);
        if (piece.parentNode === container) {
          container.removeChild(piece);
        }
      });
    };
  }, [count]);
  
  return (
    <div 
      ref={containerRef} 
      className="confetti-bg" 
      aria-hidden="true"
    />
  );
};

export default Confetti; 