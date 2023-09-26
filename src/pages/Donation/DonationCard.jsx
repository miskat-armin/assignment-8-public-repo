import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({category}) => {

    const { image, category_name, title, donation_price, category_name_background_color, text_color, card_background_color } = category || {}

    return (
        <div>
            <div className="relative flex w-full max-w-[48rem]  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-[150px] w-[180px] object-cover"
                    />
                </div>
                <div style={{backgroundColor: card_background_color}} className="p-6">
                    <h6 style={{backgroundColor: category_name_background_color, color: text_color }} className="block w-fit h-fit p-2 rounded-md text-sm font-medium leading-relaxed antialiased">
                        {category_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{color: text_color}} className="mb-8 block text-base font-semibold leading-relaxed text-gray-700 antialiased">
                        ${donation_price}.00
                    </p>

                    <Link to={`/category/${category_name}`}>
                    
                    <button style={{backgroundColor: text_color, color: 'white'}} className="rounded-sm px-2">
                        View Details</button>
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