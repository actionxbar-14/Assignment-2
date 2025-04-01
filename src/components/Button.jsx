import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Button = ({productName}) => {
  const [buttontext, setButtonText]=React.useState(false)
    const handleButton =()=>{
      setButtonText(!buttontext);
      if(!buttontext){
        toast.success(`${productName} Added!`)
      }
      else{
        toast.error(`${productName} Removed!`)
      }
    }
    
  return (
    <div>
      <button onClick={handleButton} className={`absolute right-1 top-[90%] bg-zinc-100 py-2 px-6 rounded-3xl opacity-[85%] border ${buttontext?"bg-red-700 text-white":"text-red-700"}`}>{buttontext?"Added ":"Add"}</button>
      <ToastContainer position="top-right" autoClose={1500} closeOnClick/>
    </div>
  )
}

export default Button