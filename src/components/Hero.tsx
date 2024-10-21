import { ReactTyped } from "react-typed";


function Hero() {
    return (
        <div className='text-white '>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py6"> Grow with data.</h1>
                <div className=" flex justify-center items-center pt-4">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold ">Fast, flexible financing for </p>
                    <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-gray-500" strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className="md:text-2xl text-xl  font-bold text-gray-500 px-3"> Monitor your data analytics to increase revenue for BTC, BTC & SASS platforms</p>
                <button className="text-black bg-[#00df9a] w-[180px] font-medium mx-auto rounded-md py-3  mt-5">Get Started</button>
            </div>
        </div>
    )
}

export default Hero