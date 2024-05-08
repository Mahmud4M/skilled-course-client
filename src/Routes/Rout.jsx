import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Rout = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-[5rem] mx-auto mt-10 mb-10"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (!user) {
        return <Navigate to='/signin' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default Rout;