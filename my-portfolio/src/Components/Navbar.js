import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function Navbar({ home, about, project }){
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: "Home" },
                { id: "About" },
                { id: "Projects"},
            ];

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return(
        <div className="z-50 w-full fixed top-5 bg-pink-200">
            <div className="h-14">
                <div className="hover:bg-pink-100 flex flex-row justify-end items-center">
                    <h2 className="w-2/5 text-center max-sm:w-1/4 plus-jakarta-sans-600 text-4xl max-sm:text-lg text-pink-500">Qinxi Liu</h2>
                    <ul className="flex justify-center w-3/5 max-sm:w-3/4 pr-32">
                        <li className="m-2 p-2">
                            <button onClick={() => handleScrollToSection(home)}  className={`max-sm:text-sm h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600`}>Home</button>
                        </li>
                        <li className="m-2 p-2">
                            <button onClick={() => handleScrollToSection(about)}className={`max-sm:text-sm h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600`}>About</button>
                        </li>
                        <li className="m-2 p-2 ">
                            <button onClick={() => handleScrollToSection(project)} className={`max-sm:text-sm h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600`}>Projects</button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;