import React from 'react'

export default function AuthLoginInputsCard({ value, setValue, type, title }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-['Poppins'] text-2xl font-extralight" htmlFor="">{title}</label>
            <input
                value={value} 
                type={type}
                className="border border-gray-300 rounded-lg px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-gray-700"
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    )
}
