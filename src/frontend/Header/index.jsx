import React from 'react';
import MenuButton from '../MenuButton';

const Header = ({onToggleMenu}) => {
  return <MenuButton onToggle={onToggleMenu}/>;
}

export default Header;