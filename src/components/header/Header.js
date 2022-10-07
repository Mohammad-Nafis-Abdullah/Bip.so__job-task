import React from 'react';

const Header = () => {
    return (
        <section className='sticky top-0 right-0 shadow-lg'>
            <div className='container h-20 flex justify-center sm:justify-start items-center px-5 sm:pl-16'>
                <h1 className='text-red-500 font-extrabold text-3xl'>Movies</h1>
            </div>
        </section>
    );
};

export default Header;