import React from 'react'

export  function SkeletonRoomShowcaseBlock({ className}) {
    return (
        <div className={`bg-gray-200/60 animate-pulse rounded ${className}`}></div>
    )
}
