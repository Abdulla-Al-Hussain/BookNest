import React from 'react'
import banner from "../../public/Banner.png"

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-44'>
      <div className='space-y-10'>
      <h1 className='text-4xl font-bold'>Welcome to BookNest, your cozy corner for discovering {""} <span className='text-pink-700'>the perfect book!</span></h1>
       <p className='text-xl '>
       Welcome to BookNest, your go-to online bookshop for all things reading. Explore a wide selection of books, from classics to new releases, and find your next favorite read. Dive into our nest of stories today!
       </p>
       {/* Email input */}
       <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
      </div>
      {/* Submit button */}
      <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mt-6">Secondary</button>
      </div>  
      <div className='order-1 w-full md:w-1/2 mt-12 md:mt-36'>
     <img src={banner} alt=""  className='w-92 h-92' />
      </div>
      </div>
    </>
  )
}

export default Banner