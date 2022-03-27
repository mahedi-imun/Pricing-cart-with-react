import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const NavBar = () => {
    const [open,setOpen]=useState(false)
    const navItems = [
        { name: 'Home', id: 1, link: '/Home' },
        { name: 'Shop', id: 2, link: '/Shop' },
        { name: 'Order', id: 3, link: '/Order' },
        { name: 'Login', id: 4, link: '/Login' },
    ]
    return (
        <nav className=' bg-indigo-700 md:h-14 text-white'>
            <div onClick={()=>setOpen(!open)} className='h-9 w-9 md:hidden'>
                { open ?<XIcon></XIcon> :<MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-indigo-700 w-full duration-700 ${open ?'top-8':'top-[-120px]'}`}> 
                {
                    navItems.map(item => <Link
                        key={item.id}
                        item={item}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;