import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <section className='sticky top-0 right-0 shadow-lg z-[99]'>
            <div className='container h-14 flex justify-center sm:justify-start items-center px-5 sm:pl-16 bg-dark'>
                <h1 onClick={()=>navigate('/')} className='text-red-500 font-extrabold text-3xl namingFont cursor-pointer'>Movies</h1>
            </div>
        </section>
    );
};

export default Header;