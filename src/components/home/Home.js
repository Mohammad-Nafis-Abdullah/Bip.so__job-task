import React from 'react';
import { useState } from 'react';
import Pagination from './Pagination';

const Home = () => {
    const [page,setPage] = useState(1);

    

    return (
        <div className='min-h-screen py-10'>
            

            <section className='flex justify-center items-center'>
                <Pagination page={page} setPage={setPage} />
            </section>

        </div>
    );
};

export default Home;