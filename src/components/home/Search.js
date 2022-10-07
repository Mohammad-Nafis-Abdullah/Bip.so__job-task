import axios from 'axios';
import React, { useState } from 'react';

const Search = ({setMovies,allMovies}) => {

    const [text,setText] = useState('');

    const search = ()=> {
        text?
        axios.get(`https://movie-task.vercel.app/api/search?page=1&query=${text}`).then(({data})=>setMovies(data?.data?.results)):
        setMovies(allMovies);
        setText('');
    }

    return (
        <div className="form-control mb-3">
            <div className="input-group justify-center">
                <input
                type="text"
                placeholder="Search…"
                onKeyUp={(e)=> e.key==='Enter' && search()}
                onChange={(e)=>setText(e.target.value)}
                value={text}
                className="input-sm input-bordered placeholder:text-dark/70 font-bold text-lg min-w-0" />

                <button onClick={search} className="btn btn-sm btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

            </div>
        </div>
    );
};

export default Search;