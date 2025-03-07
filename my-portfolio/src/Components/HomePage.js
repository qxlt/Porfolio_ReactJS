import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import hello from '../assets/hello.json';


import profile from '../assets/qinxi-pic.jpg'
import copy from "copy-to-clipboard";
import Typewriter from "typewriter-effect";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

import React, { useState, useEffect } from "react";


function HomePage(){

    const copyToClipboard = () => {
        copy("6475638029");
        alert(`You have copied my phone number`);
    };

    const [greeting, setGreeting] = useState('');
    let index = 0;

    useEffect(() => {
        const shuffleGreeting = () => {
            if(index < hello.length){
                setGreeting(hello[index].hello);
                index = index + 1
            }else{
                index = 0
            }    
        };

        shuffleGreeting(); // Set initial greeting
        const interval = setInterval(shuffleGreeting, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    return(
        <div className="bg-pink-200 relative top-14">
        <Header />
        <Navbar/>
        <div className='p-10 h-screen w-screen flex flex-row'>
           <div className="w-1/3">
                <div className="mt-36">
                <h1 className="plus-jakarta-sans-600 text-8xl text-black">
                    <Typewriter
                        options={{
                        delay: 100
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("Software")
                            .start();
                        }}
                    />
                    </h1>
                    <h1 className="plus-jakarta-sans-600 text-8xl text-black">
                    <Typewriter
                        options={{
                        delay: 100
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .pauseFor(900)
                            .typeString("Developer")
                            .start();
                        }}
                    />
                    </h1>
                    
                    <a 
                        href="https://www.linkedin.com/in/qinxiliu" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-pink-400 border-2 border-white top-3/4 -left-10 fixed transform -translate-y-1/2 [writing-mode:vertical-rl] text-white px-4 py-2 plus-jakarta-sans-600 rounded-r-lg hover:left-0"
                    >
                        LinkedIn
                    </a>
        
                    <a 
                        href="https://github.com/qxlt" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-pink-400  border-2  border-white bottom-14 -left-10 fixed transform -translate-y-1/2 [writing-mode:vertical-rl] text-white px-4 py-2 plus-jakarta-sans-600 rounded-r-lg hover:left-0"
                    >
                        Github
                    </a>
                </div>
           </div>
            <div className="flex flex-col justify-center w-1/3 items-center h-3/4 fade-in">
                <div className="chat chat-start pl-36 w-3/4 ">
                    <div className="chat-bubble w-full hover:bg-yellow-300 duration-150 text-center rounded-lg bg-yellow-200 plus-jakarta-sans-600">
                        {greeting}!
                    </div>
                </div>
                <br/>
                <div className="card w-full h-3/4">
                    <div className="h-full card__content text-center relative p-16 transition-transform duration-1000 text-white font-bold mr-5">
                    <div className="card__front absolute top-0 bottom-0 rounded-full border-8 border-pink-400
                                    flex justify-center w-9/12 h-3/4">
                        <img src={profile} className="w-full h-full rounded-full" alt="Profile" />
                    </div>
                    <div className="card__back absolute w-9/12 h-3/4 bg-beige border-8 border-pink-400 top-0 bottom-0 rounded-full flex items-center justify-center">
                        <ul className="text-black">
                            <li className="p-2">
                                <h1 className="plus-jakarta-sans-600 text-lg ">Qinxi Liu</h1>
                            </li>
                            <li className="p-2">
                                <h5 className="plus-jakarta-sans-600 text-xl bg-pink-400 rounded-full mr-5 ml-5">Full Stack Developer</h5>
                            </li>
                            <li className="p-2">
                                <p className="plus-jakarta-sans-600 hover:bg-blue-50 rounded-full p-2">Email Address:
                                    <a href="mailto:liuqx3@gmail.com" className="text-black hover:underline hover:text-blue-500">liuqx3@gmail.com</a>
                                </p>
                            </li>
                            <li className="p-2">
                                <a className="plus-jakarta-sans-600 hover:bg-blue-50 rounded-full p-2  hover:underline hover:text-blue-500 " onClick={copyToClipboard}>
                                    Phone Number: +1(647)-563-8029</a>
                            </li>
                            <li className="p-2">
                                <a className="plus-jakarta-sans-600 hover:underline hover:bg-blue-50 p-2 rounded-full hover:text-blue-500" href="https://www.google.com/maps/place/Toronto,+ON/@43.718371,-79.5428658,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu">
                                Toronto, ON</a>
                            </li>
                            <li className="flex justify-center items-center">
                                <a href="https://github.com/qxlt" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} className="m-2 text-2xl hover:text-white hover:bg-zinc-600 rounded-xl"/>
                                </a>
                                <a href="https://www.linkedin.com/in/qinxiliu" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="m-2 text-2xl hover:text-white hover:bg-zinc-600"/>
                                </a>
                            </li>

                            <li className="mr-16 ml-16"> 
                                <div className="hover:bg-slate-50 hover:bg-opacity-60 hover:rounded-xl ">
                                    <a 
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1HITr-XyoRlFHydZqOgDp5agANYPPs-lN/view?usp=sharing" 
                                    className="plus-jakarta-sans-600">Resume</a>
                                    <FontAwesomeIcon icon={faDownload} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 mt-32">
                    <h1 className="plus-jakarta-sans-600 text-8xl text-white fade-in">Qinxi Liu</h1>
                    <p className="plus-jakarta-sans-600 text-2xl p-2 text-white rounded-lg hover:bg-slate-50 hover:text-black">
                    <Typewriter
                        options={{
                        delay: 10
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.")
                            .start();
                        }}
                    /></p>
            </div>
        

        </div>
        <Footer/>
        </div>
    )

}

export default HomePage;