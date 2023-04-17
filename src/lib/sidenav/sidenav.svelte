<script lang="ts">
    import { auth, db } from "$lib/client/firebase";
    import { getResumes } from "$lib/client/firestore";
    import { authHandlers, user } from "$lib/stores/AuthStore";
    import { onMount } from "svelte";
    import { Resume } from "../../input_model";
    import { send_to_gpt } from "../../openai";
    // import { resumeListener } from "../client/firestore";

    import { collection, query, where, onSnapshot } from "firebase/firestore";
    
   
    async function logout() {
        await authHandlers.logout();
    }
    let resume = new Resume();

    let resumes;
    
    // onMount(async ()=>{
    //     let resumeList = await getResumes($user?.uid!);
    //     resumes = resumeList

    // })
    // console.log(resumes)

    getResumes($user?.uid!).then((data)=>{
        resumes = data
        // console.log(resumes)
    })

    console.log(resumes)
    

</script>

<div class="side-nav">
    <button on:click={logout}>Logout</button>
</div>

<style>
    .side-nav {
        background-color: orange;
        width: 15em;
    }
</style>
