import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Map from '../Map/Map';

const Book = () => {
    const booking = useLoaderData();
    const { name, img, details } = booking;
    return (
        <div className='row container'>
            <div className="col-6">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details}</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <Map></Map>
            </div>
        </div>
    );
};

export default Book;