import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({movie}) => {
    return (
        <div className='basis-40 sm:basis-44 grow-0 shrink rounded-md cursor-pointer'>

            <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" className='h-[17rem] w-full rounded' />

            <h3 className='text-white font-medium whitespace-nowrap w-40 text-ellipsis overflow-hidden'>{movie?.title}</h3>

            <small className='flex items-center gap-2 text-yellow-500 font-bold'>
                <FaStar />
                {movie?.vote_average}
            </small>

        </div>
    );
};

export default Card;