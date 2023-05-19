import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    toast('You have to login first!!')
  )
};

export default PrivateRoute;
