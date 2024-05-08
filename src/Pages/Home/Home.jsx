import { useLoaderData } from "react-router-dom";
import TabSec from "../../Components/TabSec";
import Banner from "./Banner";


const Home = () => {
    const job = useLoaderData();
    // console.log(job)

    return (
        <>
            {/* Banner Part */}
            <div>
                <Banner></Banner>
            </div>

            {/* Tabs Part */}
            <div>
                <TabSec job={job}></TabSec>
            </div>

            {/* Banner Part */}
            <div></div>

            {/* Banner Part */}
            <div></div>
        </>
    );
};

export default Home;