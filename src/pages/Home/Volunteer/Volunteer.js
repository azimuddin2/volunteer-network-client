import React from 'react';

const Volunteer = ({ volunteer }) => {
    const { image, title, bgColor } = volunteer;

    return (
        <div className='relative'>
            <img src={image} alt=""/>
            <h1 className={`${bgColor} text-center py-5 text-white font-medium absolute bottom-0 w-full rounded-b-lg`}>{title}</h1>
        </div>
    );
};

export default Volunteer;