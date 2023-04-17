<script lang="ts">
    import { authHandlers, user } from "$lib/stores/AuthStore";
    import { onMount } from "svelte";
    import {  selectedResume } from "../stores/ResumeStore";
    import {
        getResumes,
        resumes,
        addResumeFirestore,
    } from "../stores/ResumeStore";
    import ResumeItem from "./resume_item.svelte";
    import type { Resume } from "../../input_model";

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
        <button on:click={logout}>Logout</button>

        {#each $resumes as res, i}
            <ResumeItem resume={res} />
        {/each}
        <!-- 
<!-- 
		<a href="#" class="active">Home<i class="fas fa-home"></i> </a>
		<a href="#"><i class="fas fa-info-circle"></i> About</a>
		<a href="#"><i class="fas fa-envelope"></i> Contact</a>
		<a href="#"><i class="fas fa-blog"></i> Blog</a>
		<a href="#"><i class="fas fa-cog"></i> Services</a> --> -->

        <button on:click={addResume}>Add Resume</button>
    </div>
</body>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        background-color: #fff;
        color: #333;
    }

    .sidebar {
        background-color: #f5f5f5;
        height: 100vh;

        width: 250px;
        /* position: fixed; */
        top: 0;
        left: 0;
        overflow-x: hidden;
    }

    .main {
        margin-left: 250px;
        padding: 20px;
    }

    @media only screen and (max-width: 600px) {
        .sidebar {
            width: 100%;
        }

        .main {
            margin-left: 0;
        }
    }

    .fa {
        margin-right: 10px;
    }
</style>
