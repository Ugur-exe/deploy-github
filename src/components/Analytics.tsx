import Laptop from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className='w-full bg-white py16 p-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ad ea tempora magnam eaque in eos tempore dolor eum laborum cum totam voluptatem quisquam, aspernatur aliquam. Similique beatae odio suscipit.</p>
                    <button className="text-[#00df9a] bg-black w-[180px] font-medium mx-auto rounded-md py-3 mt-4">Get Started</button>
                </div>
                
            </div>
        </div>
    )
}

export default Analytics