import React from 'react'

export function CheckoutOrderBilling() {
    return (
        <div className=' flex flex-col px-20 py-8 gap-8 w-full'>

            <h2 className='font-["Poppins"] font-semibold text-4xl mb-8'>Billing Details</h2>
            
            <div className='flex gap-10 w-full'>

                <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="" className='font-["Poppins"] font-medium' >First Name</label>
                    <input className='border py-4 rounded w-full px-4' type="text" required />
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="" className='font-["Poppins"] font-medium'>Last Name</label>
                    <input type="text" className='border py-4 rounded w-full px-4 ' required />
                </div>

            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-["Poppins"] font-medium' >Street address</label>
                <input className='border py-4 rounded w-full px-4' type="text" required />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-["Poppins"] font-medium'>Town / City</label>
                <input type="text" className='border py-4 rounded w-full px-4' required />
            </div >

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-["Poppins"] font-medium'>Province</label>
                <select name="" id="" className='border py-4 rounded w-full px-4'>
                    <option value="">Lima</option>
                    <option value="">Callao</option>
                </select>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-["Poppins"] font-medium'>Phone</label>
                <input type="text" className='border py-4 rounded w-full px-4' required />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-["Poppins"] font-medium'>Email Address</label>
                <input type="email" className='border py-4 rounded w-full px-4' required/>
            </div>

            <textarea name="" id="" className='border py-4 rounded w-full px-4 resize-none mt-4' placeholder='Additional information' >
            </textarea>

        </div>
    )
}
