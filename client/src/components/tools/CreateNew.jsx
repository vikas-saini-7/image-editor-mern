import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {uploadImage} from '../../store/imageSlice'

const CreateNew = () => {
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result; // Get the image URL from FileReader
      dispatch(uploadImage(imageUrl)); // Dispatch action to update the Redux state
    };
    if (file) {
      reader.readAsDataURL(file); // Convert image file to Data URL
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        className="hidden w-full"
        onChange={handleImageChange}
        id="fileInput"
      />
      <label
        htmlFor="fileInput" className='py-3 px-6 w-full bg-gray-900 hover:bg-gray-800 text-white rounded' 
      >
        Upload Image
      </label>
    </div>
  )
}

export default CreateNew