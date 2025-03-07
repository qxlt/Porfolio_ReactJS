import { Link, Route, Routes } from "react-router-dom";

function Navbar(){
    return(
        <div className="z-50 w-screen rounded-lg fixed top-5 bg-pink-200">
            <div className="h-14">
                <div>
                </div>
                <div className="">
                    <ul className="flex justify-center hover:bg-pink-100">
                    <li className="m-2 p-2">
                            <Link to="/" class="h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600">Home</Link>
                        </li>
                        <li className="m-2 p-2">
                            <Link to="/about" class="h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600">About Me</Link>
                        </li>
                        <li className="m-2 p-2 ">
                            <Link to="/projects" class="h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600">Projects</Link>
                        </li>
                        {/* <li className="m-2 p-2 ">
                            <a class="h-full w-full p-2 rounded-md hover:bg-pink-400 hover:text-white text-md plus-jakarta-sans-600" href="#">Resume Overview</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;