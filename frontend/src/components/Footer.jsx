import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr] gap-44 my-10 mt-40 text-sm'>
            {/* ----- Left Section ----- */}
            <div>
            <img className='w-40 mb-5' src={assets.logo} alt="" />
            <p className='w-full text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* ----- Right Section ----- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div>
            {/* ------ Copyright Text ------ */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Appointment Aid- All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer