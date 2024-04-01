import React, { useEffect } from 'react'
import { getAllIcons } from '../../store/actions/iconsActions'
import { useDispatch } from 'react-redux'

const Elements = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllIcons())
  }, [])
  return (
    <div>Elements</div>
  )
}

export default Elements