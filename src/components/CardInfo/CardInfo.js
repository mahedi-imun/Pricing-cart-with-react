import React from 'react';
import Benefit from './Benefit/Benefit';

const CardInfo = ({cardData}) => {
    const  {name,price,benefits}=cardData;
    return (
        <div className=' bg-gray-300 rounded'>
            <h2 className=' text-lg font-bold text-purple-700 mt-5'>{name}</h2>
            <span><span className='text-4xl'>$</span><span className=' text-6xl'>{price}</span><span className=' text-4xl'>/mo</span></span>
            {
                benefits.map(benefit => <Benefit
                key={cardData.id}
                benefit={benefit}
                ></Benefit>)
            }
            <button className=' px-10 border-2 bg-purple-800 rounded-lg mb-10 text-white p-2 font-bold'>perches</button>
        </div>
    );
};

export default CardInfo;