import React from 'react'
import { NavLink } from 'react-router-dom'

const EditorHeader = () => {
  return (
    <div className='shadow'>
        <header className='container mx-auto flex items-center justify-between px-4 py-4 h-[72px] '>
            <div>LOGO</div>
            <nav>
                <ul className='flex items-center gap-4'>
                    <li>
                        <NavLink to=''>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="">Supprt</NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <button className='text-white bg-gradient-to-r from-pink-600 to-orange-600 px-4 py-1 rounded'>
                                Export
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default EditorHeader