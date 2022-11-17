import React,{useState,useEffect} from 'react';
import { db } from '../firebase';
import { onSnapshot, collection, orderBy } from 'firebase/firestore';

const useFirestore = (col) => {
    const [docs,setDocs]=useState([]);

    useEffect(()=>{
        const unsub = onSnapshot(collection(db,col),orderBy('createdAt','desc'),(snapshot)=>{
            let documents = [];
            snapshot.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id});
            });
            setDocs(documents);
        })
        return () => unsub();
    },[col])

  return {docs}
}

export default useFirestore;
