import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({title ,className,to}) => {
    return (
        <>
        <NavLink to={to} className={`${className}  font-semibold  px-5 py-2  rounded-full`}>{title}</NavLink>
        </>
    );
};

export default MyLink;