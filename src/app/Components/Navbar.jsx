import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-slate-800 justify-around py-4'>
        <div className="text-white text-3xl">OnCode</div>
        <div className="flex text-white justify-around gap-16 py-2">
            <h1 className='hover:text-green-400 transition duration-150 ease-out'>Case Study</h1>
            <h1 className='hover:text-green-400 transition duration-150 ease-out'>Pricing</h1>
            <h1 className='hover:text-green-400 transition duration-150 ease-out'>Blog</h1>
            <h1 className='hover:text-green-400 transition duration-150 ease-out'>About Us</h1>
        </div>
        <div className="">
            <button className='border-solid border-2 border-green-400 text-green-400 p-2 rounded-lg'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar