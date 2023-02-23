import React from 'react';
import { useLoaderData } from 'react-router';
import Travel from '../Travel/Travel';
import './Home.css'

const Home = () => {
    const travels = useLoaderData();

    return (
        <div className='main-cart container' >
            {
                travels.map(travel => <Travel
                    key={travel.id}
                    travel={travel}
                ></Travel>)
            }
        </div>
    );
};

export default Home;