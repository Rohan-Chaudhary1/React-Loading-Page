import React from 'react'

const MiddleLoading = () => {
    const array=[1,2,3,4,5,6,7,8,9,10]
  return (
    <main className='w-[1100px] mx-auto'>
        <header className=' h-[5px] bg-gray-200 mt-10 '></header>
        <div className='flex justify-evenly'>
        {
            array.map(index=>(
                <div className='w-[50px] h-[50px] bg-gray-200 my-5 rounded-md'></div>
            ))
        }
        </div>
        <header className=' h-[5px] bg-gray-200  mb-5'></header>
    </main>
  )
}

export default MiddleLoading