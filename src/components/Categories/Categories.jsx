import CategoriesCard from "./CategoriesCard";
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {
    return (
        <div>
            
            <div className="flex flex-col items-center md:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    categories?.map(category => <CategoriesCard key={category.id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.object
}

export default Categories;