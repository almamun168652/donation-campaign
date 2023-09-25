import { useEffect, useState } from "react";
import AllDonation from "../../Components/AllDonation";



const Donation = () => {

    const [donates, setDonates] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        const donationsItem = JSON.parse(localStorage.getItem('donations'));

        if (donationsItem) {
            setDonates(donationsItem);
        } else {
            setNoFound(['No Data Found']);
        }

    }, [])

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            {
                noFound ? <p className="mt-36 text-2xl font-bold flex items-center justify-center">{noFound}</p> : <div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {
                                isShow ? donates.map(donateItem => <AllDonation key={donateItem.id} donateItem={donateItem}></AllDonation>)
                                    :
                                    donates.slice(0, 4).map(donateItem => <AllDonation key={donateItem.id} donateItem={donateItem}></AllDonation>)
                            }
                        </div>
                        <div className="text-center my-10">
                            {
                                donates.length > 4 && <button className={isShow ? 'hidden' : 'visible bg-[#009444] text-white font-semibold rounded-lg px-5 py-2'} onClick={() => setIsShow(true)}>See All</button>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;