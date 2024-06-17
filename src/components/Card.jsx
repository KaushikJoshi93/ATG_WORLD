import React from 'react'

const Card = ({ cardImg, avatarImg, avatarName,cardType }) => {
    // alert(cardImg)
    return (
        <div className='w-[90%]  border-2 mt-4 ml-4'>
            {/* card image */}
            <div className={`w-full overflow-hidden `}>
                <img src={cardImg} alt="cardimg" className='w-full' />
            </div>
            {/* card content */}
            <div className='flex flex-col gap- p-4'>
                {/* card type */}
                <p className='font-medium italic flex gap-2 text-xs md:text-base'>
                    <i className="bi bi-pen-fill text-orange-400"></i>
                    {cardType}
                </p>
                {/* card title */}
                <div className='flex justify-between'>
                    <p className='font-bold text-sm md:text-base'>
                        What if famous brands had regular fonts? Meet RegulaBrands!What if famous brands had regular fonts? Meet RegulaBrands!
                    </p>
                    <div className='cursor-pointer'>
                        <i className="bi bi-three-dots"></i>
                    </div>
                </div>
                {/* card description */}
                <p className='text-gray-400 text-xs md:text-sm'>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                </p>
            </div>
            {/* card footer */}
            <div className='flex justify-between items-center pl-4 pr-4'>
                {/* card avatar */}
                <div className='flex gap-2 items-center'>
                    {/* img */}
                    <img src={avatarImg} alt="avatarimg" className='rounded-full w-10 h-8' />
                    {/* name */}
                    <p className='font-medium text-xs md:text-sm'>{avatarName}</p>
                </div>
                {/* card metrics */}
                <div className='flex gap-4 items-center'>
                    {/* card views */}
                    <div className='flex gap-1'>
                        <i className="bi bi-eye text-xs md:text-sm"></i>
                        <p className='text-xs md:text-sm text-gray-500'>1.4k views</p>
                    </div>
                    {/* card share button */}
                    <div className='bg-gray-200 pl-2 pr-2 md:p-2 m-2'>
                        <i className="bi bi-share text-xs md:text-sm"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card