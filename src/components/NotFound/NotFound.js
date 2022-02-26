import React from 'react';
import img from '../../Image/404.jpg'
const NotFound = () => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <img className="img-fluid w-100  rounded " src={img} alt="" />
        </div>
    );
};

export default NotFound;