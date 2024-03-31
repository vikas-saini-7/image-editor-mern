import React from 'react'
import { useSelector } from 'react-redux'

const EditorImageAreaCanvas = () => {
  const imageUrl = useSelector((state) => state.image.imageUrl)

  return (
    <div className='bg-gray-200 w-full h-canvas overflow-auto flex items-center justify-center'>
        {imageUrl && <img src={imageUrl} alt="" />}
        {!imageUrl && 'Please press Create New to start Editing'}
    </div>
  )
}

export default EditorImageAreaCanvas