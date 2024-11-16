import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SubBanner from "../SubBanner/SubBanner";
import Categories from "../Categories/Categories";
import { useEffect } from "react";

const Home = () => {
    const categories = useLoaderData();
    useEffect(() => {
        document.title = "Gadget Heaven | Home"
    },[])
    return (
        <div>
            <div className="relative">
                <Banner></Banner>
                <div className="absolute lg:-bottom-[350px] lg:right-40 md:-bottom-64 md:right-28 -bottom-44">
                    <SubBanner></SubBanner>
                </div>
            </div>
            <div className="lg:mt-[450px] md:mt-[320px] mt-[200px]">
                <h2 className="text-center pb-16 text-5xl font-bold">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-11 gap-5 pb-10">
                    <div className="lg:col-span-2 md:col-span-3">
                        <Categories categories={categories}></Categories>
                    </div>
                    <div className="lg:col-span-9 md:col-span-9">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;