import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({title ,className,to}) => {
    return (
        <>
        <NavLink to={to} className={`${className} px-5 py-2 bg-gray-600 rounded-full`}>{title}</NavLink>
        </>
    );
};

export default MyLink;