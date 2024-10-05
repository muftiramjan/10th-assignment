import { useEffect, useState } from "react";
import Spot from "./Spot";

const Spots = () => {
    const [books, setbooks] = useState([]);
    useEffect(() => {
        
       fetch('https://ten-assaiment-server.vercel.app/sport2')
            .then(res => res.json())
            .then(data => setbooks(data));
    }, [])


    return (
        <div className="font-[family-name:var(--font-geist-sans)] ">
            <div>
                <h1 className="text-4xl font-bold text-center mt-10 font-[family-name:var(--font-geist-sans)] ">TOURIST SPOTS</h1>
                <p className="text-center font-semibold">Travel is very pleasant if you can experience it. Allah Ta ala said travel in the <br />world and see what happened to the disbelievers.</p>
                 </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 ">
                        {
                    books.map(book => <Spot key={book._id} book={book}></Spot>)
                }
            </div>
        </div>

    );
};

export default Spots;