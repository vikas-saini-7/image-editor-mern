import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllIcons } from '../../../store/actions/iconsActions';

const Icons = () => {
    const icons = useSelector((state)=> state.icons.allIcons)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllIcons())
        console.log(icons)
    }, [])
  return (
    <div>
        {/* <h1 className='px-4'>Icons</h1> */}
        <div className='grid grid-cols-3 gap-2 h-icons overflow-auto pl-4 pr-1'>
            {icons?.map((icon) => (
                <div className='flex items-center justify-center border rounded py-6'>
                    <img className='w-[30%]' src={icon?.download_url} alt="no" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Icons