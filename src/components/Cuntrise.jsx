import { useEffect, useState } from "react";
import Cuntri from "./Cuntri";

const Cuntrise = () => {
    const [cuntris, setCuntri] = useState([]);

    useEffect(() => {
        fetch('https://ten-assaiment-server.vercel.app/cuntrise')
            .then(res => res.json())
            .then(data => {
                setCuntri(data);
            });
    }, []);

    return (
        <div className="text-center text-1xl text-green-600">
            <button className="text-3xl mt-6 text-center mb-8 text-white relative px-5 py-2 font-semibold group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
                <span className="flex items-center justify-center gap-2 relative">
                    <span>Our Countries</span>
                </span>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cuntris.map(cuntri => <Cuntri key={cuntri._id} cuntri={cuntri} />)}
            </div>
        </div>
    );
};

export default Cuntrise;
