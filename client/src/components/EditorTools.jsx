import React from 'react'
import FeatherIcon from 'feather-icons-react'

const EditorTools = ({tools, toggleToolExpand}) => {
  return (
    <div className='border-r'>
      <ul className='flex flex-col items-center pt-4'>
        {tools.map((tool) => (
          <li onClick={toggleToolExpand} key={tool.id} className='hover:bg-gray-200 flex flex-col items-center w-[120px] py-[18px] cursor-pointer select-none'>
            <FeatherIcon icon={tool.icon} size="24" />
            <p className='uppercase text-xs text-gray-500 mt-2'>{tool.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EditorTools