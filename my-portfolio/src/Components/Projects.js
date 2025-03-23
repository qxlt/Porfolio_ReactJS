import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import careConnect from "../assets/careConnect.png"
import travelBooking from "../assets/travelBooking.jpg"
import foodfolio from "../assets/foodfolio.jpg"
import weatherForecast from "../assets/weatherForecast.png"
import chatApp from "../assets/chatApp.png"
import taskflow from "../assets/Taskflow.png"
import lock from "../assets/lock.png"
import gray from  "../assets/gray.png"



function Projects(){
    return(
        <div className="my-24" id="Projects">
            <div className="flex flex-col justify-center items-center space-y-5 m-5 mb-20">
                <h2 className="plus-jakarta-sans-600 text-5xl text-black">Projects</h2>
                <div className="mb-10">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-start text-black">2021</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="black"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box text-black bg-white">Started to Acknowldege the Basic Logic</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start text-black">2022</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="black"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box text-black bg-white">First Project</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start text-black">2024</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="black"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box text-black bg-white">First Real World Project</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start text-black">2025~</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="black"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box text-black bg-white">Ready for the Future...</div>
                            <hr />
                        </li>
                        </ul>
                </div >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="card bg-base-100 w-96 shadow-sm bg-pink-100">
                        <figure className="px-10 pt-10 justify-center items-center project-box">
                            <img
                            src={careConnect}
                            className="rounded-xl project-bg" />|
                            <div className="github-link items-center">
                                <a className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300"
                                target="_blank"
                                href="https://github.com/ammar-sultan/CareConnectRepo.git">
                                    Github Link</a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600 text-black">Care Connect</h2>
                            <p className="plus-jakarta-sans-500 text-black">An appoinment booking system designed for a medical clinic with a portal for patients to book appoinments and doctors and administraters's dashboard to keep things on track</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm  bg-pink-100">
                        <figure className="px-10 pt-10 justify-center items-center project-box">
                            <img
                            src={weatherForecast}
                            className="rounded-xl project-bg" />
                            <div className="github-link items-center">
                                <a className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300"
                                 target="_blank"
                                 href="https://github.com/qxlt/101415216-comp3123-labtest2.git"
                                >Github Link</a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600 text-black">Weather Forecast</h2>
                            <p className="plus-jakarta-sans-500 text-black">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm bg-pink-100">
                        <figure className="px-10 pt-10 justify-center items-center project-box">
                            <img
                            src={foodfolio}
                            className="rounded-xl project-bg" />
                            <div className="github-link items-center">
                                <a                                 
                                target="_blank"
                                href="https://github.com/ammar-sultan/FoodFolio-Prototype.git"
                                className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300">
                                Github Link</a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600 text-black">Foodfolio</h2>
                            <p className="plus-jakarta-sans-500 text-black">A mobile (for IOS users) app that allows users to leave a rating the restaurants on the list and navigates to the location.</p>
                  
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm bg-pink-100">
                        <figure className="px-10 pt-10 justify-center items-center project-box">
                            <img
                            src={travelBooking}
                            className="rounded-xl project-bg" />
                            <div className="github-link items-center">
                                <a 
                                target="_blank"
                                href="https://github.com/qxlt/COMP3123/tree/main/AssignmentOne"
                                className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300">
                                    Github Link</a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600 text-black">Book Your Next Travel(BYNT)</h2>
                            <p className="plus-jakarta-sans-500 text-black">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm bg-pink-100">
                        <figure className="px-10 pt-10 justify-center items-center project-box">
                            <img
                            src={chatApp}
                            className="rounded-xl project-bg" />
                            <div className="github-link items-center">
                                <a 
                                target="_blank"
                                href="https://github.com/qxlt/101415216_lab_test1_chat_app.git"
                                className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300">Github Link</a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600 text-black">GroupChatting</h2>
                            <p className="plus-jakarta-sans-500 text-black">Socket IO based Chat Room for people who have the same hobby and topic to chat with.</p>
            
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm bg-pink-100">
                        <figure className="px-10 pt-10 justify-center items-center project-box">
                            <img
                            src={taskflow}
                            className="rounded-xl project-bg" />
                            <div className="github-link items-center">
                                <a 
                                target="_blank"
                                href="https://github.com/ammar-sultan/TaskFlow.git"
                                className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300">Github Link</a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600 text-black">Taskflow</h2>
                            <p className="plus-jakarta-sans-500 text-black">Taskflow allows you to add reminder to the app and make it a to-do list. You can simply cross over the thing you finished by clicking the item.</p>
                     
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm bg-gray-600">
                        <figure className="px-10 pt-10 justify-center items-center block duration-500">
                            <img
                            src={gray}
                            className="rounded-xl project-bg border-4 border-pink-300"/>
                            <div className=" items-center absolute duration-500">
                                <a 
                                className="plus-jakarta-sans-500 btn bg-pink-400 text-white hover:bg-pink-300"><img src={lock} /></a>
                            </div>
                        </figure>
                        <div className="card-body items-center text-start">
                            <h2 className="card-title plus-jakarta-sans-600">------</h2>
                            <hr className="border-2 border-black w-full"></hr>
                            <div className="card-actions my-2">
                            <button className="btn plus-jakarta-sans-500 bg-gray-300 text-black">To be unlocked</button>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>

        </div>
    )
}
export default Projects;
