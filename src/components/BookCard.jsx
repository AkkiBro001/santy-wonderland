import React from 'react'
import book1 from "../assets/books/book1.jpg"

function BookCard() {
  return (
    <div className='flex flex-col gap-2 bg-white p-4 rounded-md shadow-md'>
        <img src={book1} alt="book1" className='min-w-[150px]'/>
        <section className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold text-center'>Marvel Hero</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className='bg-red-700 text-white py-2 px-4 w-full rounded-md uppercase'>Download Now</button>
        </section>
    </div>
  )
}

export default BookCard