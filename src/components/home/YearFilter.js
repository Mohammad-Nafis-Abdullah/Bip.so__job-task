import React from 'react';

const YearFilter = ({years,setMovies,allMovies=[]}) => {

    const getYear = (year)=> {
        return parseInt(year?.split('-')?.[0]);
    }

    const yearFiltering = (e)=> {
        const year = parseInt(e.target.value);
        if (parseInt(e.target.value)) {
            setMovies([...allMovies]?.filter(m => getYear(m?.release_date)===year))
        } else {
            setMovies([...allMovies]);
        }
    }

    return (
        <div className='inline-flex gap-2 flex-wrap'>
            <h4 className='text-lg font-bold text-slate-300'>Released Year :</h4>
            <select onChange={yearFiltering} name="" id="" className='w-20 h-8 rounded px-2'>
            <option value={0}>--</option>
            {years?.map(y =>
                <option key={y} value={y}>
                    {y}
                </option>)}
            </select>
        </div>
    );
};

export default YearFilter;