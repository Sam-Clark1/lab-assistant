import React from 'react'
import { BeakerIcon } from '@heroicons/react/outline';

export default function SignUp() {
  return (
    <>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-[84vh]">
        <div className="max-w-lg w-auto space-y-8 bg-card p-14 mb-36 shadow-lg shadow-black rounded">
          <div>
            <BeakerIcon className="mx-auto h-12 w-auto text-accent"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-1text">
                Sign Up For An Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-card bg-accent hover:bg-card hover:text-accent hover:shadow-md hover:shadow-black">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
