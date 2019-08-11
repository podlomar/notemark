import React from 'react';
import './index.scss';

const MenuButton = ({onToggle}) => {
  return (
    <div 
      className="menu-button"
      onClick={onToggle}
    />
  );
};

export default MenuButton;