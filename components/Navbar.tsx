import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className='flex dark:bg-amber-500 bg-amber-300 p-3 lg:text-lg justify-center gap-6 font-medium'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  );
};

export default Navbar;
