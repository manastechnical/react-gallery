import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setError("Please select a valid file (png/jpeg)");
      setFile(null)
    }
  }

  return (
    <div>
      <form className='flex justify-center mt-7 mb-3 mx-auto text-center'>
        <label className='flex justify-center w-8 h-8 border-2 border-solid border-primary rounded-xl leading-8 decoration-primary font-bold text-2xl hover:bg-primary hover:decoration-white'>
          <input className='h-0 w-0 opacity-0' type="file" required onChange={changeHandler} />
          <span>+</span>
        </label>
      </form>
      <div className='h-16 text-xs'>
        {error && <div className='text-error'>{error}</div>}
        {file && <div className='text-primary'>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
}

export default UploadForm;
