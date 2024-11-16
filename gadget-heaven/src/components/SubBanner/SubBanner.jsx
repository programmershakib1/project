import banner from '../../assets/banner.jpg';

const SubBanner = () => {
    return (
        <div className='lg:w-[1200px] lg:h-[570px] md:w-[550px] p-5 rounded-3xl border-2 border-slate-100 mx-5 md:mx-0'>
            <img className='w-full h-full rounded-3xl' src={banner} alt="" />
        </div>
    );
};

export default SubBanner;