import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({ page, setPage, totalPages }) {
    
    const handlePrev = () => {
        if (page > 1){
            setPage(page - 1);
        } 
    }

    const handleNext = () => {
        if (page < totalPages){
            setPage(page + 1);
        } 
    }

    const isFirstPage = page === 1;
    const isLastPage = page === totalPages;

    return (
        <div className="flex gap-4 justify-center items-center mt-10 mb-10 font-['Poppins']">
        
        <button
            onClick={handlePrev}
            disabled={isFirstPage}
            className={`p-4 rounded-lg transition-all ${
                isFirstPage 
                    ? "bg-yellow-700 text-gray-300 cursor-not-allowed" 
                    : "bg-yellow-700/20 text-black hover:bg-yellow-700 hover:text-white"
            }`}
        >
            <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-3">
            {[...Array(totalPages)].map((_, index) => {

            const pageNum = index + 1;
            return (
                <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`w-12 h-12 rounded-lg text-xl transition-all ${
                    page === pageNum
                    ? "bg-yellow-700 text-white"
                    : "bg-yellow-700/20 text-black hover:bg-yellow-700 hover:text-white"
                }`}
                >
                {pageNum}
                </button>
            );
            })}
        </div>

        <button
            onClick={handleNext}
            disabled={isLastPage}
            className={`p-4 rounded-lg transition-all ${
                isLastPage 
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed" 
                    : "bg-[#F9F1E7] text-black hover:bg-brand hover:text-white"
            }`}
        >
            <ChevronRight size={20} />
        </button>
        </div>
    );
}