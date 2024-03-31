import React from 'react'
import FeatherIcon from 'feather-icons-react'
import EditorToolItem from './EditorToolItem'

const EditorTools = ({tools, handleToolOpen, setSelectedTool}) => {
  return (
    <div className='border-r h-calc'>
      <ul className='flex flex-col items-center pt-4'>
        {tools.map((tool) => (
        <EditorToolItem
          key={tool.key}
          icon={tool.icon}
          name={tool.name}
          slug={tool.slug}
          handleToolOpen={handleToolOpen}
          setSelectedTool={setSelectedTool}
        />
        ))}
      </ul>
    </div>
  )
}

export default EditorTools