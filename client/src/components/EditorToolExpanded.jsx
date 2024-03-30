import React from 'react'

const EditorToolExpanded = ({editorToolExpanded, setEditorToolExpanded}) => {
  return (
    <div className={`${editorToolExpanded ? 'w-fit-content border-r px-4':'w-0'} overflow-hidden pt-4`}>
        <div className='w-[400px]'>
            Tool Details
        </div>
    </div>
  )
}

export default EditorToolExpanded