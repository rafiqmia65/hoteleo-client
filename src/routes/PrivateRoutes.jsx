import React from "react";
import useAuth from "../Hook/useAuth";
import Loader from "../pages/Shared/Loader/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoutes;
