import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${import.meta.env.VITE_API_URL}/books`)
            .then((response) => {
                const data = response.data?.data ?? response.data;
                setBooks(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setBooks([]);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' 
                    onClick={() => setShowType('table')}>
                    Table
                </button>
                <button 
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className="text-sky-800 text-4xl" />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BooksTable books={books} />
            ) : (
                <BooksCard books={books} />
            )}
            <div className="mt-16 mb-8 bg-sky-50 border border-sky-200 p-6 rounded-xl text-center shadow-sm max-w-3xl mx-auto">
                <h2 className="text-xl font-bold text-sky-800 mb-2">Built for Hack Club Horizons(Arcana)</h2>
                <p className="text-gray-700 mb-4">
                    <strong>For the non-coders:</strong> This is a custom-built, full-stack digital Book Store Vault. It was engineered from scratch using the MERN stack. A React frontend communicates with a live Node/Express server, which reads and writes directly to an online MongoDB cloud database in real-time.
                </p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Designed by Abhinav
                </p>
            </div>
        </div>

    );
};

export default Home;