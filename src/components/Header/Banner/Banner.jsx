import { useState } from "react";
import Background from "../../../../banner.png";
import PropTypes from 'prop-types';


const Banner = ({FilterData}) => {
  const [query, setQuery] = useState()
  const handleSearchClick = () => {
    FilterData(query.trim());
  }

 
  return (
    <div className="h-[150px] md:h-[350px] xl:h-[450px] w-full m-auto  text-center text-[#0B0B0B] font-bold text-3xl mb-10">
      <img
        className="absolute top-0 bottom-0 left-0 right-0 h-[200px] xl:h-[500px] md:h-[400px] w-full bg-cover z-[-10] opacity-10"
        src={Background}
      />

      <div className="mt-[50px] flex flex-col justify-center items-center">
        <h1 className="mt-20 mb-7">I Grow By Helping People In Need</h1>

        <div className="flex flex-row">
          <input
            onChange={e => setQuery(e.target.value)}
            type="text"
            placeholder="Search here...."
            className="input input-bordered input-md w-[350px] max-w-xs rounded-none rounded-l-lg mr-0"
          />
          <button
            onClick={handleSearchClick}
            className="text-sm px-4 rounded-none text-white rounded-r-lg bg-[#FF444A] border-orange-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
    FilterData: PropTypes.array
}

export default Banner;