import React from 'react'
import BookCard from './BookCard'
import { BookData } from '../Data/BookData'

function Collection() {
  return (
    <div className='p-4'>
        <header className='text-2xl text-center font-bold my-5'>
            Our Collection
        </header>
        <section className='flex flex-wrap gap-4 justify-center'>
        {
          BookData.map((book, i) => <BookCard {...book} key={i}/>)
        }
        
        
        </section>
    </div>
  )
}

export default Collection