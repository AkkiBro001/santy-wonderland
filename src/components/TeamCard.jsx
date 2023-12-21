import React from 'react'
import santy from '../assets/team/santy.png'

function TeamCard({name, img ,job}) {
  return (
    <section className='p-4 flex flex-col justify-center items-center gap-4'>

        <img src={img} alt="" className=' w-[150px]'/>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <h2 className='text-lg font-bold bg-green-600 py-2 px-4 w-full text-white uppercase text-center rounded-md'>{job}</h2>
    </section>
  )
}

export default TeamCard