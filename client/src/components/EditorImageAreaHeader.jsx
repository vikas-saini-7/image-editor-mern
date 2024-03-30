import React from 'react'
import FeatherIcon from 'feather-icons-react'

const EditorImageAreaHeader = () => {
  return (
    <div className='h-[60px] w-full flex items-center justify-between border-b px-4'>
        {/* left  */}
        <div className='flex items-center gap-1 text-green-600'>
            <FeatherIcon className='text-green-600' icon='check-circle' size='20px' />
            <p>Saved</p>
        </div>

        {/* center */}
        <div></div>

        {/* right */}
        <div>Help</div>
    </div>
  )
}

export default EditorImageAreaHeader