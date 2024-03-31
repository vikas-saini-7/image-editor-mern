import React from 'react'
import FeatherIcon from 'feather-icons-react'

const center_tools = [
    {
        id:1,
        name: 'layers',
        action: '',
        icon: 'layers'
    },
    {
        id:2,
        name: 'edit',
        action: '',
        icon: 'edit'
    },
    {
        id:3,
        name: 'save',
        action: '',
        icon: 'save'
    },
]

const EditorImageAreaHeader = () => {
  return (
    <div className='h-[60px] w-full flex items-center justify-between border-b px-4'>
        {/* left  */}
        <div className='flex items-center gap-1 text-green-600'>
            <FeatherIcon className='text-green-600' icon='check-circle' size='20px' />
            <p>Saved</p>
        </div>

        {/* center */}
        <ul className='flex gap-2'>
            {center_tools.map((tool) => (
                <li className='bg-gray-100 hover:bg-gray-200 hover:text-orange-600 cursor-pointer rounded p-2' key={tool.id}>
                    <FeatherIcon icon={tool.icon} />
                </li>
            ))}
        </ul>

        {/* right */}
        <div>Help</div>
    </div>
  )
}

export default EditorImageAreaHeader