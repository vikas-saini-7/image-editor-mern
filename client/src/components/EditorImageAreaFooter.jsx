import FeatherIcon from 'feather-icons-react'
import React from 'react'

const EditorImageAreaFooter = () => {
  return (
    <div className='h-[60px] w-full flex items-center justify-between border-t px-4'>
        {/* left  */}
        <div className='flex items-center gap-2'>
            <button className='px-4 py-1 rounded bg-gray-100 hover:bg-gray-200'>Fit Screen</button>
            <div className='flex items-center gap-2'>
              <p className='text-xs'>0%</p>
              <input className="appearance-none cursor-pointer w-[200px] h-1 rounded-full bg-gray-200 outline-none focus:outline-none  focus:bg-gray-300 focus:ring-0" type="range" name="" id="" />
              <p className='text-xs'>100%</p>
            </div>
        </div>

        {/* center */}

        {/* right */}
        {/* <div>Extra</div> */}
    </div>
  )
}

export default EditorImageAreaFooter