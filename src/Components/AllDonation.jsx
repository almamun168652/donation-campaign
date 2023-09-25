import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllDonation = ({ donateItem }) => {

    const { id, style, title, category, thumbnail, price } = donateItem || {}

    return (
        <div>
            <div style={{ backgroundColor: style.card_bg }} className='flex'>
                <div>
                    <img className='w-48' src={thumbnail} alt="" />
                </div>
                <div className='p-5'>
                    <div className=''>
                        <span style={{ backgroundColor: style.btn_bg, color: style.t_b_color }} className='py-1 px-2 font-semibold rounded text-sm'>{category}</span>
                        <h1 className='font-bold text-xl mt-1 text-[#0B0B0B]'>{title}</h1>
                        <p style={{ color: style.t_b_color }} className='font-bold my-2'>${price}</p>
                        <Link to={`/details/${id}`}>
                            <button className='py-1 rounded px-3 font-semibold text-white mt-1' style={{ backgroundColor: style?.t_b_color }}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllDonation.propTypes = {
    donateItem: PropTypes.object.isRequired
}


export default AllDonation;