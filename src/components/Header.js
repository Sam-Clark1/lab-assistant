import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <div className="sticky w-full bg-primary">
                <div className="max-w-7xl mx-auto">
                    <div className="py-6 mx-4 lg:px-8 lg:mx-0">
                        <Link to='/'>
                        <h1 className="text-3xl font-sans ">lab assistant</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}