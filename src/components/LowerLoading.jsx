import React from 'react'

const LowerLoading = () => {
    const array=[1,2,3]
  return (
    <main className='w-[1100px] mx-auto md:flex justify-between '>

       <footer className=''>
        <div className='w-[150px] h-[15px] bg-gray-300'></div>
            <div className='w-[400px] h-[30px] bg-gray-300 my-3'></div>
            <section className='flex gap-5'>
                <div className='w-[100px] h-[20px] bg-gray-300'></div>
                <div className='w-[100px] h-[20px] bg-gray-300'></div>
            </section>
            <div className='w-[500px] h-[15px] bg-gray-300 my-3'></div>
            <div className='w-[500px] h-[15px] bg-gray-300 my-3'></div>
       </footer>

       <footer className='flex gap-10'>
            <div className='w-[50px] h-[50px] bg-gray-300 my-5 rounded-md'></div>
            <section >
                {array.map(index=>(
                    <div className='w-[400px] h-[40px] bg-gray-300 mb-3'></div>
                ))}
            </section>
       </footer>

    </main>
  )
}

export default LowerLoading;