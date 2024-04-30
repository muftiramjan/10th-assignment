import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setbooks] = useState([]);
    useEffect(() => {
        fetch('https://my-coffee-shope-server.vercel.app/user')
       
            .then(res => res.json())
            .then(data => setbooks(data));
    }, [])


    return (
        <div >
            <div>
                <h1 className="text-4xl font-bold text-center mt-10 ">Tourists Spot:{books.length}</h1>
                 </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>

    );
};

export default Books;