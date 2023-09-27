import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {

    const { image, category_name, title, category_name_background_color, card_background_color, text_color } = category || {}

    return (

        <div style={{ backgroundColor: card_background_color }} className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <Link to={`/category/${title}`} state={{name: title}}>
                <div className="relative h-44 overflow-hidden rounded-t-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-2">
                    <div className="mb-2">
                        <p style={{ backgroundColor: category_name_background_color, color: text_color }} className={"block w-fit h-fit p-2 rounded-md text-sm font-medium leading-relaxed antialiased"}>
                            {category_name}
                        </p>
                    </div>
                    <p style={{ color: text_color }} className="block text-sm font-semibold leading-normal text-gray-700 antialiased opacity-75">
                        {title}
                    </p>
                </div>
            </Link>
        </div>
    );
};

CategoriesCard.propTypes = {
    category: PropTypes.object
}

export default CategoriesCard;