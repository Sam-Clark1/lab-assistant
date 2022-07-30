import React from "react";
import { Link } from "react-router-dom";

import { Disclosure } from '@headlessui/react'

import { BeakerIcon } from '@heroicons/react/outline'

import GitHubIcon from '@mui/icons-material/GitHub';

import MobileNav from "./MobileNav";
import MobileFavorites from "./MobileFavorites";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Calculations', href: '/calculations'},
  { name: 'About', href: '/about' },
]

export default function Header() {
    return (
        
    <Disclosure as="nav" className='sticky top-0'>
      {({ open }) => (
        <>
          <div className='sm:mx-auto sm:px-6 h-24 py-4 bg-menu'>
            <div className="relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <a href="#">
                  <MobileNav />
                </a>
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    <Link to='/'>
                        <BeakerIcon className="h-8 w-8 text-accent" aria-hidden="true" />
                    </Link>
                    <Link to='/'>
                        <h1 className="text-2xl font-sans text-1text ml-2">
                            lab assistant
                        </h1>
                    </Link>
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.href} key={item.name}>
                        <div className='text-1text hover:bg-card ml-3 px-3 py-2 rounded-md text-lg font-medium'>
                            {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link to={'/login'}>
                    <div className='text-1text hover:bg-card mr-3 px-3 py-2 rounded-md text-lg font-medium'>
                        Login
                    </div>
                  </Link>
                  <Link to={'/signup'}>
                    <div className='text-1text hover:bg-card mr-3 px-3 py-2 rounded-md text-lg font-medium'>
                          Sign Up
                    </div>
                  </Link>
                  <a href="https://github.com/Sam-Clark1/lab-assistant" className="text-1text hover:text-accent hidden lg:block" target="_blank" rel='noreferrer'>
                    <GitHubIcon sx={{fontSize:'2.5rem', }} />
                  </a>
                  <div className="relative inset-y-0 right-0 flex items-center lg:hidden">
                    <a href="#">
                      <MobileFavorites/>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
    )
}