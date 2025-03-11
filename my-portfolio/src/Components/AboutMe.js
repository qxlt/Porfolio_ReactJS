
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from "react";
import fstack from '../assets/full-stack.png'

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
        <div className='bg-pink-200 h-full relative top-16'>
        <Header/>
        <Navbar/>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex h-1/2 p-10 justify-center items-center'> 
                <div
                    className="radial-progress bg-yellow-300 text-purple-800 border-yellow-300 border-8 font-bold"
                    style={{ "--value": progress,  "--size": "20rem" }}
                    aria-valuenow={progress}
                    role="progressbar"
                    >
                    {progress}%
                
                </div>  
                <div className="chat chat-end fade-in">
                    <div className="chat-bubble plus-jakarta-sans-500 bg-pink-300">I use them to deliver projects!</div>
                </div>
            </div>

            <h2 className='text-5xl plus-jakarta-sans-600 p-5 mb-4'>Technologies and Tools</h2>
            
        
        <div className="flex flex-row w-3/4 justify-center items-center space-x-6 bg-white bg-opacity-40 p-3 rounded-lg border-b-2 border-pink-400">
            {dropIcons().map(([key, value], index) => (
                <div key={index} className="flex flex-col items-center">
                    <img src={value} alt={key} className="w-12 h-12 showHidden" />
                    <p className="absolute plus-jakarta-sans-600 bg-yellow-300 p-1 mt-12 border-2 rounded-xl hidden text-sm text-purple-800">{key}</p>
                </div>          
            ))}
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-6 mx-32'>
            <div className="card card-side bg-base-100 shadow-lg h-40">
                <figure className="bg-pink-500 flex w-1/2 h-full items-center justify-center">
                    <img className="w-12 h-12" src={fstack} alt="full-stack"></img>
                </figure>
                <div className="card-body">
                    <h2 className='card-title plus-jakarta-sans-600'>Full Stack Development</h2>
                    <p className='plus-jakarta-sans-500'>Excel in React, building UIs with JS, Node.js, Express, REST, GraphQL, MongoDB, MySQL, and Oracle.</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40">
                <figure className="bg-pink-500 flex w-1/2 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons.png" alt="external-mobile-app-ux-and-ui-flatart-icons-lineal-color-flatarticons"/>
                </figure>
                <div className="card-body">
                    <h2 className='card-title plus-jakarta-sans-600'>Mobile Development</h2>
                    <p className='plus-jakarta-sans-500'>Experienced developing Android mobile apps using React Native and Apple environment using Swift </p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-lg h-40">
                <figure className="bg-pink-500 flex w-1/2 h-full items-center justify-center">
                    <img className='w-12 h-12' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-ai-computer-science-flaticons-lineal-color-flat-icons-3.png"/>
                </figure>
                <div className="card-body">
                    <h2 className='card-title plus-jakarta-sans-600'>Machine Learning</h2>
                    <p className='plus-jakarta-sans-500'>Proficient in using Google Colab and Jupyter for data cleaning, analysis, and training machine learning models</p>
                </div>
            </div>
            
        </div>
        <div className='mt-20'>
            <h2 className='plus-jakarta-sans-600 text-5xl'>Academic Journey</h2>
            <div className='card'>
                
            </div>

        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default About;


