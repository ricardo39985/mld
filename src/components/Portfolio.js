import React from 'react';
// import { Link } from 'react-router-dom';
// import WesbiteImage from '../images/products/website/website.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        <div className="transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-110 flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
                            <div>
                                <h2 className="font-extrabold text-3xl text-center mb-2">Starter</h2>
                                <p className="opacity-60 text-center">For the individual and small teams
                                </p>
                                <div className="flex flex-col items-center my-8">
                                    <p className="font-extrabold text-4xl">$29
                                    </p>
                                    <p className="text-sm opacity-60">/month
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>Trending Dashboard</b><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true" className="w-4 h-4 ml-1 fill-orange-300">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>10 Keywords</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>100 Accounts Tracking</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>3 Users</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg> Basic Support
                                </p>
                                <div className="flex justify-center mt-8 ">
                                    <button className="border px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">Get
                                        Started
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className="transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-200 max-w-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                    className="w-20 h-20 absolute -top-2 -left-1 fill-red-400">
                                    <path fill-rule="evenodd"
                                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <p className="mono text-sm absolute -top-1 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
                                POPULAR
                            </p>
                            <div>
                                <div className="flex gap-4 justify-center">
                                    <p className="font-extrabold text-3xl mb-2">Managed Website</p>
                                </div>
                                <p className="opacity-60 text-center">Get a website built for free, pay only a monthly fee</p>
                                <div className="flex gap-4 justify-center">
                                    <div className="flex flex-col items-center my-8">
                                        <p className="font-extrabold text-4xl">$3,000</p>
                                        <p className="text-sm opacity-60">starting at GYD /month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Custom-built, mobile-friendly website</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Domain & hosting included</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Ongoing maintenance & security updates</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <b>SEO & performance optimization</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Unlimited support & content updates</b>
                                </p>
                                <div className="flex justify-center mt-8">
                                    <button className="px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">Get Started</button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">

                            <img className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={WesbiteImage} width="500px" height="100px" alt="Website" />


                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Business Management System</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Our Business Management System is a robust and easily scalable system that streamlines business operations, increase efficiency, and ultimately drive growth and profitability for your business.
                                    With features such as employee management, finance control, and many more modules to effectively manage all aspects of a business.
                                    All data is stored in the cloud and as such it is easily accessible from all devices and from any location.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">School Management Portal</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Our all encompassing School Management Portal is the only solution needed for any institution.
                                    The School Management Portal (SMP) is a tool that can help educational institutions of all kinds manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators.
                                    The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>

                                <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Payroll Management System</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually, with this system in place, you enjoy benefits such as:
                                    increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Event Management System</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Our event management system helps to manage different types of events, whether weddings, burials or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable.
                                    With use cases already recorded for quite a number of events, we can assure you of a stress-less event mangement platform.
                                </p>
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        <div className="transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-110 flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
                            <div>
                                <h2 className="font-extrabold text-3xl text-center mb-2">Starter Website</h2>
                                <p className="opacity-60 text-center">For the individual and small businesses
                                </p>
                                <div className="flex flex-col items-center my-8">
                                    <p className="font-extrabold text-4xl">$10,000</p>
                                    <p className="text-sm opacity-60">GYD /starting at</p>
                                </div>

                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Custom-designed, mobile-friendly website</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>Up to 3 pages (Home, About, Contact, etc.)</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>Basic SEO optimization for better search visibility</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                    <b>Domain & hosting setup assistance</b>
                                </p>
                                <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                    <path fill-rule="evenodd"
                                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                        clip-rule="evenodd"></path>
                                </svg> Basic Support
                                </p>
                                <div className="flex justify-center mt-8 ">
                                    <button className="border px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">Get
                                        Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-110 flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
                            <div>
                                <h2 className="font-extrabold text-3xl text-center mb-2">Cusom Web App</h2>
                                <p className="opacity-60 text-center">For small businesses and entrepreneurs</p>
                                <div className="flex flex-col items-center my-8">
                                    <p className="font-extrabold text-2xl">Get a Free Consultation</p>
                                    <p className="text-xs opacity-60">Let's discuss your needs</p>
                                </div>

                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Custom-built web application tailored to your needs</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                                    </svg>
                                    <b>User authentication & secure login system</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Database setup & management</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Admin dashboard for easy management</b>
                                </p>
                                <p className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path>
                                    </svg>
                                    <b>Ongoing support & updates</b>
                                </p>
                                <div className="flex justify-center mt-8">
                                    <button className="border px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">Get Started</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;