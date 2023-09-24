import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCard = ({ singleCard }) => {

    const {id ,  card_img, title, category, style } = singleCard;

    return (
        <div>
            <Link to={`/details/${id}`}>
                <div style={{ backgroundColor: style.card_bg }} className='rounded-lg'>
                    <img className='h-[170px] w-full' src={card_img} alt="" />
                    <div className='p-3'>
                        <span style={{ backgroundColor: style.btn_bg, color: style.t_b_color }} className='py-1 px-2 font-semibold rounded text-sm'>{category}</span>
                        <h1 style={{ color: style.t_b_color }} className='font-semibold text-lg mt-1'>{title}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

SingleCard.propTypes = {
    singleCard: PropTypes.object.isRequired
}

export default SingleCard;