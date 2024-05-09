import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const Root = () => {
    return (
        <>
            <div className="md:max-w-7xl md:mx-auto lg:max-w-7xl lg:mx-auto mb-5">
                {/* Navbar */}
                <Navbar></Navbar>


                {/* Outlet */}
                <Outlet></Outlet>

            </div>
            {/* Footer */}
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Root;