
import AllCard from "../../Components/AllCard/AllCard";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {



    const showCards = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <AllCard showCards={showCards}></AllCard>
        </div>
    );
};

export default HomePage;