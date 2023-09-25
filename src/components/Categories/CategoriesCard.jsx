import PropTypes from 'prop-types';

const CategoriesCard = ({category}) => {

    const {image, category_name, title, category_name_background_color, card_background_color, text_color} = category || {}

    return (
        <div>
            <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative h-44 overflow-hidden rounded-t-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src= {image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-2">
                    <div className="mb-2">
                        <p className="block text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {category_name}
                        </p>
                    </div>
                    <p className="block text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

CategoriesCard.propTypes = {
    category: PropTypes.object
}

export default CategoriesCard;