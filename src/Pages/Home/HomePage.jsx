
import { useState } from "react";
import AllCard from "../../Components/AllCard/AllCard";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {

    const [inputValue , setInputValue] = useState('');
    const [isTrueBtn , setIsTrueBtn] = useState(false);


    const showCards = useLoaderData();


    return (
        <div>
            <Banner setIsTrueBtn={setIsTrueBtn} setInputValue={setInputValue}></Banner>
            <AllCard isTrueBtn={isTrueBtn} inputValue={inputValue} showCards={showCards}></AllCard>
        </div>
    );
};

export default HomePage;