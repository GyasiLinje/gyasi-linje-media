import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";



function App() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
      
 
        <a href="#" className="flex items-center text-slate-100">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
     
        <a href="#" className="flex items-center text-slate-100" >
          Work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
      
        <a href="#" className="flex items-center text-slate-100">
          Content
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
     
        <a href="#" className="flex items-center text-slate-100">
          Archive Store
        </a>
      </Typography>
    </ul>
  );
 

  return (
    <Navbar className="w-full px-4 py-2 lg:px-8 lg:py-4 bg-sky-950">
    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        className="mr-4 cursor-pointer py-1.5 font-medium text-slate-100"
      >
        Gyasi Linje
      </Typography>
      <div className="hidden lg:block">{navList}</div>
      <div className="flex items-center gap-x-1">
        <Button variant="text" size="sm" className="hidden lg:inline-block">
          <span className='text-slate-100'>YouTube</span>
        </Button>
        <Button variant="text" size="sm" className="hidden lg:inline-block">
          <span className='text-slate-100'>Instagram</span>
        </Button>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block text-slate-100"
        >
          <span>TikTok</span>
        </Button>
      </div>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-slate-100"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
    </div>
    <MobileNav open={openNav}>
      <div className="container mx-auto">
        {navList}
        {/* <div className="flex items-center gap-x-1 text-slate-100">
          <Button fullWidth variant="text" size="sm" className="">
            <span>YouTube</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div> */}
      </div>
    </MobileNav>
  </Navbar>
  );
}

export default App;
