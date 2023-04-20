<script lang="ts">
    import About from "./about.svelte";
    import Address from "./address.svelte";
    import Education from "./education.svelte";
    import Experience from "./experience.svelte";
    import Projects from "$lib/editor/projects.svelte";
    import item from "../../resume.json";
    import ProfileImage from "./profileImage.svelte";
    import {
        loading,
        selectedResume,
        updateResumeService,
    } from "$lib/stores/ResumeStore";
    import { user } from "$lib/stores/AuthStore";
    import TargetCompany from "./target_company.svelte";
    import { send_to_gpt } from "../../openai";
    import { slide } from "svelte/transition";

    $: showalert = false;

    async function updateResume() {
        showalert = true;
        await updateResumeService($user?.uid!, $selectedResume);
        setTimeout(() => {
            showalert = false;
        }, 2000);
    }

    let openAI_output = [];

    async function submit() {
        try {
            $loading = true;
            openAI_output = await send_to_gpt(
                JSON.stringify({ ...$selectedResume, avatar: "" })
            );
            $loading = false;

            $selectedResume.personal_information.introduction =
                openAI_output.introduction;
            console.log(openAI_output);
            for (let i = 0; i < openAI_output.improved_job_roles.length; i++) {
                $selectedResume.work_experience[i].description =
                    openAI_output.improved_job_roles[i].improvements.join(
                        "\n"
                    );
            }

            for (let i = 0; i < openAI_output.projects.length; i++) {
                $selectedResume.projects[i].description =
                    openAI_output.projects[i].improvements;
            }
            console.log($selectedResume);
            console.log(await send_to_gpt(JSON.stringify($selectedResume)));
        } catch {
            $loading = false;
        }
    }
    $: submit;
</script>

<body>

    <div class="container">
        {#if showalert}
        <div transition:slide class="transition alert alert-success shadow-lg w-4/5 m-auto">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                >
                <span>Saved!</span>
            </div>
        </div>
    {/if}
        <label for="my-drawer-2" class="btn btn-square drawer-button lg:hidden"
            ><i class="fa-solid fa-bars fa-xl" /></label
        >
        <div class="button-set flex align-items-center justify-between">
            <button class="btn btn-success gap-2" on:click={updateResume}>
                <i class="fa-solid fa-floppy-disk" /> Save</button
            >

            {#if $loading == true}
                <button class="btn loading" on:click={submit}>
                    Submit <i
                        class="fa-sharp fa-solid fa-arrow-right"
                    /></button
                >
            {:else}
                <button class="btn btn-primary gap-2" on:click={submit}>
                    <i class="fa-regular fa-share-from-square" /> Submit
                </button>
            {/if}
        </div>

        <TargetCompany bind:targetCompany={$selectedResume.target_company} />
        <ProfileImage bind:avatar={$selectedResume.avatar} />
        <About
            bind:personal_information={$selectedResume.personal_information}
        />
        <Address bind:address={$selectedResume.address} />
        <Education bind:educations={$selectedResume.education} />
        <Experience bind:work_exps={$selectedResume.work_experience} />
        <Projects bind:projects={$selectedResume.projects} />
    </div>
</body>

<style>
    /* Container */
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        gap: 20px;
    }

    /* .button-set {
        align-self: flex-end;
        display: flex;
        align-items: center;
        gap: 20px;
    } */

    /* Form fields */
</style>
