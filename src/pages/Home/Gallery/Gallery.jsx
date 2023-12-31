import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys, setToys]=useState([]);
    useEffect(()=>{
        fetch('https://toy-market-server-nu.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    
   
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-9">Gallery</h2>
            <div className='grid md:grid-cols-2 '>
                <img src={toys[1]?.picture} alt="" />
                <img src={toys[5]?.picture} alt="" />
                <img src={toys[6]?.picture} alt="" />
                <img src={toys[4]?.picture} alt="" />
                

            </div>
        </div>
    );
};

export default Gallery;