import React from "react";


export default function Banner() {
    return (
        <div>
            <section className="text-white bg-background">
                <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-[84vh] lg:items-center lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Test Text.

                        <span className="sm:block">
                        More Test Text.
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
                        Get Started
                        </a>

                        <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}