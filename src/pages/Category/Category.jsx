import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [category, setCategory] = useState({})

    const {title} = useParams();

    const categories = useLoaderData();

    useEffect(() => {
        const findCategory = categories?.find(category => category.title === title)
        
        setCategory(findCategory);

    }, [title, categories])

    return (
        <div>
            <CategoryCard category={category}></CategoryCard>
        </div>
    );
};

export default Category;