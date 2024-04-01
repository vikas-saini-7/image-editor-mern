import React from 'react'
import { NavLink } from 'react-router-dom'
import Export from './Export';

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
                            <Export/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default EditorHeader