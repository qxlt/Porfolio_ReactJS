import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import careConnect from "../assets/careConnect.jpg"
import travelBooking from "../assets/travelBooking.jpg"
import foodfolio from "../assets/foodfolio.jpg"
import weatherForecast from "../assets/weatherForecast.jpg"



function Projects(){
    return(
        <div className="bg-pink-200 relative top-14">
            <Header/>
            <Navbar/>
            <div className="flex flex-col justify-center items-center space-y-5 m-5 mb-20">
                <div className="mb-10">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-start">2021</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box">Started to Acknowldege the Basic Logic</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2022</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box">First Project</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2024</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box">First Real World Project</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2025~</div>
                            <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                            </svg>
                            </div>
                            <div className="timeline-end timeline-box">Ready for the Future...</div>
                            <hr />
                        </li>
                        </ul>
                </div >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                            src={careConnect}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Care Connect</h2>
                            <p>An appoinment booking system designed for a medical clinic with a portal for patients to book appoinments and doctors and administraters's dashboard to keep things on track</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10 ">
                            <img
                            src={weatherForecast}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Weather Forecast</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                            src={foodfolio}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Foodfolio</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                            src={travelBooking}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Book Your Next Travel(BYNT)</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>
            <Footer/>

        </div>
    )
}
export default Projects;
