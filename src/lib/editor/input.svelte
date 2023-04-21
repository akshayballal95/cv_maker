<script lang="ts">
    import About from "./about.svelte";
    import Address from "./address.svelte";
    import Education from "./education.svelte";
    import Experience from "./experience.svelte";
    import Projects from "$lib/editor/projects.svelte";
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
    import PreviewContainer from "$lib/preview/previewContainer.svelte";
    import html2canvas from "html2canvas";

    $: showalert = false;
    $: preview = false;
    $: image = "";

    async function previewCall() {
        preview = !preview;

        let d = document.getElementById("res");
        d?.classList.remove("hidden");
        console.log(d);

        d?.classList.replace("scale-75", "scale-100");
        if (d != null) {
            html2canvas(d, {
                allowTaint: true,
                width: 595,
                height: 842,
                scale: 3,
            }).then((canvas) => {
                canvas.getContext("2d");
                image = canvas.toDataURL("../assets/png");
                console.log(image);
                d?.classList.add("hidden");
            });
        }
    }

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
                    openAI_output.improved_job_roles[
                        i
                    ].improved_job_descriptions.join("\n");
            }

            for (let i = 0; i < openAI_output.projects.length; i++) {
                $selectedResume.projects[i].description =
                    openAI_output.projects[i].improved_project_descriptions;
            }
            console.log($selectedResume);
            console.log(await send_to_gpt(JSON.stringify($selectedResume)));
        } catch {
            $loading = false;
        }
    }
</script>

<body>
    <div class="container">
        {#if $loading == true}
            <div
                transition:slide
                class="transition alert alert-info shadow-lg w-80 m-auto"
            >
                <div>
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                    <span>Populating fields.... please wait</span>
                </div>
            </div>
        {/if}
        {#if showalert}
            <div
                transition:slide
                class="transition alert alert-success shadow-lg w-4/5 m-auto"
            >
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
                <button class="btn loading" on:click={submit} disabled>
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

        <button class="btn drawer-button lg:hidden" on:click={previewCall}
            >Preview</button
        >

        <div id="res" class="hidden">
            <PreviewContainer bind:selectedResume={$selectedResume} />
        </div>
        {#if preview}
            <img class="lg:hidden" alt="" src={image} />
        {/if}
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
</style>
