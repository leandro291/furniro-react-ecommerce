import React from 'react'

export function CartDisplayTotals({ handleNavigate, totalPrice }) {
    return (
            <div className='bg-amber-100/50 flex flex-col items-center justify-center py-6 rounded-2xl xl:py-8 gap-5 w-full b order-first xl:order-last'>
                <h2 className='font-["Poppins"] font-semibold text-4xl'>Cart Totals</h2>
                <div className='flex items-center justify-between gap-30 mt-8'>
                    <span className='font-["Poppins"] font-medium'>Subtotal</span>
                    <span className='font-["Poppins"] font-medium text-gray-500/80'>Rs {totalPrice}</span>
                </div>
                <div className='flex items-center justify-between gap-30'>
                    <span className='font-["Poppins"] font-medium'>Total</span>
                    <span className='font-["Poppins"] font-medium text-amber-500 text-xl'>Rs {totalPrice}</span>
                </div>
                <button 
                    className='border py-3 px-15 mt-2 xl:mb-15 rounded-lg cursor-pointer font-["Poppins"] font-normal text-xl'
                    onClick={handleNavigate}
                >
                    Check Out
                </button>
            </div>
    )
}
