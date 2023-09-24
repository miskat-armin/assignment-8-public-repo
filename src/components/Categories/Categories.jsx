import CategoriesCard from "./CategoriesCard";

const Categories = ({ categories }) => {
    return (
        <div>
            <h1>miskat it is</h1>
            <div>
                {
                    categories?.map(category => <CategoriesCard key={category.id} ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;