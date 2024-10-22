import React from 'react'
import List from '../../public/List.json';
import Cards from '../components/Cards';

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto'>
           <div className='mt-28 items-center justify-center text-center'>
             <h1 className='text-2xl font-semibold  md:text-4xl'>Let's get started on your reading <span className='text-purple-600'>journey.</span></h1>
             <p className='mt-12'>
             Ready to embark on a literary adventure? Explore our vast collection of books and discover your next favorite read. Let's begin this exciting journey together!
             </p>
             <button className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mt-6">Back</button>
           </div>
           <div>
            {
                List.map((item) =>(
                    <Cards key={item.id} item={item}/> 
                ))
            }
           </div>
    </div>
    </>
  )
}

export default Course