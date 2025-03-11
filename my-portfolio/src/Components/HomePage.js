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
        <div className="bg-pink-200 min-h-screen flex flex-col">
        <Header />
        <Navbar/>
        <div className='flex-grow p-10 flex flex-row justify-center'>
           <div className="w-1/3">
                <div className="mt-36">
                <h1 className="plus-jakarta-sans-600 text-6xl text-blue-300 text-center">
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
                    <h1 className="plus-jakarta-sans-600 text-6xl text-black text-center">
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

                    <div className="mt-16 grid grid-cols-2 gap-2">
                        <div className="bg-pink-300 border-4 border-white text-center p-3 rounded-lg hover:border-pink-300 hover:bg-white duration-300">
                            <a className="plus-jakarta-sans-600" href="https://www.linkedin.com/in/qinxiliu" target="_blank">Linkedin</a>
                        </div>
                        <div className="bg-pink-300 border-4 border-white text-center p-3 rounded-lg hover:border-pink-300 hover:bg-white duration-300">
                            <a className="plus-jakarta-sans-600" href="https://github.com/qxlt" target="_blank">Github</a>
                        </div>
                        <div className="bg-pink-300 border-4 border-white text-center p-3 rounded-lg hover:border-pink-300 hover:bg-white duration-300">
                            <a className="plus-jakarta-sans-600" href="" target="_blank">Resume</a>
                        </div>
                        <div className="bg-pink-300 border-4 border-white text-center p-3 rounded-lg hover:border-pink-300 hover:bg-white duration-300">
                            <a className="plus-jakarta-sans-600" href="" target="_blank">Cover Letter</a>
                        </div>

                    </div>
                    
                    
                </div>
           </div>
            <div className="flex flex-col items-center w-full md:w-1/3 h-auto md:h-3/4 fade-in mt-10">
                    <div className="chat chat-start pl-36 w-3/4 ">
                        <div className="chat-bubble w-3/4 sm:w-1/2 md:w-3/4 hover:bg-yellow-300 duration-150 text-center rounded-lg bg-yellow-200 plus-jakarta-sans-600">
                            {greeting}!
                        </div>
                    </div>
                    <br/>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group perspective">
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
  
                        <div className="absolute w-full h-full rounded-full border-8 border-pink-400 bg-white flex justify-center items-center card-front">
                            <img src={profile} className="w-full h-full rounded-full object-cover" alt="Profile" />
                        </div>

                
                        <div className="absolute w-full h-full rounded-full border-8 border-pink-400 bg-beige flex items-center justify-center card-back">
                            <ul className="text-black text-center">
                                <li className="p-2">
                                    <h1 className="plus-jakarta-sans-600 text-lg">Qinxi Liu</h1>
                                </li>
                                <li className="p-2">
                                    <h5 className="plus-jakarta-sans-600 text-xl bg-pink-400 rounded-full px-4">Full Stack Developer</h5>
                                </li>
                                <li className="p-2">
                                    <p className="plus-jakarta-sans-600 hover:bg-blue-50 rounded-full p-2">
                                        Email:
                                        <a href="mailto:liuqx3@gmail.com" className="text-black hover:underline hover:text-blue-500"> liuqx3@gmail.com</a>
                                    </p>
                                </li>
                                <li className="p-2">
                                    <a className="plus-jakarta-sans-600 hover:bg-blue-50 rounded-full p-2 hover:underline hover:text-blue-500" onClick={copyToClipboard}>
                                        Phone: +1(647)-563-8029
                                    </a>
                                </li>
                                <li className="p-2">
                                    <a className="plus-jakarta-sans-600 hover:underline hover:bg-blue-50 p-2 rounded-full hover:text-blue-500" href="https://www.google.com/maps/place/Toronto,+ON">
                                        Toronto, ON
                                    </a>
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
                                    <div className="hover:bg-slate-50 hover:bg-opacity-60 hover:rounded-xl">
                                        <a target="_blank" href="https://drive.google.com/file/d/1HITr-XyoRlFHydZqOgDp5agANYPPs-lN/view?usp=sharing" className="plus-jakarta-sans-600">Resume</a>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                </div>
            <div className="w-1/3 mt-32">
                    <h1 className="plus-jakarta-sans-600 text-8xl text-black fade-in">Qinxi Liu</h1>
                    <p className="mt-4 plus-jakarta-sans-500 text-xl p-2 text-black rounded-lg bg-slate-50 hover:text-black">
                    <Typewriter
                        options={{
                        delay: 10
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("Hello World! Welcome to my digital space! I am a developer who delivers projects with mindful designs and logical coding style.")
                            .start();
                        }}
                    /></p>

                    <p className="mt-2 plus-jakarta-sans-500 text-xl p-2 text-black rounded-lg bg-slate-50 hover:text-black">
                    <Typewriter
                        options={{
                        delay: 10
                        }}
                        onInit={(typewriter) => {
                        typewriter
                            .typeString("Come and get to know me more! We can transform the ideas into real world projects!")
                            .start();
                        }}/></p>
            </div>
            </div>
        <Footer/>

        

        </div>
    )

}

export default HomePage;