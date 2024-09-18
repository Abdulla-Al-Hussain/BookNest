import React from 'react'

function Cards({ item }) {

  return (
    <>
    {/* Creating Cards */}
    <div className='mt-8 mb-8 '>
    <div className="card bg-base-100  w-96 shadow-xl">
  <div>
    <figure >
    <img 
      src={item.image}
      alt="Shoes" className='h-72 w-auto'/>
  </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-3">${item.price}</div>
      <div className="badge badge-outline text-slate-800 hover:bg-slate-800 hover:text-white p-5 duration-300 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards