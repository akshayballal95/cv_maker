import { writable } from "svelte/store";

import { db } from "../client/firebase";
import { Resume } from "../../input_model";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { classToObject } from "$lib/client/firestore";

export let loading = writable<boolean>(false);

export let selectedResume = writable<Resume>(new Resume());
export let resumes = writable<Resume[]>([]);


export async function addResumeFirestore(userId: string, resume: Resume) {
    await addDoc(collection(db, "users/" + userId + "/resumes/"),
        { ...classToObject(resume), target_company: { company_name: "New Resume", position: "" } })
}
export async function updateResumeService(userId: string, resume: Resume) {
    console.log(JSON.stringify({ ...resume, avatar: "" }))
    await setDoc(doc(db, "users/" + userId + "/resumes/" + resume.id), classToObject(resume))
}

export async function deleteResumeService(userId: string, resumeId: string) {
    await deleteDoc(doc(db, "users/" + userId + "/resumes/" + resumeId))
}

export async function getResumes(userId: string) {
    const q = query(collection(db, "users/" + userId + "/resumes"));


    onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.empty) {
            let r: Resume[] = []
            querySnapshot.forEach((doc) =>
                r.push({ ...doc.data() as Resume, id: doc.id }))
            resumes.set(r)
            selectedResume.set(r[0])
        }

    })



}