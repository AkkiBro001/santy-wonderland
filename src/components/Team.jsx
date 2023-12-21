import React from 'react'
import TeamCard from './TeamCard';
import { TeamData } from "../Data/TeamData"

function Team() {
  return (
    <div className='p-4'>
        <header className='text-2xl text-center font-bold my-5'>
            <h2 className='text-center'>Our Team</h2>
            
        </header>
        <section className='flex flex-wrap gap-4 justify-center'>
            {
                TeamData.map(data => <TeamCard name={data.name} img={data.img} job={data.job}/>)
            }
                
                
            </section>
    </div>
  )
}

export default Team