/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useRefetch from '../../hooks/useRefetch';
import Loading from '../preBuild/Loading';
import Card from './Card';
import Pagination from './Pagination';
import RatingFilter from './RatingFilter';
import Search from './Search';
import YearFilter from './YearFilter';

const Home = () => {
    const [page,setPage] = useState(1);
    const [movies,setMovies] = useState([]);
    const [years,setYears] = useState([]);

    const getYear = (year)=> {
        return parseInt(year?.split('-')?.[0]);
    }

    const [data,loading] = useRefetch(`https://movie-task.vercel.app/api/popular?page=${page}`,{},(data)=> {
        setMovies(data?.data?.results);
        const years = new Set();
        data?.data?.results?.forEach((m)=>{
            years.add(getYear(m?.release_date));
        });
        setYears([...years]);
    });

    return (
        <div className='min-h-screen py-10 px-2'>
            { loading && <Loading/>}
            
            <section className='max-w-[65rem] mx-auto mb-8'>

                <Search setMovies={setMovies} allMovies={data?.data?.results}/>

                <YearFilter years={years} setMovies={setMovies} allMovies={data?.data?.results}/>

                <RatingFilter setMovies={setMovies} allMovies={data?.data?.results}/>

            </section>

            <section className='flex justify-center items-center flex-wrap mb-10 gap-5 max-w-[65rem] mx-auto'>
                {
                    movies.map((movie)=><Card key={movie.id} movie={movie}/>)
                }
            </section>

            <section className='flex justify-center items-center'>
                <Pagination page={page} setPage={setPage} />
            </section>

        </div>
    );
};

export default Home;