import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({ category }) => {

    const { image, category_name, title, donation_price, category_name_background_color, text_color, card_background_color } = category || {}

    return (
        <div>
            <div className="relative mb-4 flex flex-col md:flex-row w-[250px] md:w-[320px] lg:w-[350px] xl:w-[500px] md:h-[180px] xl:h-[150px] rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">

                <div className="relative md:w-2/5 w-full md:h-full overflow-hidden rounded-t-lg md:rounded-r-none md:rounded-l-lg  bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div style={{ backgroundColor: card_background_color }} className="p-4 flex-1 rounded-b-lg md:rounded-l-none md:rounded-r-lg">
                    <h6
                        style={{ backgroundColor: category_name_background_color, color: text_color }}
                        className="block w-fit h-fit p-1 rounded-md text-xs font-medium leading-relaxed antialiased"
                    >
                        {category_name}
                    </h6>
                    <div className="md:max-lg:h-[3rem]">
                        <h4 className="mb-2 block text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                    </div>
                    <p style={{ color: text_color }} className="mb-3 block text-base font-semibold leading-relaxed text-gray-700 antialiased">
                        ${donation_price}.00
                    </p>

                    <Link to={`/category/${category_name}`}>
                        <button style={{ backgroundColor: text_color, color: 'white' }} className="rounded-sm px-2 md: py-1">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

DonationCard.propTypes = {
    category: PropTypes.object
}

export default DonationCard;