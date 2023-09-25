import Background from '../../../../banner.png'

const Banner = () => {
    return (
        <div className="h-[80vh] m-auto relative text-center text-[#0B0B0B] font-bold text-3xl mb-20">
            <img className='absolute bg-cover top-0 bottom-0 left-0 right-0 opacity-20' src={Background}/>
            <h1 className='relative'>I Grow By Helping People In Need</h1>
        </div>
    );
};

export default Banner;