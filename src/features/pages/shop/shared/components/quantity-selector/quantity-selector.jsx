import React, { useState } from 'react'

export function QuantitySelector() {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className='flex items-center justify-between border border-gray-400 rounded-xl px-4 py-3 w-30'>
            <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-lg hover:text-gray-500 transition-colors"
            >
            -
            </button>
            <span className="text-md font-medium">{quantity}</span>
            <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-lg hover:text-gray-500 transition-colors"
            >
            +
            </button>
        </div>
    )
}
