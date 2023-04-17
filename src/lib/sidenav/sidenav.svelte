<script lang="ts">

    import { authHandlers, user } from "$lib/stores/AuthStore";
    import { onMount } from "svelte";
    import {resume, } from "../stores/ResumeStore"
    import {getResumes, resumes, addResumeFirestore} from "../stores/ResumeStore"

    
   
    async function logout() {
        await authHandlers.logout();
    }

    
    onMount(async ()=>{
       await getResumes($user?.uid!);
        console.log($resumes)
    })

    async function addResume () {
        await addResumeFirestore($user?.uid!, $resume)

    }

       

</script>

<div class="side-nav">
    <button on:click={logout}>Logout</button>

    {#each $resumes as res,i}
    <h2 style="color:black">
        Resume {i+1}
    </h2>
    {/each}
    <button on:click={addResume}>Add Resume</button>
</div>

<style>
    .side-nav {
        background-color: orange;
        width: 15em;
    }
</style>
