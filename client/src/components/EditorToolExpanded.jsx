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

const EditorToolExpanded = ({toolOpen, selectedTool}) => {

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
    case 'ai-generated' :
      result = <AiGenerated/>
      break;
    default :
      result = 'Select a tool'
  }

  return (
    <div className={`${toolOpen ? 'w-fit-content border-r px-4':'w-0'} overflow-hidden pt-4`}>
        <div className='w-[400px]'>
        {result}
        </div>
    </div>
  )
}

export default EditorToolExpanded