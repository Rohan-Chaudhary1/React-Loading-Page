import React from 'react'

const Loading = () => {
  return (
    <main className='w-[1100px] mx-auto md:flex justify-between mt-5'>
        <header>
        <section className='flex items-center gap-[150px] mb-5 '>
          <div>
            <div className='w-[200px] h-[30px] bg-gray-200 mb-7'></div>
            <div className='w-[200px] h-[30px] bg-gray-200 mb-3'></div>
            <div className='w-[100px] h-[30px] bg-gray-200'></div>
          </div>
          <div className='w-[100px] h-[100px] rounded-full bg-gray-300'></div>
        </section>

        <div className='w-[500px] h-[40px] bg-gray-200 mb-3'></div>
        <div className='w-[500px] h-[40px] bg-gray-200 '></div>
        </header>

        <div className='w-[500px] h-[300px] bg-gray-200 rounded-md'></div>

    </main>
  )
}

export default Loading;