import React from 'react'
import Button from './Button'
const Itemcard = ({image, foodname, price}) => {
  return (
    <>
    <div className='shadow-lg p-6 rounded-xl '>
      <div className='relative'>
      <img src={image} alt="" className='rounded-2xl'/>
      <Button productName={foodname}/>
      </div>
      <div className='pt-4'>
        <h3 className='text-xl font-bold'>{foodname}</h3>
        <p>{price}</p>
      </div>
      </div>
    </>
  )
}

export default Itemcard