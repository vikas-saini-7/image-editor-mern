import React from 'react'
import { tools } from '../constants';
import CreateNew from './tools/CreateNew';
import Beautify from './tools/Beautify';
import Tools from './tools/Tools';
import Elements from './tools/Elements';
import Filter from './tools/Filter';
import Upload from './tools/Upload';
import Stock from './tools/stock/Stock';
import AiGenerated from './tools/AiGenerated';
import FeatherIcon from 'feather-icons-react';
import Draw from './tools/Draw';

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
      case 'draw' :
        result = <Draw/>
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
    <div className={`${toolOpen ? 'w-fit border-r':'w-0'} pt-4 relative h-expanded`}>
        <div className='flex flex-col w-[400px] h-[800px]'>
        {toolOpen && result}
        </div>
        {/* <div className={`${!toolOpen ? 'hidden' : 'flex'} absolute top-0 -right-[12px] items-center`}>
          <div onClick={handleToggle} className='w-[12px] h-[120px] bg-gray-700 flex items-center justify-center cursor-pointer'>
            <FeatherIcon className='text-white' icon='chevron-left'/>
          </div>
        </div> */}
    </div>
  )
}

export default EditorToolExpanded