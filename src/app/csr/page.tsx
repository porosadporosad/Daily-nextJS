"use client";
import React, { useEffect, useState } from 'react'

const CSR = () => {
    const [cat,setCat] = useState<string>("");

    useEffect(() => {
        const fetchCat = async () => {
          const response = await fetch(`https://catfact.ninja/fact`);
          const results = await response.json();
          setCat(results.fact);
        };
    
        fetchCat();
      }, []);
    
      if (!cat) {
        return <div className='flex place-content-center'>로딩중...</div>;
      }
  return (
    <div className='flex place-content-center'>{cat}</div>
  )
}

export default CSR