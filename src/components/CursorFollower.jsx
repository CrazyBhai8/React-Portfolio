import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none transition-transform duration-100"
      style={{
        transform: `translate(${position.x - 35}px, ${position.y - 35}px)`,
      }}
    >
      <div className="w-20 h-20 rounded-full bg-primary opacity-70 mix-blend-difference" />
    </div>
  );
};

export default CursorFollower;
