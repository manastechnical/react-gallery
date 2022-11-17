import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImage}) => {
    const {docs} = useFirestore('images');
    console.log(docs);
  return (
    <div className='grid my-5 mx-auto grid-cols-3 gap-10'>
      {docs && docs.map(doc=>(
        <motion.div layout whileHover={{opacity:1}} className='overflow-hidden opacity-80 h-0 py-[50%] px-0 relative' key={doc.id} onClick={()=>setSelectedImage(doc.url)}>
            <motion.img className='top-0 left-0 min-h-full min-w-full max-w-full absolute' src={doc.url} alt="uploaded pic" 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
            />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGrid;
