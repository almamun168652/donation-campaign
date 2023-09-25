import PropTypes from 'prop-types';
import swal from 'sweetalert';

const DetailsCard = ({ details }) => {

    const {id , card_img, style, price, title, description } = details || {};

    const handleAddToDonate = () => {
        const addedDonate = [];
        const donationsItem = JSON.parse(localStorage.getItem('donations'));

        if(!donationsItem){
            addedDonate.push(details);
            localStorage.setItem('donations' , JSON.stringify(addedDonate));
            swal("Done!", "Your Donation Successfully!", "success");
        }else{
            const isExists = donationsItem.find(donation => donation.id === id);
            if(!isExists){
                addedDonate.push(...donationsItem , details);
                localStorage.setItem('donations' , JSON.stringify(addedDonate));
                swal("Done!", "Your Donation Successfully!", "success");
            }else{
                swal("Sorry!", "Already Donated!", "error");
            }
        }
    }

    return (
        <div>
            <div className='w-full md:px-4 md:w-2/3 mx-auto'>
                <div className='relative'>
                    <img className='w-full h-auto' src={card_img} alt="" />
                    <div className='absolute bottom-0 w-full bg-[#0B0B0B80] py-4 md:py-8'>
                        <button onClick={handleAddToDonate} className='mx-10 py-2 rounded px-4 font-semibold text-white' style={{ backgroundColor: style?.t_b_color }}>Donate ${price}</button>
                    </div>
                </div>
                <h1 className='text-[#0B0B0B] text-3xl font-bold my-5'>{title}</h1>
                <p className='text-[#0B0B0BB3] text-sm'>{description}</p>
            </div>
        </div>
    );
};


DetailsCard.propTypes = {
    details: PropTypes.object
}

export default DetailsCard;