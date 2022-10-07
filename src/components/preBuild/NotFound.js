import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error404 from '../../error.gif'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-3xl -z-10'>
            <section className='container z-[999]'>
                <img className='mx-auto' src={Error404} alt="" />
                <h3 className='text-red-600 animate-pulse text-center font-bold text-lg'>Page not Found</h3>
                <div className='flex justify-center items-center mt-3'>
                    <button onClick={()=>navigate('/')} className='btn bg-dark/90 hover:bg-dark btn-sm border-0 hover:border-0'>Back to Home</button>
                </div>
            </section>
        </div>
    );
};

export default NotFound;