import { CatType } from '@/types';
import React from 'react'

const SSG = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const results:CatType  = await response.json();
  return <div className='flex place-content-center'>{results.fact}</div>
}

export default SSG