import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);

    const types = ['image/png','image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("");
        }else{
            setError("Please select a valid file (png/jpeg)");
            setFile(null)
        }
    }

  return (
    <div>
      <form>
        <label htmlFor="file">
        <input type="file" required onChange={changeHandler}/>
        </label>
        <div className=''>
            {error && <div className=''>{error}</div>}
            {file && <div className=''>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
