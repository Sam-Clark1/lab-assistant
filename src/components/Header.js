import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { BeakerIcon} from '@heroicons/react/outline'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Header() {
    return (
        
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

            <div className="relative flex items-center justify-between h-16">

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseIcon className="block h-6 w-6 text-secondary" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6 text-secondary" aria-hidden="true" />
                  )}
                </Disclosure.Button>
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
                      <Link to={item.href}>
                        <div
                            key={item.name}
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link to={item.href}>
                    <Disclosure.Button
                    key={item.href}
                    as="div"
                    className={classNames(
                        'text-secondary hover:bg-secondary hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    >
                    {item.name}
                    </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
}