import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='flex gap-2 place-content-center ...'>
        <Link href={"/ssg"}>SSG</Link>
        <Link href={"/isr"}>ISR</Link>
        <Link href={"/ssr"}>SSR</Link>
        <Link href={"/csr"}>CSR</Link>
    </div>
  )
}

export default Nav