import PropTypes from 'prop-types';
import SingleCard from '../SingleCard/SingleCard';
import { useEffect, useState } from 'react';

const AllCard = ({showCards , inputValue , isTrueBtn}) => {

    const lowerInputValue = inputValue.toLowerCase();

    const [searchData , setSearchData] = useState([]);

    useEffect(()=> {

        const filterSearchItems = showCards.filter( showOne => showOne.category.toLowerCase().includes(lowerInputValue));
        setSearchData(filterSearchItems);

    } , [lowerInputValue, showCards])

    
    return (
        <div className='max-w-screen-xl mx-auto px-4 md:px-8 mb-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10'>
                {
                    isTrueBtn ? searchData.map(singleCard => <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>) 
                    : 
                    showCards.map(singleCard => <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>) 
                }
            </div>
        </div>
    );
};

AllCard.propTypes = {
    showCards: PropTypes.array.isRequired,
    inputValue: PropTypes.string,
    isTrueBtn: PropTypes.bool
}

export default AllCard;