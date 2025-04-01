import React from 'react'
import Searchcard from './Searchcard.jsx'
import Searchdata from './Searchdata.jsx'
import Itemdata from './Itemdata.jsx'
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

const Maincard = () => {
 const scrollRef = React.useRef(null);
  
 const scrollLeft = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
      
    });
  }
};

const scrollRight = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
};
  return (
    <div className='w-full h-screen p-20 flex flex-col mt-12 items-center'>
      <div>
      <div className='flex justify-between items-center'>
      <h1 className="text-4xl font-bold mb-4 ">Based On your Search</h1>
      <div className='flex gap-8 text-3xl '>
      <button onClick={scrollLeft}><TbPlayerTrackPrevFilled className='bg-zinc-200 p-2 rounded-full' /></button>
      <button onClick={scrollRight}><TbPlayerTrackNextFilled className='bg-zinc-200 p-2 rounded-full'/> </button>
      </div>
      </div>
      <div
  ref={scrollRef}
  className="flex gap-4 overflow-x-auto scroll-smooth flex-nowrap no-scrollbar"
          // style={{ maxWidth: '1260px' }} 
>
  <Searchdata />
</div>


      </div>
      <div className='mt-12'>
      <div className='flex justify-between items-center'>
      <h1 className="text-4xl font-bold mb-4 ">Featured Items</h1>
      <div className='flex gap-8 text-3xl '>
      <button><TbPlayerTrackPrevFilled className='bg-zinc-200 p-2 rounded-full' /></button>
      <button><TbPlayerTrackNextFilled className='bg-zinc-200 p-2 rounded-full'/> </button>
      </div>
      </div>
      <Itemdata/>
      </div>
      
      </div>
  )
}

export default Maincard