import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
    const fullCategories = useLoaderData();
    const [categories, setCategories] = useState(useLoaderData())
    
    const FilterData = (params) => {
        if(params !== ''){
            const filteredData = fullCategories.filter(category => {return category.category_name.toLowerCase().includes(params.toLowerCase()) ? category : null})
            setCategories(filteredData)
        }
        else{
            setCategories(fullCategories)
        }
    }

    const restoreData = () => {
        setCategories(fullCategories)
    }

    return (
        <div>
            <Banner FilterData={FilterData} restoreData={restoreData}></Banner>
            <div className="mb-12">
                <Categories categories={categories}></Categories>
            </div>
            
        </div>
    );
};

export default Home;