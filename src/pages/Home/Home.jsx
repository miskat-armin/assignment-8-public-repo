import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-[85%] mx-auto">
                <Categories categories={categories}></Categories>
            </div>
            
        </div>
    );
};

export default Home;