import { CatType } from '@/types';
import React from 'react'

const ISR = async () => {
    const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const results: CatType = await response.json();
  return (
    <div  className='flex place-content-center'>{results.fact}</div>
  )
}

export default ISR