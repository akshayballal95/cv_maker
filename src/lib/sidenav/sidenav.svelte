<script lang="ts">
    import { authHandlers, user } from "$lib/stores/AuthStore";
    import { onMount } from "svelte";
    import { selectedResume } from "../stores/ResumeStore";
    import {
        getResumes,
        resumes,
        addResumeFirestore,
    } from "../stores/ResumeStore";
    import ResumeItem from "./resume_item.svelte";


    async function logout() {
        await authHandlers.logout();
    }

    onMount(async () => {
        await getResumes($user?.uid!);
    });

    async function addResume() {
        await addResumeFirestore($user?.uid!, $selectedResume);
    }
</script>

<body
    ><div class="sidebar">
        <button class="add_res" on:click={addResume}><i class="fa-sharp fa-light fa-plus"></i>   Add Resume</button>

        <div class="resume-container">
        {#each $resumes as res, i}
            <ResumeItem resume={res} />
        {/each}

    </div>
    <button class = "logout-btn" on:click={logout}>Logout</button>

    </div>
</body>

<style>

  
    .resume-container{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap:10px;
   
    }

    .sidebar {
        background-color: #f5f5f5;
        height: 100%;
        width: 250px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        top: 0;
        left: 0;
        overflow-x: hidden;
    }

    .add_res {
        margin-top: 20px;
        width: 90%;
        display: flex;
        align-items: center;
        padding: 10px;
        background: none;
        color: inherit;
        border: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(199, 197, 197);
        font: inherit;
        cursor: pointer;
        outline: inherit;
        gap:10px
    }

    i{
        font-size: 20px;
    }

    .add_res:hover {
        background-color: rgb(231, 231, 231);
    }


    .logout-btn{
        /* flex-grow: 1;
        height: 20px; */
        margin-top: auto;
    }


    @media only screen and (max-width: 600px) {
        .sidebar {
            width: 100%;
        }

    }



</style>
