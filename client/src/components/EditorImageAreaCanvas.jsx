import React from 'react'
import { useSelector } from 'react-redux'
import FabricCanvas from './fabric/FabricCanvas'

const EditorImageAreaCanvas = () => {
  const imageUrl = useSelector((state) => state.image.imageUrl)

  return (
    <div className='canvas-container w-full bg-red-500 h-canvas'>
      {/* <div className='canvas bg-gray-200'>
          <div className='canvas-image-container h-canvas overflow-auto flex items-center justify-center'>
            {imageUrl && <img className='canvas-image' src={imageUrl} alt="" />}
            {!imageUrl && 'Press Create New to start Editing'}
          </div>
      </div> */}
      <FabricCanvas/>

    </div>
  )
}

export default EditorImageAreaCanvas