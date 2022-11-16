import { useState, useEffect } from 'react';
import { storage, db } from '../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {collection,addDoc, serverTimestamp} from 'firebase/firestore';

const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // useEffect(()=>{
    //     const storageRef = storage.ref(file.name);
    //     storageRef.put(file).on('state_changed',(snap)=>{
    //         let percent = (snap.bytesTransferred / snap.totalBytes)*100;
    //         setProgress(percent);
    //     },(err)=>{
    //         setError(err);
    //     },async () => {
    //         const url = await storageRef.getDownloadURL();
    //         setUrl(url);
    //     })
    // },[file])

    useEffect(() => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percent);
            },
            error => {
                setError(error);
            },
            async () => {
                await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setUrl(url)
                    // addDoc(collection(db, 'images'), {
                    //     url:url,
                    //     createdAt: serverTimestamp()
                    // });
                    addDoc(collection(db, 'images'), {
                        url:url,
                        createdAt: serverTimestamp()
                    });    
                });
            }
        )
    }, [file]);

    return { progress, error, url }
}

export default useStorage;