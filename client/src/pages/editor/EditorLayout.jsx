import React, { useState } from 'react'
import EditorHeader from '../../components/EditorHeader'
import EditorTools from '../../components/EditorTools'
import EditorToolExpanded from '../../components/EditorToolExpanded'
import { tools } from '../../constants'

const EditorLayout = (props) => {
    const [editorToolExpanded, setEditorToolExpanded] = useState(false);
    const toggleToolExpand = () => {
        setEditorToolExpanded(!editorToolExpanded)
    }
  return (
    <div>
        <EditorHeader/>
        <div className='flex'>
            <EditorTools
                tools={tools}
                toggleToolExpand={toggleToolExpand}
            />
            <EditorToolExpanded
                editorToolExpanded={editorToolExpanded}
                setEditorToolExpanded={setEditorToolExpanded}
            />
            <div className='w-full'>{props.children}</div>
        </div>
    </div>
  )
}

export default EditorLayout