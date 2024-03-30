import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import AOS from 'aos'
import "aos/dist/aos.css"

const LandingPage = () => {
    const [counterState, setCounterState] = useState(false)

    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div className="h-screen w-screen">
            <Navbar />
            {/* <img className='w-screen h-[80%] mt-24' src="https://easysol.in/assets/img/posImg.jpg" alt="" /> */}
            <div className="w-screen justify-center flex items-center h-[80vh] bg-no-repeat bg-cover mt-24 bg-[url('https://easysol.in/assets/img/posImg.jpg')]">
                <div className="w-[75%]">
                    <h1 className='text-gray-800 text-6xl leading-tight font-bold w-[45%]'>We provide <br /> <span className='underline text-rose-600'> simplified solutions <br /></span> for your business!</h1>
                </div>
            </div>



            {/* About Us */}

            <div className="w-screen py-16 flex flex-col items-center">
                <h1 className='text-5xl text-gray-800  '>About Us</h1>
                <div className="w-[75%] pt-10 flex  gap-10">
                    <div data-aos="fade-up-right" className="w-[50%]">
                        <p className='text-xl text-gray-500 '>EasySol has extended its services through a bouquet of software's – POS, ERP etc. and is serving the needs of the several verticals such as Distributors, Chemists, Manufacturers, Chain Pharmacies, Department Stores, and General Stores. With a wide distribution network, and dedicated service staff, EasySol has created an unmatched reputation for itself, and has established itself as a trusted brand in the Pharma industry.</p>
                    </div>
                    <div data-aos="fade-up-left" className="w-[50%]">
                        <img className='w-[80%]' src="https://easysol.in/assets/img/aboutCom.jpg" alt="" />
                    </div>
                </div>
            </div>


            {/* Categories */}


            <div className="w-screen  bg-rose-50 py-20">
                <p className='text-center text-5xl text-gray-800 pb-14'>Product Categories</p>
                <div className="w-full flex justify-center">
                    <div className="w-[70%] flex gap-10">
                        <div className=" bg-white px-16 py-10 rounded-xl w-[50%]">
                            <h1 className='text-3xl font-bold text-gray-500 py-2'>POS</h1>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p>Chemist POS</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Departmental Store Software</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Retail Store Software</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> General Store Software</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Grocery Store Software</p>
                            </span>
                        </div>

                        <div className="bg-white px-16 py-10 rounded-xl w-[50%]">
                            <h1 className='text-3xl font-bold text-gray-500 py-2'>Pharma Softwares</h1>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p>Pharma Wholesale Software</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Pharma Distributor Software</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Pharma C & F Software</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Easysol Manufacturing (Batch/ Process)</p>
                            </span>
                            <span
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-3 text-red-600 items-center text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi rotate-90 bi-hand-index-thumb" viewBox="0 0 16 16">
                                    <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                                </svg>
                                <p> Easysol Trading</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>




            {/* Why choose us? */}


            <div className="w-screen flex py-16 justify-center bg-rose-400">
                <div className="w-[80%]">
                    <h1 className='text-5xl text-white text-center'>Why choose us?</h1>
                    <div className="w-full py-10 flex justify-between gap-8">
                        <div className="w-1/3 bg-rose-500 p-10 flex flex-col gap-3 rounded-xl cursor-pointer duration-500 text-center hover:bg-rose-700">
                            <span className='flex justify-center  w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="text-gray-300 bi bi-gem" viewBox="0 0 16 16">
                                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                                </svg>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <h1 className='text-4xl font-bold text-gray-100'>High – end Products</h1>
                                <h2 className='text-xl font-semibold text-gray-100'>Our products are quite sophisticated, yet extremely flexible, allowing easy enhancements and support all types of client entities such as divisions, sub-divisions and departments. All product modules have extensive reporting capabilities providing management with incisive insight into the business.</h2>
                            </span>
                        </div>
                        <div className="w-1/3 bg-rose-500 p-10 flex flex-col gap-3 rounded-xl cursor-pointer duration-500 text-center hover:bg-rose-700">
                            <span className='flex justify-center  w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi text-gray-300 bi-app-indicator" viewBox="0 0 16 16">
                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                </svg>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <h1 className='text-4xl font-bold text-gray-100'>Technology Update</h1>
                                <h2 className='text-xl font-semibold text-gray-100'>All our products are updated regularly with latest features to cater to an ever – changing market, which makes them superior to other similar products and thus provide our clients with an added competitive edge in managing their operations.</h2>
                            </span>
                        </div>
                        <div className="w-1/3 bg-rose-500 p-10 flex flex-col gap-3 rounded-xl cursor-pointer duration-500 text-center hover:bg-rose-700">
                            <span className='flex justify-center  w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi text-gray-300 bi-alipay" viewBox="0 0 16 16">
                                    <path d="M2.541 0H13.5a2.55 2.55 0 0 1 2.54 2.563v8.297c-.006 0-.531-.046-2.978-.813-.412-.14-.916-.327-1.479-.536q-.456-.17-.957-.353a13 13 0 0 0 1.325-3.373H8.822V4.649h3.831v-.634h-3.83V2.121H7.26c-.274 0-.274.273-.274.273v1.621H3.11v.634h3.875v1.136h-3.2v.634H9.99c-.227.789-.532 1.53-.894 2.202-2.013-.67-4.161-1.212-5.51-.878-.864.214-1.42.597-1.746.998-1.499 1.84-.424 4.633 2.741 4.633 1.872 0 3.675-1.053 5.072-2.787 2.08 1.008 6.37 2.738 6.387 2.745v.105A2.55 2.55 0 0 1 13.5 16H2.541A2.55 2.55 0 0 1 0 13.437V2.563A2.55 2.55 0 0 1 2.541 0" />
                                    <path d="M2.309 9.27c-1.22 1.073-.49 3.034 1.978 3.034 1.434 0 2.868-.925 3.994-2.406-1.602-.789-2.959-1.353-4.425-1.207-.397.04-1.14.217-1.547.58Z" />
                                </svg>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <h1 className='text-4xl font-bold text-gray-100'>On-going Support</h1>
                                <h2 className='text-xl font-semibold text-gray-100'>At Excelsior Softwares, we sincerely value the association with our customers, which is evident by the importance we place on providing prompt and satisfactory support to them.</h2>
                            </span>
                        </div>

                    </div>

                    <ScrollTrigger onEnter={() => { setCounterState(true) }} onExit={() => { setCounterState(false) }}>
                        <div className="flex ">
                            <div className="w-1/3 gap-3 justify-center flex flex-col items-center">
                                <h1 className='text-5xl font-bold text-gray-200'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={12000}
                                            duration={2}>
                                        </CountUp>}
                                    +</h1>
                                <p className='text-gray-200 text-lg'>Clients</p>
                            </div>
                            <div className="w-1/3 gap-3 justify-center flex flex-col items-center">
                                <h1 className='text-5xl font-bold text-gray-200'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={100}
                                            duration={2}>
                                        </CountUp>}
                                    +</h1>
                                <p className='text-gray-200 text-lg'>Projects</p>
                            </div>
                            <div className="w-1/3 gap-3 justify-center flex flex-col items-center">
                                <h1 className='text-5xl font-bold text-gray-200'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={365}
                                            duration={2}>
                                        </CountUp>}
                                    <span> </span>days</h1>
                                <p className='text-gray-200 text-lg'>Support</p>
                            </div>
                        </div>
                    </ScrollTrigger>

                </div>
            </div>



        </div>
    )
}

export default LandingPage