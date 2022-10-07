import React from 'react';
import { useState } from 'react';
import useRefetch from '../../hooks/useRefetch';
import Loading from '../preBuild/Loading';
import Card from './Card';
import Pagination from './Pagination';

const Home = () => {
    const [page,setPage] = useState(1);

    const [data,loading] = useRefetch(`https://movie-task.vercel.app/api/popular?page=${page}`,[]);
    // console.log(data?.data?.results);

    return (
        <div className='min-h-screen p-10'>
            { loading && <Loading/>}

            <section className='flex justify-center items-center flex-wrap mb-10 gap-5 max-w-[65rem] mx-auto'>
                {
                    data?.data?.results?.map((movie)=>
                    <Card key={movie.id} movie={movie}/>)
                }
            </section>

            <section className='flex justify-center items-center'>
                <Pagination page={page} setPage={setPage} />
            </section>

        </div>
    );
};

export default Home;