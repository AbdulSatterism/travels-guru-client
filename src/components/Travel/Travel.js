import React from 'react';
import { Link } from 'react-router-dom';
import './Travel.css'

const Travel = ({ travel }) => {
    const { id, name, img } = travel;
    return (
        <div className='cart'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <Link to={`/travels/${id}`}><button>{name}</button></Link>
            </div>
        </div>
    );
};

export default Travel;