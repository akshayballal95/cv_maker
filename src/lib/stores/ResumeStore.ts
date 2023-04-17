import { writable } from "svelte/store";

import { auth, db } from "../client/firebase";
import { Resume } from "../../input_model";
import { QuerySnapshot, addDoc, collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { classToObject } from "$lib/client/firestore";

export let loading = writable<boolean>(false);

export let resume = writable<Resume>(new Resume());

export let resumes = writable<Resume[]>([]);


export async function addResumeFirestore(userId:string, resume:Resume){
   await addDoc(collection(db, "users/"+userId+"/resumes/"),
    classToObject(resume) )
}

export async function getResumes(userId:string){
    const q = query(collection(db, "users/"+userId+"/resumes"));
    onSnapshot(q, (querySnapshot)=>{
        let r:Resume[] = []
        querySnapshot.forEach((doc)=>
        r.push(doc.data() as Resume))
        resumes.set(r)
    })
}