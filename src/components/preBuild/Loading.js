import React from 'react';

const Loading = () => {
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center backdrop-blur-lg bg-dark/50 z-[99999]'>
            <div className='h-16 w-16 border-8 border-white rounded-full border-l-0 border-r-0 animate-spin'></div>
        </div>
    );
};

export default Loading;