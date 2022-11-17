import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import React,{useState} from 'react';

export function App() {

  const [selectedImage,setSelectedImage] = useState(null);

  return (
    <div className='flex-row h-screen max-w-5xl justify-center my-0 mx-auto font-mono text-secondary p-5'>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  )
}
