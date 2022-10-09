/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { IoMdRefresh } from 'react-icons/io';


const RatingFilter = ({setMovies,allMovies=[]}) => {
    const [rating,setRating] = useState(0);

    const handleRating = (e)=> {
        setRating(parseInt(e.target.value));
    }

    useEffect(()=> {
        if(rating){
            setMovies([...allMovies]?.filter(m=> parseInt(m?.vote_average)===rating));
        }
        else{
            setRating(0);
            setMovies([...allMovies]?.filter(m=> true));
        }
    },[rating])

    return (
        <section className='flex items-center mt-3 gap-3 flex-wrap'>
            <h4 className='text-lg font-bold text-slate-300'>Find by Ratings :</h4>
            <div className='inline-flex items-center gap-2'>
                <div className="rating rating-half">
                    <input onChange={handleRating} type="radio" value={0} name="rating" className="hidden" checked={rating === 0} />
                    <input onChange={handleRating} type="radio" value={1} name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked={rating === 1} />
                    <input onChange={handleRating} type="radio" value={2} name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" checked={rating === 2} />
                    <input onChange={handleRating} type="radio" value={3} name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked={rating === 3} />
                    <input onChange={handleRating} type="radio" value={4} name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" checked={rating === 4} />
                    <input onChange={handleRating} type="radio" value={5} name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked={rating === 5} />
                    <input onChange={handleRating} type="radio" value={6} name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" checked={rating === 6} />
                    <input onChange={handleRating} type="radio" value={7} name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked={rating === 7} />
                    <input onChange={handleRating} type="radio" value={8} name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" checked={rating === 8} />
                    <input onChange={handleRating} type="radio" value={9} name="rating" className="bg-green-500 mask mask-star-2 mask-half-1" checked={rating === 9} />
                    <input onChange={handleRating} type="radio" value={10} name="rating" className="bg-green-500 mask mask-star-2 mask-half-2" checked={rating === 10} />
                </div>
                <p className='ml-2 font-bold text-green-500 text-lg select-none'>({rating})</p>
                <IoMdRefresh onClick={()=>setRating(0)} className='text-dark font-bold w-8 h-8 p-1 rounded-full cursor-pointer active:scale-95 transition-transform bg-green-500'/>
            </div>
        </section>
    );
};

export default RatingFilter;