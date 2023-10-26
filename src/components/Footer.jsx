import React from 'react'
import footIMg from "../assets/Group 3598 (1).png"
import send from "../assets/Send Icon.png"

const Footer = () => {
  return (
    <footer className='bg-black text-white flex justify-around p-10 rounded-t-2xl'>
        <div>
            <h1 className='font-[800] text-xl mb-5'>Leave us your contact and we <br />will get back to you.</h1>
            <div className='relative mb-[100px]'>
                <input type="text" placeholder='Your email' className='w-[300px] h-[40px] text-black outline-none pl-4 rounded-full'/>
                <button><img src={send} alt="" className='absolute w-[40px] h-[40px] top-0 right-0'/></button>
            </div>
            <p className='text-lg'>© 2020 ZIL Enterprise Pvt Ltd. <br /> All rights reserved</p>
        </div>

        <div >
            <h1 className='text-xl font-[800] mb-5'>Get To Know Us</h1>
            <div className='text-lg'>
                <p >Contact Us</p>
                <p >About Us</p>
                <p >Terms And Conditions</p>
                <p >Privacy Policy</p>
                <p >Return And Refund Policy</p>
                <p >Payment Options</p>
                <p >Shipping Policy</p>
            </div>
        </div>

        <div>
            <h1 className='text-xl font-[800] mb-5'>Let Us Help You</h1>
            <div className='text-lg'>
                <p >Home Screen</p>
                <p >Your Acount</p>
                <p >Returns Center</p>
                <p >100% Purchase Production</p>
                <p >ZIL App Download</p>
                <p >Help</p>
            </div>
        </div>

        <div>
            <img src={footIMg} alt="" />
        </div>
    </footer>
  )
}

export default Footer;