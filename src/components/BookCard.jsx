import React from 'react'
import crossword from "../assets/pdf/santa-and-crossword.pdf"
import RealisticRequests from "../assets/pdf/Santa's-Realistic-Requests-A-Dragon-or-a-Boyfriend.pdf"
import prog1 from "../assets/pdf/Wish-from-Santa-and-the-Programmer.pdf"
import prog2 from "../assets/pdf/Wish-from-Santa-and-the-Programmer-2.pdf"


function BookCard({name, img, desc, bookid}) {
  let book = null;

  if(bookid === "book1"){
      book = prog1
  }else if(bookid === "book2"){
    book = prog2
  }else if(bookid === "book3"){
    book = RealisticRequests
  }else if(bookid === "book4"){
    book = crossword
  }
  

  return (
    <div className='flex flex-col gap-2 bg-white p-4 rounded-md shadow-md'>
        <img src={img} alt="book" className='min-w-[150px]'/>
        <section className='flex flex-col gap-2 h-full'>
            <h2 className='text-xl font-bold text-center'>{name}</h2>
            <p>{desc}</p>
            <a href={book} className='bg-red-700 text-white py-2 px-4 w-full rounded-md uppercase text-center mt-auto' download={true}>Download Now</a>
        </section>
    </div>
  )
}

export default BookCard