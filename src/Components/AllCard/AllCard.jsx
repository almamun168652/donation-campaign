import PropTypes from 'prop-types';
import SingleCard from '../SingleCard/SingleCard';

const AllCard = ({showCards}) => {

    
    return (
        <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                {
                    showCards.map(singleCard => <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>)
                }
            </div>
        </div>
    );
};

AllCard.propTypes = {
    showCards: PropTypes.array.isRequired
}

export default AllCard;