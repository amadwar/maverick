import React, { useState } from 'react';
import './Badge.css';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button 
      className={`badge ${isClicked ? 'gray' : ''}`} 
      onClick={toggleClick}>
      {text}
    </button>
  );
};

export default Badge;
