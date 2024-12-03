import Banner from "../Banner/Banner";
import About from "../About/About";
import Documents from "../Documents/Documents";
import Success from "../Success/Success";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WorkProcess from "../workProcess/WorkProcess";
import Challenge from "../Challenge/Challenge";

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Lingo Bingo</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Success></Success>
            <WorkProcess></WorkProcess>
            <Challenge></Challenge>
            <Documents data={data}></Documents>
        </div>
    );
};

export default Home;