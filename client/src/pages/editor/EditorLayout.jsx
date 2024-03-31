import React, { useState } from 'react'
import EditorHeader from '../../components/EditorHeader'
import EditorTools from '../../components/EditorTools'
import EditorToolExpanded from '../../components/EditorToolExpanded'
import { tools } from '../../constants'

const EditorLayout = (props) => {
    const [toolOpen, setToolOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState(false);
    function handleToolOpen() {
        setToolOpen(true);
    }
    return (
        <div className='overflow-hidden'>
            <EditorHeader/>
            <div className='flex'>
                <EditorTools
                    tools={tools}
                    handleToolOpen={handleToolOpen}
                    setSelectedTool={setSelectedTool}
                />
                <EditorToolExpanded
                    toolOpen={toolOpen}
                    selectedTool={selectedTool}
                />
                <div className='w-full'>{props.children}</div>
            </div>
        </div>
    )
}

export default EditorLayout