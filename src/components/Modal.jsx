import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImage,setSelectedImage}) => {

    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    }

  return (
    <motion.div className='backdrop fixed top-0 left-0 w-full h-full bg-black/50' onClick={handleClick} initial={{opacity:0}} animate={{opacity:1}}>
      <motion.img className='block max-w-[60%] max-h-[80%] my-16 mx-auto shadow-blackish border-4 border-solid border-white' src={selectedImage} alt="enlarged pic" initial={{y:"-100vh"}} animate={{y:0}}/>
    </motion.div>
  );
}

export default Modal;
