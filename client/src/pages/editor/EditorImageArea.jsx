import React from 'react'
import EditorImageAreaHeader from '../../components/EditorImageAreaHeader'
import EditorImageAreaFooter from '../../components/EditorImageAreaFooter'
import EditorImageAreaCanvas from '../../components/EditorImageAreaCanvas'

const EditorImageArea = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-between'>
        <EditorImageAreaHeader/>
        <EditorImageAreaCanvas/>
        <EditorImageAreaFooter/>
    </div>
  )
}

export default EditorImageArea