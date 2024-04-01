import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ExportModal from './modal/ExportModal';

const Export = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const imageUrl = useSelector((state) => state.image.imageUrl)
    const imageName = useSelector((state) => state.image.imageName)

  const handleSaveImage = () => {

    // Check if imageUrl is present
    if (imageUrl) {
      // Create a link element
      const downloadLink = document.createElement('a');
      downloadLink.href = imageUrl;
      downloadLink.download = imageName; // You can set the default name for the downloaded image
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
        alert('No image on Canvas')
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
        <button onClick={openModal} className='text-white bg-gradient-to-r from-pink-600 to-orange-600 px-4 py-1 rounded'>
            Export
        </button>
        <ExportModal
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            handleSaveImage={handleSaveImage}
            
        />
    </div>
  )
}

export default Export