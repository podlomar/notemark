import React from 'react';
import './index.scss';

const MenuButton = ({onToggle}) => {
  return (
    <div 
      className="menu-button"
      onClick={onToggle}
    >
      <div className="menu-icon" />
    </div>
  );
};

export default MenuButton;