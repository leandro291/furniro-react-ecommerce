export function OutlineButton({ children, className = '', ...props }) {
    return (
        <button
            className={`border border-black text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
