import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const SeeDetails = () => {

    const [cardDetails, setcardDetails] = useState();

    const { id } = useParams();
    const allCard = useLoaderData();

    useEffect(() => {

        const findCard = allCard?.find(card => card.id === id);
        setcardDetails(findCard);

    }, [id, allCard])

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-20">
            <DetailsCard cardDetails={cardDetails}></DetailsCard>
        </div>
    );
};

export default SeeDetails;