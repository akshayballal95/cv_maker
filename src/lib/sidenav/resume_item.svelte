<script lang="ts">
    import { user } from "$lib/stores/AuthStore";
    import {
        deleteResumeService,
        selectedResume,
    } from "$lib/stores/ResumeStore";
    import type { Resume } from "../../input_model";
    import "../../styles/form.css";

    export let resume: Resume;

    function selectResume() {
        $selectedResume = resume;
    }
    function deleteResume() {
        deleteResumeService($user?.uid!, resume.id);
    }
</script>

<body>
    <div on:click={selectResume} on:keydown={() => {}} class="w-full">
        <!-- svelte-ignore a11y-invalid-attribute -->

        <i class="fa-solid fa-file" /><p class="truncate w-14 grow"
            >{resume.target_company.company_name} - {resume.target_company
                .position}</p
        >
        {#if $selectedResume.id == resume.id}
            <i
                on:click={deleteResume}
                on:keydown={() => {}}
                class="fa-solid fa-trash-can"
            />
        {/if}
    </div>
</body>

<style>
    body {
        width: 100%;
    }
    div {
        display: flex;
        font-weight: 500;
        font-size: 14px;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
    }

</style>
