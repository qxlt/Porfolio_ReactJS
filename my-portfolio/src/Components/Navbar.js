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
        <div className="z-50 w-full fixed top-5 bg-pink-200">
            <div className="h-14">
                <div className="hover:bg-pink-100 flex flex-row justify-evenly items-center">
                    <h2 className="w-2/5 max-sm:w-1/4 px-3 plus-jakarta-sans-600 text-4xl max-sm:text-lg text-pink-500">Qinxi Liu</h2>
                    <ul className="flex justify-start w-3/5 max-sm:w-3/4 ">
                        <li className="m-2 p-2">
                            <Link to="/" className={`max-sm:text-sm h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600 ${isActive("/")}`}>Home</Link>
                        </li>
                        <li className="m-2 p-2">
                            <Link to="/about" className={`max-sm:text-sm h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600 ${isActive("/about")}`}>About</Link>
                        </li>
                        <li className="m-2 p-2 ">
                            <Link to="/projects" className={`max-sm:text-sm h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600 ${isActive("/projects")}`}>Projects</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;