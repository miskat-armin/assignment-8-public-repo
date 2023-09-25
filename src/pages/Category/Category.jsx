import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [category, setCategory] = useState({})

    const {category_name} = useParams();

    const categories = useLoaderData();

    useEffect(() => {
        const findCategory = categories?.find(category => category.category_name === category_name)
        
        setCategory(findCategory);

    }, [category_name, categories])

    console.log(category);

    return (
        <div>
            <CategoryCard category={category}></CategoryCard>
        </div>
    );
};

export default Category;