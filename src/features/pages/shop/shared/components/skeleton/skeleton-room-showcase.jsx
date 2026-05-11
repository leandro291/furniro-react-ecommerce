import { SkeletonRoomShowcaseBlock } from "./skeleton-room-showcase-block";

export function RoomShowcaseSkeleton() {
    return (
        <div className='grid grid-cols-11 grid-rows-[repeat(10,60px)] gap-5 w-full'>
            <SkeletonRoomShowcaseBlock className='col-start-1 col-span-1 row-start-1 row-span-5' />
            <SkeletonRoomShowcaseBlock className='col-start-1 col-span-1 row-start-6 row-span-5' />
            <SkeletonRoomShowcaseBlock className='col-start-2 col-span-4 row-start-2 row-span-4' />
            <SkeletonRoomShowcaseBlock className='col-start-3 col-span-3 row-start-6 row-span-4' />
            <SkeletonRoomShowcaseBlock className='col-start-8 col-span-3 row-start-2 row-span-5' />
            <SkeletonRoomShowcaseBlock className='col-start-6 col-span-2 row-start-3 row-span-6' />
            <SkeletonRoomShowcaseBlock className='col-start-10 col-span-2 row-start-7 row-span-2' />
            <SkeletonRoomShowcaseBlock className='col-start-11 col-span-1 row-start-1 row-span-6' />
            <SkeletonRoomShowcaseBlock className='col-start-8 col-span-2 row-start-7 row-span-3' />
        </div>
    );
}