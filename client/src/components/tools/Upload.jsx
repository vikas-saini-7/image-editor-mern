import React from 'react'

const Upload = () => {
  return (
    <div className='px-4'>
      <div className='mb-2'>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="fileInput2"
        />
        <label
          htmlFor="fileInput2" className='py-3 px-6 cursor-pointer text-center block w-full bg-gray-900 hover:bg-gray-800 text-white rounded' 
        >
          Upload Media
        </label>
      </div>
      
    </div>
  )
}

export default Upload