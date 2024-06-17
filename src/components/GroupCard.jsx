import React from 'react'

const GroupCard = ({ groupName, groupImg }) => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                    <img src={groupImg} alt="groupimg" className='w-10 h-10 rounded-full' />
               
                <p>{groupName}</p>
            </div>
            <button className='p-2 pl-4 pr-4  bg-gray-200 rounded-2xl'>Follow</button>
        </div>
    )
}

export default GroupCard