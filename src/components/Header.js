import React from "react";
import { Link } from "react-router-dom";

import { Disclosure } from '@headlessui/react'

import { BeakerIcon} from '@heroicons/react/outline'

import GitHubIcon from '@mui/icons-material/GitHub';

import DrawerNav from "./MobileNav";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Calculations', href: '/calculations'},
  { name: 'About', href: '/about' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Header() {
    return (
        
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`sm:mx-auto sm:px-6 ${window.location.pathname === '/' ? 'md:ml-[240px]' :  'mx-auto'}`}>

            <div className="relative flex items-center justify-between h-16">

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <a href="#">
                  <DrawerNav />
                </a>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    <Link to='/'>
                        <BeakerIcon className="h-8 w-8 text-secondary" aria-hidden="true" />
                    </Link>
                    <Link to='/'>
                        <h1 className="text-2xl font-sans text-secondary ml-2">
                            lab assistant
                        </h1>
                    </Link>
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.href} key={item.name}>
                        <div
                            className={classNames(
                            'text-secondary hover:bg-secondary hover:text-white',
                            'ml-3 px-3 py-2 rounded-md text-lg font-medium'
                            )}
                        >
                            {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  <a href="https://github.com/Sam-Clark1/lab-assistant" className="text-secondary hover:text-white" target="_blank" rel='noreferrer'>
                    <GitHubIcon sx={{fontSize:'2.5rem', }} />
                  </a>

              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
    )
}