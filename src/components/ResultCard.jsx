import React from 'react';

const ResultCard = ({item}) => {
     return (
          <div className='bg-white text-black w-80 h-80 rounded-xl'>
               <h1>{item.title}</h1>
          </div>
     );
};

export default ResultCard;