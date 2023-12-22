import programmer1 from "../assets/books/Wish-from-Santa-and-the-Programmer.jpg"
import programmer2 from "../assets/books/Wish-from-Santa-and-the-Programmer-2.jpg"
import realisticRequests from "../assets/books/Santa-Realistic-Requests-A-Dragon-or-a-Boyfriend.jpg"
import SantaCrossword from "../assets/books/Santa-and-Crossword.jpg"

import crossword from "../assets/pdf/santa-and-crossword.pdf"
import RealisticRequests from "../assets/pdf/Santa's-Realistic-Requests-A-Dragon-or-a-Boyfriend.pdf"
import prog1 from "../assets/pdf/Wish-from-Santa-and-the-Programmer.pdf"
import prog2 from "../assets/pdf/Wish-from-Santa-and-the-Programmer-2.pdf"

export const BookData = [
    {
        name: "Wish from Santa and the Programmer",
        img: programmer1,
        desc: "Witty exchanges between Santa and the programmer.",
        link: {prog1},
        bookid: "book1"

    },
    {
        name: "Wish from Santa and the Programmer 2",
        img: programmer2,
        desc: "Witty exchanges between Santa and the programmer (Part 2).",
        link: {prog2},
        bookid: "book2"
    },
    {
        name: "Santa's Realistic Requests: A Dragon or a Boyfriend ?",
        img: realisticRequests,
        desc: "The most amusing contemplation, balancing mythical creatures and matters of the heart.",
        link: {RealisticRequests},
        bookid: "book3"
    },
    {
        name: "Santa and Crossword",
        img: SantaCrossword,
        desc: "Santa tackles the crossword puzzle.",
        link: {crossword},
        bookid: "book4"
    }
]