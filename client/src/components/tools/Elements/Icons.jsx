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
        <h1>Icons</h1>
        {icons?.map((icon) => (
            <div className='flex'>
                <img src={icon?.download_url} alt="no" />
                <span>{icon?.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Icons