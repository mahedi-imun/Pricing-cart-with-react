import React from 'react';
function isAdmin( user) {
    return (  user ? 'Admin' : 'Normal User');
   }
   console.log(isAdmin(true));
const Link = ({item}) => {
    const { name, link}=item;
    return (
         <li className='mr-16 '>
             <a href={link}>{name}</a>
         </li>
    );
};

export default Link;