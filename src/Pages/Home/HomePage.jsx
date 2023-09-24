import { useEffect, useState } from "react";
import AllCard from "../../Components/AllCard/AllCard";
import Banner from "../../Components/Banner/Banner";

const HomePage = () => {

    const [allCards , setAllCards] = useState([]);

    useEffect(()=>{
        fetch('./donation.json')
            .then(res => res.json())
            .then(data => setAllCards(data));
    },[])

    

    return (
        <div>
            <Banner></Banner>
            <AllCard allCards={allCards}></AllCard>
        </div>
    );
};

export default HomePage;