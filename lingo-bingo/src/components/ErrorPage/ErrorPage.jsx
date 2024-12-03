import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
    const {pathname} = useLocation();
    
    return (
        <div className="flex flex-col items-center justify-center py-40">
            <h2 className="text-4xl md:text-7xl font-bold text-primary font-sora">Not Found Page</h2>
            <h4 className="text-3xl font-bold pt-10">Oops!</h4>
            <p className="pt-5 font-medium">Your current route is <span className="underline">{pathname}</span> This is not valid route</p>
            <Link to="/" className="py-2 px-8 rounded-full mt-5 text-white bg-primary font-bold">Go Home</Link>
        </div>
    );
};

export default ErrorPage;