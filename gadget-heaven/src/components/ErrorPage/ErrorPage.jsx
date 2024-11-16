import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
    const {pathname} = useLocation();
    return (
        <div className="flex flex-col items-center justify-center py-40">
            <h2 className="text-4xl lg:text-7xl md:text-7xl font-bold text-primary">No Data Found</h2>
            <h4 className="text-3xl font-bold pt-10">Oops!</h4>
            <p className="pt-5 font-medium">Current route is <span className="underline  decoration-primary">{pathname}</span>. This is not valid page</p>
            <Link to="/" className="py-2 px-6 rounded-full bg-primary text-white mt-5">Go home</Link>
        </div>
    );
};

export default ErrorPage;