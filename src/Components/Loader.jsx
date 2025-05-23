import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <RotatingLines
                visible={true}
                strokeColor='#1d2433'
                height="96"
                width="96"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;