import React from 'react'
import FeatherIcon from 'feather-icons-react'

const ToolsInner = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col items-center justify-center py-4 border rounded-lg cursor-pointer'>
            <FeatherIcon icon='crop' />
            <p className='mt-2 text-gray-500'>Crop</p>
        </div>
        <div className='flex flex-col items-center justify-center py-4 border rounded-lg cursor-pointer'>
            <FeatherIcon icon='square' />
            <p className='mt-2 text-gray-500'>Resize</p>
        </div>
        <div className='flex flex-col items-center justify-center py-4 border rounded-lg cursor-pointer'>
            <FeatherIcon icon='type' />
            <p className='mt-2 text-gray-500'>Text</p>
        </div>
    </div>
  )
}

export default ToolsInner