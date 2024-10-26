import React from 'react'

const Contactform = () => {
  return (
    <div className='w-full flex justify-center py-4 bg-slate-800'>
        <div className='p-16 w-1/2 border-solid border-black border-2 rounded-3xl bg-white'>
            <div className='text-4xl'>Contact Form</div>
            <div className='text-gray-400'>Please Fill This Form</div>
            <hr />
            <div className='text-2xl'>Full Name</div>
            <div className='flex gap-4 py-6'>
              <div>
                <input type="text" name="" id="" placeholder='John' className='border-solid border-black border-2 p-1 rounded-2xl'/>
                <div className='text-gray-400'>First Name</div>
              </div>
              <div>
                <input type="text" name="" id="" placeholder='Doe' className='border-solid border-black border-2 p-1 rounded-2xl' />
                <div className='text-gray-400'>Last Name</div>
              </div>
            </div>
            <div className='text-2xl'>E-mail</div>
            <input type="email" name="" id="" placeholder='example@gmail.com' className='border-solid border-black border-2 p-1 rounded-2xl w-full py-6'/>
            <div className='text-2xl py-6'>Message</div>
            <textarea name="" id="" className='border-solid border-black border-2 p-1 rounded-2xl w-full h-56'></textarea>
            <div className='flex justify-center'>
              <button className='bg-slate-800 text-white h-8 w-32 text-center rounded-xl'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contactform