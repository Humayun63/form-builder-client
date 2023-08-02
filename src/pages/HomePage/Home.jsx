import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
            <h1 className='text-blue-600 text-4xl md:text-6xl text-center'>Welcome to <span>Form builder</span></h1>
            <p className='text-xl text-center md:text-2xl my-4'>Create your own form like a pro!</p>
            <button className='px-4 border py-2 text-2xl rounded-md bg-blue-400 text-white hover:text-blue-400 hover:bg-white border-blue-400'>
                <Link to='/build-form'>Create Form</Link>
            </button>
        </div>
    );
};

export default Home;