import React from 'react'
import { Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ProductsButton() {

    const navigate = useNavigate();

    const handleClick = () => (
        navigate("/shop")
    )

    return (
        <button 
            onClick={handleClick}
            className="py-3 px-20 mt-10 text-yellow-400 border-yellow-400 border-2 font-['Poppins'] font-semibold text-base cursor-pointer hover:bg-amber-300 hover:text-white transition-all duration-300"
        >
            Show more
        </button>
    );

}