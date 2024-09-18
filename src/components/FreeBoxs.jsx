import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/List.json"
import Cards from './Cards';

function FreeBoxs()  {
    const filterData = list.filter((data)=> data.category === "Free");
    // Carousel import 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
         <div>
         <h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1>
          <p>Free books open the door to endless knowledge and adventure, making learning accessible to everyone regardless of their background or financial situation. They empower readers to explore new worlds, gain fresh perspectives, and unlock their full potential at no cost.</p>

         </div>
      <div>
        {/* Calling Cards */}
      <Slider {...settings}>
       {filterData.map((item)=>(<Cards item={item} key={item.id}/>
      ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default FreeBoxs;