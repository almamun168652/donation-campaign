import PropTypes from 'prop-types';

const SingleCard = ({singleCard}) => {

    const {card_img , title , category , style} = singleCard;

    return (
        <div>
            <div style={{backgroundColor: style.card_bg}}>
                <img src={card_img} alt="" />
                <div>
                    <h2>{category}</h2>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    singleCard: PropTypes.object.isRequired
}

export default SingleCard;