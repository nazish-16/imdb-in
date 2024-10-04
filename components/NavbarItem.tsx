import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  title: string;
  param: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  return (
    <Link href={`/?genre=${param}`}>{title}</Link>
  );
};

export default NavbarItem;
