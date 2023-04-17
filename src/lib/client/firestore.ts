
import { collection,query, where, onSnapshot, getDocs, QuerySnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
import type { Resume } from "../../input_model";



export function classToObject (cls:any){
    let ob = JSON.stringify(cls)
    let obj = JSON.parse(ob)

    return (obj)
}