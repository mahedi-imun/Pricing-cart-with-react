import React from 'react';
import CardInfo from '../CardInfo/CardInfo';

const PricingCard = () => {

    const cardsData = [
        {
            id: 1, name: 'Freelance',
            price: 5, benefits: [
                'support :no',
                'email 1', " user:1"
            ]
        },
        {
            id: 2, name: 'Business',
            price: 30, benefits: [
                'support unlimited',
                'email 10', " user:6"
            ]
        },
        {
            id: 3, name: 'Enterpraonior',
            price: 50, benefits: [
                'support unlimited',
                'email 15', " user:166"
            ]
        },
    ]
    return (
        <div className=' w-9/12  mx-auto '>
            <h2 className=' text-4xl mb-3 mt-10'> pricing plans</h2>
            <h4 className='text-2xl'>First 30 days absolutely free for any plan,no credit card required to get started </h4>
            <div className=' grid md:grid-cols-3 mt-10 gap-3'>
                {
                    cardsData.map(cardData => <CardInfo
                        key={cardData.id}
                        cardData={cardData}
                    ></CardInfo>)
                }
            </div>
        </div>
    );
};

export default PricingCard;