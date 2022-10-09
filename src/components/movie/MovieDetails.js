import React from 'react';
import { useParams } from 'react-router-dom';
import useRefetch from '../../hooks/useRefetch';
import Loading from '../preBuild/Loading';
import { FaStar } from 'react-icons/fa';

const MovieDetails = () => {
    const {id} = useParams();

    const [data,loading] = useRefetch(`https://movie-task.vercel.app/api/movie?movieId=${id}`,{});
    
    return (
        <div className='bg-no-repeat bg-cover bg-center'
        style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${data?.data?.backdrop_path})`,
            
        }}>
            {loading && <Loading/>}
            <div className='bg-black/80 min-h-[calc(100vh-3.5rem)] flex justify-center items-center py-14 px-3 gap-x-20 gap-y-10 flex-wrap backdrop-blur-[4px]'>

                <img
                src={`https://image.tmdb.org/t/p/original/${data?.data?.poster_path}`}
                alt={data?.data?.title}
                className='max-w-[15rem] w-full h-96 object-cover rounded-md'/>
                
                <article className='basis-[35rem] shrink grow-0 text-gray-300 space-y-5'>
                    <h2 className='font-extrabold text-3xl'>{data?.data?.title}</h2>

                    <p className='text-lg text-justify'>{data?.data?.overview}</p>
                    
                    <div>
                        <section className='flex items-center gap-2 text-yellow-400'>
                            <span className='text-gray-300'>Ratings :</span>
                            <FaStar className='w-4 h-4' />
                            <p className='font-bold'>{data?.data?.vote_average?.toFixed(1)}</p>
                            <small className='self-end font-bold'>({data?.data?.vote_count})</small>
                        </section>
                        <section className='flex items-center gap-2 '>
                            <span className='text-gray-300'>Genre :</span>
                            <small className='space-x-2 text-sky-500 font-bold'>
                                {
                                    data?.data?.genres?.map((g, i) =>
                                        <span key={g?.id}>{g?.name}{i !== data?.data?.genres?.length - 1 && ','}</span>)
                                }
                            </small>
                        </section>
                        <section className='flex items-center gap-2 '>
                            <span className='text-gray-300'>Release Date :</span>
                            <span className='space-x-2 font-bold italic'>
                                {data?.data?.release_date}
                            </span>
                        </section>
                        <section className='flex items-center gap-2 '>
                            <span className='text-gray-300'>Country :</span>
                            <span className='space-x-2 font-bold italic'>
                                {
                                    data?.data?.production_countries?.map((c, i) =>
                                        <span key={i}>{c?.name}{i !== data?.data?.production_countries?.length - 1 && ','}</span>)
                                }
                            </span>
                        </section>
                    </div>
                </article>

            </div>
        </div>
    );
};

export default MovieDetails;