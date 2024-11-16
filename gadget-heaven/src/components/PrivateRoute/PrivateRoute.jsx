import { useContext } from "react";
import { CountContext } from "../Layouts/MainLayout";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(CountContext);

    if(loading){
        return <div className="flex justify-center items-center my-10"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(!user){
        return <Navigate to="/singIn"></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;