import React from 'react'
import free from './assets/Free.svg'
import group from './assets/Group 1223.svg'

export default function Choose  (){
  return (
    <div>
        <h1 className='font-bold text-[30px] mt-20'>Choose Your Plan</h1>
        <p className='text-gray-600 mt-2'>Let's choose the package that is best for you and explore it happily and<br/>
        cheerfully.</p>

        <div>
          <div className='border-4 w-[350px] rounded-[10px] h-[740px] py-10 mt-10 px-14'><img className='mt-4' src={free}></img>
          <h3 className='font-bold mt-7 text-2xl'>Free Plan</h3>
          <ul>
          <li className='flex gap-3  mt-10 px-4'><img className=''  src={group}></img><p>Unlimited Bandwitch</p></li>
          <li className='flex gap-3  mt-4 px-4'><img src={group}></img><p>Encrypted Connection</p></li>
          <li className='flex gap-3  mt-4 px-4'><img src={group}></img><p>No Traffic Logs</p></li>
          <li className='flex gap-3  mt-4 px-4'><img src={group}></img><p>Works on All Devices</p></li>
          </ul>
          <h2 className='mt-[125px] font-bold text-[25px]'>Free</h2>
          <button className=' bg-white border-4 border-red-500 rounded-3xl px-[70px] py-2 text-red-500 font-bold mt-4 text-[16px]'>Select</button>
          </div>
        </div>
    </div>
  )
}
