import Background from '../../../../banner.png'

const Banner = () => {

    return (

        <div className="h-[150px] md:h-[350px] xl:h-[450px]  w-full m-auto  text-center text-[#0B0B0B] font-bold text-3xl mb-10">
        <img
          className="absolute top-0 bottom-0 left-0 right-0 h-[200px] xl:h-[500px] md:h-[400px] w-full bg-cover opacity-20 z-[-10]"
          src={Background}
        />
        <h1 >I Grow By Helping People In Need</h1>
      </div>

        // <div className="h-[50vh] md:h-[80vh] w-full m-auto relative text-center text-[#0B0B0B] font-bold text-3xl">
        //     <img className='absolute bg-cover top-0 bottom-0 left-0 right-0 opacity-20' src={Background}/>
        //     <h1 className='relative'>I Grow By Helping People In Need</h1>
        // </div>
    );
};

export default Banner;