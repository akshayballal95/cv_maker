<script lang="ts">
    import { user } from "$lib/stores/AuthStore";
    import {
        deleteResumeService,
        selectedResume,
    } from "$lib/stores/ResumeStore";
    import type { Resume } from "../../input_model";
    import "../../styles/form.css"

    export let resume: Resume;

    function selectResume() {
        $selectedResume = resume;
    }
    function deleteResume() {
        deleteResumeService($user?.uid!, resume.id);
    }
</script>
<body>
<div on:click={selectResume} on:keydown={() => {}} class="container">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class={$selectedResume.id == resume.id ? "active" : ""}>
        <i class="fa-solid fa-file"></i><span class="item">{resume.target_company.company_name}</span>
        {#if $selectedResume.id == resume.id }
            <i 
                on:click={deleteResume}
                on:keydown={() => {}}
                class="fa-solid fa-trash-can"
            />
        {/if}
    </a>
</div>
</body>
<style>


    body{
      
        width: 100%;
    }
    a {
        display: flex;
        color: #333;
        padding: 12px;
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight:500;
        font-size: 14px;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        border-radius: 5px;
    }

    a.active {
        background-color: #3f51b5;
        color: #fff;
    }

    a:hover:not(.active) {
        background-color: rgb(231, 231, 231);
        /* color: #fff; */
    }

    .fa-trash-can{
        margin-left: auto;
    }
</style>
