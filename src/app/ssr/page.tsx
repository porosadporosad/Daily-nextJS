import { CatType } from '@/types';
import React from 'react'

const SSR = async() => {
    const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const  results:CatType  = await response.json();
  return (
    <div className='flex place-content-center'>{results.fact}</div>
  )
}

export default SSR