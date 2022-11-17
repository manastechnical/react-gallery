import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({file,setFile}) => {

    const {url,progress} = useStorage(file);
    console.log(progress,url);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile]);

  return (
    <motion.div className='h-1 bg-primary mt-5' initial={{width:0}} animate={{width:progress+'%'}}>
    </motion.div>
  );
}

export default ProgressBar;
