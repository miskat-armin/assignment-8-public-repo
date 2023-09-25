import PropTypes from 'prop-types';

const CategoryCard = ({category}) => {

    const { image, title, description} = category || {}

    return (
        <div className=' flex flex-col justify-center items-center my-8'>
            <div>
                <img className='w-[1100px] h-[500px] mb-8' src={image} alt="" />
            </div>
            <div>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-sm font-thin'>{description}</p>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;