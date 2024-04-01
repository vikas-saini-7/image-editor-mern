import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {uploadImage} from '../../store/imageSlice'
import CreateNewModal from '../modal/CreateNewModal';

const CreateNew = () => {
  let [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      const imageName = file.name; // Get the name of the uploaded image file
      dispatch(uploadImage({ url: imageUrl, name: imageName }));
    };
    if (file) {
      reader.readAsDataURL(file); // Convert image file to Data URL
    }
  };

  function closeModal() {
    setModalIsOpen(false)
  }

  function openModal() {
    setModalIsOpen(true)
  }

  return (
    <div>
      <div className='mb-2'>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          id="fileInput"
        />
        <label
          htmlFor="fileInput" className='py-3 px-6 cursor-pointer text-center block w-full bg-gray-900 hover:bg-gray-800 text-white rounded' 
        >
          Upload Image
        </label>
      </div>
      <button onClick={openModal} className='py-3 px-6 cursor-pointer text-center block w-full bg-gray-100 text-black hover:bg-gray-200 rounded'>Custom Size</button>
      {/* <div className='mt-8'>
        <h1 className='font-bold text-xl mb-2'>Custom Size:</h1>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-4'>
            <label htmlFor="newWidth">width: </label>
            <input id='newWidth' className='bg-gray-100 w-24' type="text" placeholder='1080' />
            <span>px</span>
          </div>
          <div className='flex gap-4'>
            <label htmlFor="newHeight">width: </label>
            <input id='newHeight' className='bg-gray-100 w-24' type="text" placeholder='720' />
            <span>px</span>
          </div>
        </div>
      </div> */}
      <CreateNewModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  )
}

export default CreateNew