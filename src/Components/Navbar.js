import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [hidden, setHidden] = useState(true)

    const handleHover = () => {
        setHidden(false)
    }

    return (
        <div className="w-screen flex justify-center bg-gray-200 shadow-lg shadow-gray-500 fixed z-50 top-0 py-3">
            <div className="w-[80%] flex justify-between items-center">
                <div className="">
                    <p className='text-4xl font-bold text-rose-500'>Logo</p>
                </div>
                <div className="flex items-center gap-7 text-rose-700 ">
                    {/* <Link className='border w-20 border-rose-500 group'><p className='group-hover:bg-rose-500 px-5 py-2.5 text-rose-500 duration-700 w-0 group-hover:w-full group-hover:text-white '>Home</p></Link> */}
                    <Link to="/" className="relative px-5 py-3 overflow-hidden font-medium text-rose-600 bg-gray-200 border border-rose-500 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-rose-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-rose-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-rose-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-rose-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-rose-600 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Home</span>
                    </Link>
                    <Link className='hover:text-rose-500'>About Us</Link>
                    <Link className='hover:text-rose-500'>
                        {/* <div className=""> */}

                        <div className="group">
                            <div className="flex items-center">
                                <h1>Products</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div className="absolute z-20 hidden group-hover:block -ml-16">
                                <div className="relative mt-12">
                                    <div className=" shadow-xl flex -mt-[10px] border bg-white flex-col text-md font-semibold">
                                        <Link className='hover:bg-gray-100'>
                                            <div className="">
                                                <div onMouseOver={handleHover} onMouseLeave={() => { setHidden(true) }} className="flex p-5 justify-between items-center">
                                                    <h1 className='group'>Market Project</h1>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                                    </svg>

                                                    {!hidden ? <div className={`w-60 absolute z-20 top-0 ml-[242px] shadow-xl`}>
                                                        <div className="flex border bg-white flex-col text-md font-semibold">
                                                            <Link className='hover:bg-gray-100 p-5 ' >Warehouses</Link>
                                                            <Link className='hover:bg-gray-100 p-5 ' >C & F</Link>
                                                            <Link className='hover:bg-gray-100 p-5 ' >Distributers</Link>
                                                            <Link className='hover:bg-gray-100 p-5 ' >Retail Chain</Link>
                                                            <Link className='hover:bg-gray-100 p-5 ' >Chemist</Link>
                                                        </div>
                                                    </div> : ""}
                                                </div>

                                            </div>
                                        </Link>
                                        <Link to="/Disease_Detector" className='hover:bg-gray-100 p-5 ' >Disease Detector</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Departmental Store Software</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Grocery Store Software</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Retail/ General Store</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Manufacturing Software</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Trading Software</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* </div> */}
                    </Link>
                    <Link className='hover:text-rose-500'>Contact Us</Link>
                    <Link className='hover:text-rose-500'>
                        <div className="group">
                            <div className="flex items-center">
                                <h1>Utilities</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:-rotate-180 duration-500 w-5 h-5">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <div className="absolute z-20 hidden group-hover:block -ml-16 mt-2 shadow-xl">
                                <div className="w-64 h-3 -mt-3"></div>
                                <div className=" w-4 h-6"></div>
                                <div className="pt-4 flex -mt-[10px] border bg-white flex-col text-md font-semibold">
                                    <Link className='hover:bg-gray-100 bg-white p-5  '>Online Order(Direct)</Link>
                                    <Link className='hover:bg-gray-100 bg-white p-5 ' >Stock & Sales</Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar


