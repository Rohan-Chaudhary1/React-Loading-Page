import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        <form className='bg-[#F8F8F8] w-[450px] mx-auto flex flex-col  items-center p-4'>
            <input type="text" name="name"  placeholder='Your Name' className='w-[400px] h-[50px] border border-[#6A6A6ABF] bg-[#F8F8F8] outline-none rounded-md pl-4'/><br />
            <input type="email" name="email"  placeholder='Your Email' className='w-[400px] h-[50px] border border-[#6A6A6ABF] bg-[#F8F8F8] outline-none rounded-md pl-4'/><br />
            <input type="number" name="phone"  placeholder='Your Phone' className='w-[400px] h-[50px] border border-[#6A6A6ABF] bg-[#F8F8F8] outline-none rounded-md pl-4'/><br />
            <textarea name="Your Message" cols="30" rows="10" placeholder='Your Message' className='w-[400px]  border border-[#6A6A6ABF] bg-[#F8F8F8] outline-none rounded-md pl-4 pt-4'></textarea><br />
            <button type="submit" className='w-[400px] h-[40px] bg-[red] rounded-md font-[600] text-xl text-white'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact