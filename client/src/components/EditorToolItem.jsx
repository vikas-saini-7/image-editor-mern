import FeatherIcon from 'feather-icons-react'
import React from 'react'

const EditorToolItem = ({handleToolOpen, icon, name, slug, setSelectedTool}) => {
    function handleClick(){
        handleToolOpen();
        setSelectedTool(slug)
    }
  return (
    <li onClick={handleClick} className='hover:bg-gray-200 flex flex-col items-center w-[120px] py-[18px] cursor-pointer select-none'>
        <FeatherIcon icon={icon} size="24" />
        <p className='uppercase text-xs text-gray-500 mt-2'>{name}</p>
    </li>
  )
}

export default EditorToolItem