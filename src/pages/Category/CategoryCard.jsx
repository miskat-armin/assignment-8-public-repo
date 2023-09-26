import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryCard = ({ category }) => {

    const { id, image, title, description, donation_price, text_color } = category || {}

    const handleDonationClick = () => {

        const addedDonatedArray = [];

        const donatedCategories = JSON.parse(localStorage.getItem('donation'));

        if (!donatedCategories) {
            addedDonatedArray.push(category);
            localStorage.setItem('donation', JSON.stringify(addedDonatedArray));
            toast.success("Donation completed successfully")
        }

        else {

            const isExist = donatedCategories.find(category => category.id === id)

            if (!isExist) {
                addedDonatedArray.push(...donatedCategories, category);
                localStorage.setItem('donation', JSON.stringify(addedDonatedArray));
                toast.success("Donation completed successfully")
            }
            else {
                toast.error("Already donated");
            }

        }

    }

    return (
        <div className=' flex flex-col justify-center items-center my-8'>
            <div className='relative w-full h-[250px] md:h-[400px] lg:h[500px] mb-8 bg-red-50'>
                <img className=' h-full w-full' src={image} alt="" />
                <div className='bg-[#0B0B0B80] absolute top-[60%] md:top-[75%] w-full h-[100px] z-10'>
                    <button onClick={handleDonationClick} style={{backgroundColor: text_color}} className='text-white p-3 my-7 ml-7 rounded-sm'>Donate ${donation_price}</button>
                </div>

            </div>
            <div>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-sm font-thin'>{description}</p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                theme="light"
            />
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;