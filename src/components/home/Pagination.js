import React, { useEffect } from 'react';
import { FaAngleDoubleLeft,FaAngleDoubleRight } from 'react-icons/fa';


const Pagination = ({page,setPage}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const pages = [];
    for (let i = 2; i < 500; i++) {
        pages.push(i);
    };

    const startIndex = (p)=> {
        if (p<=3) {
            return 0;
        }
        else if (p>3 && p<498) {
            return p-3
        }
        else if (p>=498) {
            return 495
        }
    };

    const endIndex = (p)=> {
        if (p<=3) {
            return 3;
        }
        else if (p>3 && p<498) {
            return p
        }
        else if (p>=498) {
            return 500
        }
    }



    return (
        <div className="btn-group">
                <button onClick={()=>setPage(1)} className="btn bg-white hover:bg-white text-dark btn-sm px-2">
                    <FaAngleDoubleLeft/>
                </button>

                <button
                onClick={()=>setPage(1)}
                className={`btn btn-sm ${1===page? 'activePage':'btnPage'}`}>
                    1
                </button>
                
                {
                    page > 3 &&
                    <button className="btn btn-sm btn-disabled text-white">...</button>
                }
                
                {
                    pages.slice(startIndex(page),endIndex(page)).map((p,i)=> 
                    <button
                    key={i}
                    onClick={()=>setPage(p)} 
                    className={`btn btn-sm ${p===page? 'activePage':'btnPage'}`}>
                        {p}
                    </button>)
                }
                
                {
                    page<498 && 
                    <button className="btn btn-sm btn-disabled text-white">...</button>
                }
                
                <button
                onClick={()=>setPage(500)}
                className={`btn btn-sm ${500===page? 'activePage':'btnPage'}`}>
                    500
                </button>
                
                <button onClick={()=>setPage(500)} className="btn bg-white hover:bg-white text-dark btn-sm px-2">
                    <FaAngleDoubleRight/>
                </button>
            </div>
    );
};

export default Pagination;