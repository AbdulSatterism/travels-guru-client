import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Explore.css'
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import { useState } from 'react';


const Explore = () => {
    const travelDate = useLoaderData();
    const { name, id, details } = travelDate;
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div className='row main container'>
            <div className="col-6">
                <p className='name'>{name}</p>
                <p className='details'>{details}</p>
            </div>
            <div className="col-6 date-cart">
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control className='field' type="text" placeholder="From" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control className='field' type="text" placeholder="To" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>End Date</Form.Label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Group>



                    <button>
                        <Link to={`/book/${id}`}> Booking</Link>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Explore;