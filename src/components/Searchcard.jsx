import React from 'react'
import Button from './Button'

const Searchcard = ({foodName , foodDescription , foodImage}) => {
  return (
    <>
    <div>
     <div className='flex border p-8 justify-between gap-4 rounded-md shadow-lg items-center'>
        <div>
          <h3 className='text-xl font-bold'>{foodName}</h3>
          <p>{foodDescription}</p>
        </div>
        <div className=' relative'>
          <img src={foodImage} alt="" className='w-60 h-40 object-cover object-center rounded-md' />
          <Button productName={foodName}/>
          </div>
      </div>
    </div>
    </>
  )
}

export default Searchcard