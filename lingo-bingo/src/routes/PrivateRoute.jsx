import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center my-40">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  
  return <Navigate state={location.pathname} to="/SignIn"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
