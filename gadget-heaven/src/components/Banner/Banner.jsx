import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-primary rounded-b-3xl mx-2 lg:mx-0 md:mx-0">
            <div className="lg:pb-72 md:pb-44 pb-32 pt-6 flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl lg:text-6xl md:text-4xl font-bold text-center">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p className="text-white text-center py-7 px-10">Welcome to Gadgets Heaven. Here you will find all kinds of electronic gadgets. Phone, Laptop, Watch and many <br /> more. If you want to see by category, click on the category of the product you like. If you want to buy <br /> a product, go to the details of that product, you will get the option to buy.</p>
                <Link to="/dashboard"><button className="bg-white text-primary font-bold py-3 px-10 rounded-full">Shop Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;