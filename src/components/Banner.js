import React from "react";
import {Link} from 'react-router-dom';

export default function Banner() {
    return (
        <div>
            <section className="text-white bg-background">
                <div className="max-w-screen-xl px-4 py-32 mx-auto h-[84vh] lg:items-center lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Chemistry Conversions and Fromulas All in One Conveniant Place!
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                        You can choose to login to be able to save calculations to your favorites or skip that and head straight in! 
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <Link to={'calculations'}>
                            <div className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring">
                            Get Started
                            </div>
                        </Link>
                        <Link to={'about'}>
                            <div className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring">
                            Learn More
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}