import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllDonation = ({ donateItem }) => {

    const { id, style, title, category, thumbnail, price } = donateItem || {}

    return (
        <div>
            <div style={{ backgroundColor: style.card_bg }} className='rounded-xl flex flex-col md:flex-row'>
                <img className='rounded-xl' src={thumbnail} alt="" />
                <div className='p-5 flex items-center'>
                    <div className='space-y-3'>
                        <span style={{ backgroundColor: style.btn_bg, color: style.t_b_color }} className='py-1 px-2 font-semibold rounded text-sm'>{category}</span>
                        <h1 className='font-bold text-xl mt-1 text-[#0B0B0B]'>{title}</h1>
                        <p style={{ color: style.t_b_color }} className='font-bold my-2'>${price}</p>
                        <div>
                            <Link to={`/details/${id}`}>
                                <button className='py-1 rounded px-3 font-semibold text-white mt-1' style={{ backgroundColor: style?.t_b_color }}>View Details</button>
                            </Link>
                        </div>
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