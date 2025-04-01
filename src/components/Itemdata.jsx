import React from 'react'
import Itemcard from './Itemcard'

const Itemdata = () => {
  const itemData = [
    {
      image : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33",
      foodname:"Crispy Salmon Bowl",
      price : "$3.69"
    },
    {
      image : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33",
      foodname:"Crispy Salmon Bowl",
      price : "$3.69"
    },
    {
      image : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33",
      foodname:"Crispy Salmon Bowl",
      price : "$3.69"
    },
    {
      image : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33",
      foodname:"Crispy Salmon Bowl",
      price : "$3.69"
    },
    // {
    //   image : "https://images.themodernproper.com/production/posts/2018/ItalianChoppedSalad_Shot1_09.jpg?w=1200&q=82&auto=format&fit=crop&dm=1649037598&s=50ff79ca42edb6607afac89b257e1e33",
    //   foodname:"Crispy Salmon Bowl",
    //   price : "$3.69"
    // },
  ]
  return (
    <div className='flex gap-8'>
      {
        itemData.map((data,index)=>(
          <Itemcard
          key={index}
          image={data.image}
          foodname={data.foodname}
          price={data.price}
          />
        ))
      }
    </div>
  )
}

export default Itemdata