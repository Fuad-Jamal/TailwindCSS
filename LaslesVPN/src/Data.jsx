import React from 'react'
import user from './assets/user.svg'
import location from './assets/location.png'
import services from './assets/Server.png'

export default function Data () {
  return (
    <div className='flex flex-row mt-10 text-center w-full max-w-3xl mx-auto justify-between gap-10'>

    <div className='border-r'><img src={user}></img><b>90+</b><br/>Users</div>
    <div><img src={location}></img><b>30+</b><br/>Locations</div>
    <div><img src={services}></img><b>50+</b><br/>Services</div>
    
    </div>
  )
}
