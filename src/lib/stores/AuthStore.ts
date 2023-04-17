import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, type User } from 'firebase/auth';
import { writable } from 'svelte/store';
import {auth} from '../client/firebase'

export const user = writable<User|null>();
export const isLoading = writable<boolean>(true);


const provider = new GoogleAuthProvider();

export const authHandlers = {
    login: async () => {
        let result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
    },
    logout: async() =>{
        signOut(auth);
        user.set(null)
    }
}