import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div className='flex  h-full  items-center justify-between w-full  flex-col bg-slate-800'>
        <div className="h-24  w-full p-8 flex  items-center"><img src={logo  } alt="" className='h-16'/></div>
        <div className="h-[400px] flex items-center flex-col">
        <Link to="/image" className="h-14 m-3 w-72 bg-orange-500 items-center justify-center flex rounded-xl">
          <span className="text-white font-semibold font-lato">Image Generation</span>
        </Link>
     <Link to="/videoGeneration" className="h-14 m-3 w-72 bg-orange-500 items-center justify-center font-lato flex rounded-xl "><span className='text-white font-semibold'>Video Generation</span></Link>
     <Link to="/pptGeneration" className="h-14 m-3 w-72 bg-orange-500 items-center justify-center font-lato flex rounded-xl "><span className='text-white font-semibold'>PPT Generation</span></Link>
     <Link to="/musicGeneration" className="h-14 m-3 w-72 bg-orange-500 items-center justify-center font-lato flex rounded-xl "><span className='text-white font-semibold'>Music Generation</span></Link>
     <Link to="/Intereview Preparation" className="h-14 m-3 w-72 bg-orange-500 items-center justify-center font-lato flex rounded-xl "><span className='text-white font-semibold'>Interview Preparation</span></Link>
    

        </div>

        <div className="h-44 flex p-4 justify-center items-center  w-full">
           <div className="h-36 w-full mx-4 border-2 flex border-white rounded-xl">
            <div className="w-44 bg-red-500">sd</div>
            <div className="flex w-full justify-between py-6 flex-col items-center">
<div className="text-white text-3xl font-premium">Premium</div>
<Link to="/manageMembership" className="h-8 border-2 px-4 w-48 text-white font-base justify-center rounded-xl flex items-center font-imprima ">Manage Membership</Link>
            </div>

           </div>
        </div>

   


    </div>
  )
}
