import bg_image from '../../assets/images/bg-shadow.png';
const NewsLetterSection = () => {
    return (
        <div className='lg:w-[1540px] md:w-[770px] border border-white p-5 rounded-xl bg-slate-200 bg-opacity-5'>
            <div className='bg-white rounded-xl flex flex-col justify-center items-center py-16 lg:py-32 md:py-28 text-center px-5 lg:px-0 md:px-0 border' style={{
            background: "rgb(255, 255, 255)",
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
            <p className='text-lg text-slate-700 font-medium py-5'>Get the latest updates and news right in your inbox!</p>
            <div className='w-full flex justify-center gap-5 flex-col lg:flex-row md:flex-row'>
                <input className='w-full lg:w-96 md:w-60 border py-4 rounded-lg pl-5' type="text" placeholder='Enter your email'/>
                <button className='md:w-52 lg:w-40 bg-gradient-to-r from-purple-500 to-yellow-300 py-4 rounded-lg px-10 font-bold'>Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default NewsLetterSection;