import Link from 'next/link'
import React from 'react'

export default function Items() {
  return (
    <div className='flex gap-4'>
      <Link href="/" className="hover:underline">All</Link>
      <Link href="#" className="hover:underline">Clothes</Link>
      <Link href="#" className="hover:underline">Electronics</Link>
      <Link href="#" className="hover:underline">Furnitures</Link>
      <Link href="#" className="hover:underline">Toys</Link>
    </div>
  )
}