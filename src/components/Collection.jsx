import React from 'react'
import BookCard from './BookCard'

function Collection() {
  return (
    <div className='p-4'>
        <header className='text-2xl text-center font-bold my-5'>
            Our Collection
        </header>
        <section className='flex flex-wrap gap-4 justify-center'>

        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        </section>
    </div>
  )
}

export default Collection