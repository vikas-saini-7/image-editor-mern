import React from 'react'
import { tools } from '../constants';
import CreateNew from './tools/CreateNew';
import Beautify from './tools/Beautify';
import Tools from './tools/Tools';
import Elements from './tools/Elements';
import Filter from './tools/Filter';
import Upload from './tools/Upload';
import Stock from './tools/Stock';
import AiGenerated from './tools/AiGenerated';
import FeatherIcon from 'feather-icons-react';

const EditorToolExpanded = ({toolOpen, selectedTool, setToolOpen}) => {

  let result;
  switch (selectedTool) {
    case 'create-new' :
      result = <CreateNew/>
      break;
    case 'ai-beautify' :
      result = <Beautify/>
      break;
    case 'tools' :
      result = <Tools/>
      break;
    case 'elements' :
      result = <Elements/>
      break;
    case 'filter' :
      result = <Filter/>
      break;
    case 'upload' :
      result = <Upload/>
      break;
    case 'stock' :
      result = <Stock/>
      break;
    case 'ai-stock' :
      result = <AiGenerated/>
      break;
    default :
      result = ''
  }
  function handleToggle(){
    setToolOpen(!toolOpen)
  }

  return (
    <div className={`${toolOpen ? 'w-fit-content border-r px-4':'w-0'} pt-4 relative`}>
        <div className='w-[400px]'>
        {toolOpen && result}
        </div>
        <div className={`${!toolOpen ? 'hidden' : 'flex'} absolute -right-[12px] h-full items-center h-expanded`}>
          <div onClick={handleToggle} className='w-[12px] h-[120px] bg-gray-700 flex items-center justify-center cursor-pointer'>
            <FeatherIcon className='text-white' icon='chevron-left'/>
          </div>
        </div>
    </div>
  )
}

export default EditorToolExpanded