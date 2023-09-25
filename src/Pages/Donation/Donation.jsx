import { useEffect, useState } from "react";
import AllDonation from "../../Components/AllDonation";



const Donation = () => {

    const [donates , setDonates] = useState([]);
    const [noFound , setNoFound] = useState('');

    useEffect(()=>{

        const donationsItem = JSON.parse(localStorage.getItem('donations'));

        if(donationsItem){
            setDonates(donationsItem);
        }else{
            setNoFound(['No Data Found']);
        }

    },[])

    return (
        <div>
            {
                noFound ? <p className="mt-36 text-2xl font-bold flex items-center justify-center">{noFound}</p> : <div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {
                                donates.map(donateItem => <AllDonation key={donateItem.id} donateItem={donateItem}></AllDonation>)
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;