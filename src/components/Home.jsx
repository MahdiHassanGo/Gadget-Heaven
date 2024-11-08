import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from './Category';



const Home = () => {
    const categories = useLoaderData()
    
    return (
        <div className="rounded-3xl">
            <Banner></Banner>

            <div className="flex justify-center">
                <h1 className="text-3xl font-bold my-6">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="flex flex-col items-center md:items-start md:flex-row gap-5 w-10/12 mx-auto">
                <div className="shadow-lg w-3/12 h-fit rounded-lg mr-12 md:mr-0  ">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
                <div className="w-9/12 ">
                    <Outlet></Outlet>
                </div>

            </div>


        </div>
    );
};

export default Home;