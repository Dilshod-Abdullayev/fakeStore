import React from 'react'
import Logo from './Logo'
import Items from './Items'
import ThemeSwitch from '../ThemeSwitch'
export default function Nav() {
    return (
        <div className='flex justify-between w-full items-center h-auto py-4 shadow-2xl'>
            <Logo />
            <Items />
            <ThemeSwitch />
        </div>
    )
}
