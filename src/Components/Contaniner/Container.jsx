import React from 'react';

const Container = ({children,className}) => {
    return (
        <div className={`${className} max-w-11/12 mx-auto`}>
            {children}
            
        </div>
    );
};

export default Container;