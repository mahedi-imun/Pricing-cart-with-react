import React from 'react';

const Link = ({item}) => {
    const { name, link}=item;
    return (
         <li className='mr-16 '>
             <a href={link}>{name}</a>
         </li>
    );
};

export default Link;