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
                    <img className='w-48' src="https://easysol.in/assets/img/icon/eslogonew.png" alt="" />
                </div>
                <div className="flex items-center gap-7 text-rose-700 ">
                    <Link className='border w-20 border-rose-500 group'><p className='group-hover:bg-rose-500 px-5 py-2.5 text-rose-500 duration-700 w-0 group-hover:w-full group-hover:text-white '>Home</p></Link>
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
                                                    <h1 className='group'>EasySol Pharma</h1>
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
                                        <Link className='hover:bg-gray-100 p-5 ' >EasySol POS</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Departmental Store Software</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Grocery Store Software</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >Retail/ General Store</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >EasySol Manufacturing</Link>
                                        <Link className='hover:bg-gray-100 p-5 ' >EasySol Trading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* </div> */}
                    </Link>
                    <Link className='hover:text-rose-500'>How to Buy</Link>
                    <Link className='hover:text-rose-500'>Clients</Link>
                    <Link className='hover:text-rose-500'>Downloads</Link>
                    <Link className='hover:text-rose-500'>Contact Us</Link>
                    <Link className='hover:text-rose-500'>Career</Link>
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