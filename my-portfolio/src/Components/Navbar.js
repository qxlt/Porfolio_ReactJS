import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

function Navbar(){
    const location = useLocation()
    const [tabSelected, setTabSelected] = useState("Home")

    useEffect(()=>{
        setTabSelected(location.pathname)
    }, [location.pathname])

    const isActive = (path) => (tabSelected === path ? "bg-pink-400 text-white underline" : "");

    return(
        <div className=" z-50 w-screen rounded-lg fixed top-5 bg-pink-200">
            <div className="h-14">
                <div className="hover:bg-pink-100 flex flex-row justify-start items-center">
                    <h2 className="w-1/4 plus-jakarta-sans-600 text-4xl ml-10 text-pink-500">Qinxi Liu</h2>
                    <ul className="flex justify-start ml-64 w-3/4 ">
                        <li className="m-2 p-2">
                            <Link to="/" className={`h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600 ${isActive("/")}`}>Home</Link>
                        </li>
                        <li className="m-2 p-2">
                            <Link to="/about" className={`h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600 ${isActive("/about")}`}>About</Link>
                        </li>
                        <li className="m-2 p-2 ">
                            <Link to="/projects" className={`h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600 ${isActive("/projects")}`}>Projects</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;