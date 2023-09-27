import { useState } from "react";
import Background from "../../../../banner.png";
import PropTypes from 'prop-types';


const Banner = ({FilterData}) => {
  const [query, setQuery] = useState()
  const handleSearchClick = (e) => {
    e.preventDefault();
    FilterData(query.trim());
  }

 
  return (
    <div className="h-[150px] md:h-[350px] xl:h-[450px] w-full m-auto  text-center text-[#0B0B0B] font-bold text-3xl mb-10">
      <img
        className="absolute top-0 bottom-0 left-0 right-0 h-[200px] xl:h-[500px] md:h-[400px] w-full bg-cover z-[-10] opacity-10"
        src={Background}
      />

      <div className="pt-[20px] md:pt-[80px] xl:pt-[120px] flex flex-col justify-center items-center">
        <h1 className="mb-7 text-sm md:text-4xl xl:text-5xl">I Grow By Helping People In Need</h1>

        <form className="flex flex-row" onSubmit={handleSearchClick}>
          <input
            onChange={e => setQuery(e.target.value)}
            type="text"
            placeholder="Search here...."
            className="input input-bordered input-md w-[150px] md:w-[350px] max-w-xs rounded-none rounded-l-lg mr-0"
          />
          <button
            type="submit"
            className="text-sm px-4 rounded-none text-white rounded-r-lg bg-[#FF444A] border-orange-600"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

Banner.propTypes = {
    FilterData: PropTypes.array
}

export default Banner;