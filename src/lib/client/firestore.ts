
import { collection,query, where, onSnapshot, getDocs, QuerySnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
import type { Resume } from "../../input_model";



export async function getResumes(userId:string){
    let resumes:Resume[] = []
    const q = query(collection(db, "users/"+userId+"/resumes"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>
    resumes = [...resumes, doc.data() as Resume])
    return resumes
}



export function classToObject (cls:any){
    let ob = JSON.stringify(cls)
    let obj = JSON.parse(ob)

    return (obj)
}