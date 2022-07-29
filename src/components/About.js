import React from 'react';
import { Avatar } from '@mui/material';

export default function About() {
  return (
    <div>
        <div className="h-[81.5vh]">
            <div className="bg-card m-6 p-4 shadow-lg shadow-black rounded">
                <div className="grid 2xl:grid-cols-2 2xl:gap-20 grid-cols-1">
                    <div className='m-auto'>
                        <Avatar src={require("../assets/about.jpg")} alt='Sam Clark' sx={{height:250, width: 250}}/>
                    </div>
                    <div className="m-auto">
                        <p className="block text-lg font-medium text-1text">
                            As a research associate in the biotechnology industry, I utilize chemistry conversions and fomulas in my everyday life. 
                            I found it was not efficient to have to look up these everytime I needed them and came up with the plan to make a website that has them all in one place. 
                            I recently graduated from UNC Chapel Hill's Full-Stack Coding Boot Camp in which I learned how to develop responsive web apps and learn in-demand technologies.
                            With these new skills, I created this website in the hopes that it not only helps me in my career, but also my colleagues.
                            This website uses React.js, Tailwind CSS, and Material.UI for the frontend and a Java Spring REST API for the backend. 
                            <br/>
                            <br/>
                            If you are curious about how this website was made, checkout the GitHub link in the top right. 
                            Thank you for visiting my website and hope it's as helpful for you as it is for me!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
