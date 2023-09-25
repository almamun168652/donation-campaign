
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const SeeDetails = () => {

    const [details , setDetials] = useState();

    const { id } = useParams();
    const allDonates = useLoaderData();


    useEffect(()=>{

        const findDetails = allDonates.find(donate => donate.id == id);
        setDetials(findDetails);

    },[allDonates , id])

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-20">

           <DetailsCard details={details}></DetailsCard>

        </div>
    );
};

export default SeeDetails;