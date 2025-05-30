import React from 'react'
import user from './assets/user.svg'
import location from './assets/location.png'
import services from './assets/Server.png'

export default function Data () {
  return (
    <div className='flex flex-row mt-20 text-center w-full max-w-4xl mx-auto justify-between gap-10 shadow-xl h-[110px]'>

    <div className='border-r pr-20 pt-5 pl-5 flex gap-5'><img className='h-2/3' src={ user}></img><span><b>90+</b><br/>Users</span></div>
    <div className='border-r pr-20 pt-5 pl-5 flex gap-5'><img className='h-2/3' src={location}></img><span><b>30+</b><br/>Locations</span></div>
    <div className='pr-20 pt-5 pl-5 flex gap-5'><img className= 'h-2/3' src={services}></img><span><b>50+</b><br/>Services</span></div>
    
    </div>
  )
}
