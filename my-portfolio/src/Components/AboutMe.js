
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { use, useEffect, useState } from "react";
import fstack from '../assets/full-stack.png'
import profile from '../assets/qinxi-pic.jpg'
import wshakespear from "../assets/wshakespear.jpeg"

function About(){
    const targetValue = 100;
    const icons = {
        "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "ReactJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",  
        "NodeJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        "ExpressJS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
        ".Net": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg",
        "Python3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
        "MySql": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        "Postgres": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        "Mongoose": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
        "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"    
    }
    const [progress, setProgress] = useState(0);
    const [rotated_1, set1Rotated] = useState(false);
    const [rotated_2, set2Rotated] = useState(false);
    const [rotated_3, set3Rotated] = useState(false);
    const [rotated_4, set4Rotated] = useState(false);
    const [rotated_5, set5Rotated] = useState(false);
    const [rotated_6, set6Rotated] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) =>
                prev < targetValue ? prev + 1 : targetValue
            );
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const dropIcons = () =>{
            const iconEntries = Object.entries(icons);
            const numItems = Math.floor(progress / 5);
            return iconEntries.slice(0, numItems); 
        };

    return(
        <div className='h-full' id="About">
        <div className='flex flex-col justify-center items-center'>
            <div className='flex h-1/2 p-10 justify-center items-center flex-col'> 
                <h2 className='text-5xl plus-jakarta-sans-600 p-5 mb-4 text-center floating text-black'>Technologies and Tools</h2>
                {/* <div
                    className="max-sm:m-2 radial-progress bg-pink-200 text-green-500 border-pink-200 border-8 font-bold"
                    style={{ "--value": progress,  "--size": "20rem" }}
                    aria-valuenow={progress}
                    role="progressbar"
                    >
                    {progress}%
                </div>   */}
                <div className="chat chat-end mt-5 floating">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full border-4 border-white">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src= {profile}/>
                    </div>
                </div>
                <div className="chat-bubble bg-white plus-jakarta-sans-500 text-black">These are the tools I use to deliver projects! They're still expanding!</div>
                </div>
            </div>

            
        
            <div className="flex flex-row flex-wrap justify-center items-center space-x-6 max-sm:w-3/4 max-sm:space-x-1 max-sm:grid max-sm:grid-cols-4 bg-white bg-opacity-40 p-3 rounded-lg border-b-2 border-pink-400">
                {dropIcons().map(([key, value], index) => (
                    <div key={index} className="flex flex-col items-center m-1">
                        <img src={value} alt={key} className="floating w-12 h-12 max-sm:w-10 max-sm:h-10 showHidden" />
                        <p className="z-50 absolute plus-jakarta-sans-600 bg-yellow-300 p-1 mt-12 border-2 rounded-xl hidden text-sm text-purple-800">{key}</p>
                    </div>          
                ))}
            </div>



        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-6 p-4 mt-6'>
            <div className="card card-side bg-base-100 shadow-lg h-40 w-96 max-sm:w-full">
                <figure className="bg-pink-500 flex w-1/4 h-full items-center justify-center">
                    <img className="w-12 h-12" src={fstack} alt="full-stack"></img>
                </figure>
                <div className="card-body w-3/4 bg-white">
                    <h2 className='card-title plus-jakarta-sans-600 text-black'>Full Stack Development</h2>
                    <p className='plus-jakarta-sans-500 text-black'>Excel in React, building UIs with JS, Node.js, Express, REST, GraphQL, MongoDB, MySQL, and Oracle.</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40 w-96 max-sm:w-full">
                <figure className="bg-pink-500 flex w-1/4 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons.png" alt="external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons"/>
                </figure>
                <div className="card-body w-3/4 bg-white">
                    <h2 className='card-title plus-jakarta-sans-600 text-black'>Mobile Development</h2>
                    <p className='plus-jakarta-sans-500 text-black'>Experienced developing Android mobile apps using React Native and Apple environment using Swift </p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40 w-96 max-sm:w-full">
                <figure className="bg-pink-500 flex w-1/4 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ai-computer-science-flaticons-lineal-color-flat-icons-3.png"/>
                </figure>
                <div className="card-body w-3/4 bg-white">
                    <h2 className='card-title plus-jakarta-sans-600 text-black'>Machine Learning</h2>
                    <p className='plus-jakarta-sans-500 text-black'>Proficient in using Google Colab and Jupyter for data cleaning, analysis, and training machine learning models</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40 w-96 max-sm:w-full">
                <figure className="bg-pink-500 flex w-1/4 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/dusk/64/database.png"/>
                </figure>
                <div className="card-body w-3/4 bg-white">
                    <h2 className='card-title plus-jakarta-sans-600 text-black'>Database Management</h2>
                    <p className='plus-jakarta-sans-500 text-black'>Experienced in listed databases with expertise in designing, optimizing, and managing relational and NoSQL databases.</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40 w-96 max-sm:w-full">
                <figure className="bg-pink-500 flex w-1/4 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-working-daily-routine-wanicon-lineal-color-wanicon.png" alt="external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons"/>
                </figure>
                <div className="card-body w-3/4 bg-white">
                    <h2 className='card-title plus-jakarta-sans-600 text-black'>CI/CD Environment</h2>
                    <p className='plus-jakarta-sans-500 text-black'>Proficient in CI/CD pipelines and Agile methodologies, driving continuous integration, and iterative delivery of software. </p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40 w-96 max-sm:w-full">
                <figure className="bg-pink-500 flex w-1/4 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons.png" alt="external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons"/>
                </figure>
                <div className="card-body w-3/4 bg-white">
                    <h2 className='card-title plus-jakarta-sans-600 text-black'>Microservices&Architecture</h2>
                    <p className='plus-jakarta-sans-500 text-black'>Understanding of microservices architecture, RESTful APIs, and GraphQL for building scalable, distributed systems. </p>
                </div>
            </div>
            
        </div>
        <div className='h-auto w-screen flex flex-col justify-center items-center my-24'>
            <h2 className='plus-jakarta-sans-600 text-5xl text-center text-black'>Academic Journey</h2>
            <div className="chat chat-end my-5 floating">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full border-4 border-white">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src= {profile}/>
                    </div>
                </div>
                <div className="chat-bubble plus-jakarta-sans-500 bg-white w-1/2 ">My academic journey is highlighted by full-stack development, mobile application design, machine learning, and internet analysis.</div>
            </div>
            <div className='flex flex-row w-full justify-center '>
            <div className="flex flex-col bg-pink-200 w-1/4 justify-start mt-10 p-6 rounded-xl h-auto mx-5">
                <h3 className="plus-jakarta-sans-600 text-4xl self-center m-3 mb-2 text-black">Capstone Project</h3>
                <hr className='border-2 border-pink-300'/>
                <div className="flex flex-col py-3">
                    <div className="flex flex-col m-3 bg-pink-100 rounded-xl py-4">
                        <div className='flex flex-row px-5 justify-between'> 
                            <h4 className='plus-jakarta-sans-500 text-2xl self-start text-black'>Project Summary</h4>
                            <button className={`${rotated_1 ? "rotate-90" : ""} duration-500`} onClick={() => set1Rotated(!rotated_1)}>
                                <span className="text-pink-500">▶</span>
                            </button>
                        </div>
                        <div className={`plus-jakarta-sans-400 px-5 py-2 ${rotated_1? "block": "hidden"}`}>
                            <p className='plus-jakarta-sans-500 text-black'>Developed a full-stack medical appointment booking system named "CareConnect" to streamline scheduling between patients and healthcare providers. Implemented authentication, real-time notifications.</p>
                        </div>
                    </div>
                    <div className="flex flex-col m-3 bg-pink-100 rounded-xl py-4">
                        <div className="flex flex-row justify-between px-5">
                            <h4 className='plus-jakarta-sans-500 text-2xl self-start text-black'>Technology Stack
                            </h4>
                            <button className={`${rotated_2 ? "rotate-90" : ""} duration-500`} onClick={() => set2Rotated(!rotated_2)}>
                                    <span className="text-pink-500">▶</span>
                            </button>
                        </div>
                        <div className={`plus-jakarta-sans-400 px-5 py-2 ${rotated_2? "block": "hidden"}`}>
                            <p className='plus-jakarta-sans-500 text-black'>Built using the MERN stack: React.js, Node.js, Express.js, and MongoDB with TailwindCSS on top, ensuring a full-stack JavaScript-based development approach.</p>
                        </div>
                    </div>
                    <div className="flex flex-col m-3 bg-pink-100 rounded-xl py-4">
                        <div className="flex flex-ro justify-between px-5 ">
                            <h4 className='plus-jakarta-sans-500 text-2xl self-center text-black'>Project Outline
                            </h4>
                            <button className={`${rotated_3 ? "rotate-90" : ""} duration-500`} onClick={() => set3Rotated(!rotated_3)}>
                                    <span className="text-pink-500">▶</span>
                            </button>
                        </div>
                        <div className={`plus-jakarta-sans-400 px-5 py-2 ${rotated_3? "block": "hidden"}`}>
                            <p className='plus-jakarta-sans-500 text-black'>Designed using Figma, focusing on user-friendly navigation and responsive UI components for doctor, admin and patients.</p>
                        </div>
                    </div>
                    <p className='text-center'>*To view the files, Go&nbsp;
                    <a 
                    className='text-blue-400 underline'
                    target='_blank'
                    href="https://docs.google.com/document/d/1hKPU0Lo08uxny3gcHc7n7McNLqZo53y0/edit?usp=sharing&ouid=102037534031454142423&rtpof=true&sd=true">
                        here</a></p>
                </div>
            </div>
            <div className="flex flex-col bg-pink-200 w-1/4 justify-start mt-10 p-6 rounded-xl h-auto mx-5">
                <h3 className="plus-jakarta-sans-600 text-4xl self-center m-3 mb-2 text-black">Academic Records</h3>
                <hr className='border-2 border-pink-300'/>
                <div className="flex flex-col py-3">
                    <div className="flex flex-col m-3 bg-pink-100 rounded-xl py-4">
                        <div className='flex flex-row px-5 justify-between'> 
                            <h4 className='plus-jakarta-sans-500 text-2xl self-start text-black'>Transcript</h4>
                            <button className={`${rotated_4 ? "rotate-90" : ""} duration-500`} onClick={() => set4Rotated(!rotated_4)}>
                                <span className="text-pink-500">▶</span>
                            </button>
                        </div>
                        <div className={`plus-jakarta-sans-400 px-5 py-2 ${rotated_4? "block": "hidden"}`}>
                            <p className='plus-jakarta-sans-500 text-black'>GPA 3.81. To obtain the unofficial &nbsp;
                                <a className='underline text-blue-500 cursor-pointer' 
                                href="https://drive.google.com/file/d/1p-jGrx8ZsmE_yqemc996EjdFJOO2TB_G/view?usp=drive_link" 
                                target='_blank'>
                                    transcript
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col m-3 bg-pink-100 rounded-xl py-4">
                        <div className="flex flex-row justify-between px-5">
                            <h4 className='plus-jakarta-sans-500 text-2xl self-start text-black'>Dean's List Honour
                            </h4>
                            <button className={`${rotated_5 ? "rotate-90" : ""} duration-500`} onClick={() => set5Rotated(!rotated_5)}>
                                    <span className="text-pink-500">▶</span>
                            </button>
                        </div>
                        <div className={`plus-jakarta-sans-400 px-5 py-2 ${rotated_5? "block": "hidden"}`}>
                            <p className='plus-jakarta-sans-500 text-black'>Achieved the Dean's Honour List every semester for maintaining a GPA above 3.5 from School of Information&Technology.</p>
                            <p className='plus-jakarta-sans-500 text-black'>To obtain the record of &nbsp;<a 
                            className='text-blue-400 underline'
                            target='_blank'
                            href="https://drive.google.com/file/d/1UMdwOkHOWNwxd-0ZZ3gzH51-Im_C8L6f/view?usp=drive_link">
                                Dean's Letter</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col m-3 bg-pink-100 rounded-xl py-4">
                        <div className="flex flex-ro justify-between px-5 ">
                            <h4 className='plus-jakarta-sans-500 text-2xl self-center text-black'> On-Campus Jobs
                            </h4>
                            <button className={`${rotated_6 ? "rotate-90" : ""} duration-500`} onClick={() => set6Rotated(!rotated_6)}>
                                    <span className="text-pink-500">▶</span>
                            </button>
                        </div>
                        <div className={`plus-jakarta-sans-400 px-5 py-2 ${rotated_6? "block": "hidden"}`}>
                            <p className='plus-jakarta-sans-500 text-black'>Dedicated in contrubuting a learning positive environment by joining Lab Monitor team to help students find a friendly community to study.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        <div className='h-auto w-auto flex flex-col justify-center items-center my-24'>
            <h2 className='text-5xl plus-jakarta-sans-600 text-black'>Philosophy of Career Goal</h2>
            <div className="chat chat-start my-5 floating">
                <div className="chat-image avatar">
                    <div className="w-24 rounded-full border-4 border-white">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src= {wshakespear}/>
                    </div>
                </div>
                <div className="chat-bubble plus-jakarta-sans-500 bg-white">
                    <span className='plus-jakarta-sans-500 text-3xl text-black'>"To be, or not to be, that is the question."</span>
                </div>
            </div>
            <div className='w-1/2 py-5 max-sm:w-auto'>
                <p className='puls-jakarta-sans-500 text-xl text-start text-white'>Inspired by William Shakespeare, one of the greatest poets and playwrights, I often find myself pondering this question.

                This world is intricate and ever-evolving, where there is rarely just one answer to any question. People change, circumstances shift, yet the flow of progress remains constant.

                I strive to break free from limitations, to think beyond conventional boundaries, and to continuously seek solutions to every challenge I face. Our world is beyong binary, but we always need a binary answer to keep us moving like a bionary tree.

                <span className='puls-jakarta-sans-500 text-2xl'><br/>To be or not to be, I remind myself.  </span>    
                </p>
            </div>


        </div>
        
        </div>
        </div>
    )
}

export default About;


