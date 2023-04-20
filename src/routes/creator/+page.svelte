<script lang="ts">
    import Input from "$lib/editor/input.svelte";
    import Preview from "$lib/preview/preview.svelte";
    import { send_to_gpt } from "../../openai";
    import { loading, selectedResume } from "$lib/stores/ResumeStore";
    import { user, isLoading } from "$lib/stores/AuthStore";
    import Sidenav from "$lib/sidenav/sidenav.svelte";

    let openAI_output = [];

    let innerWidth = 0
    let innerHeight = 0

    async function showlog() {
        $loading = true;
        openAI_output = await send_to_gpt(JSON.stringify($selectedResume));
        $loading = false;

        $selectedResume.personal_information.introduction =
            openAI_output.introduction;
        console.log(openAI_output);
        for (let i = 0; i < openAI_output.improved_job_roles.length; i++) {
            $selectedResume.work_experience[i].description =
                openAI_output.improved_job_roles[i].job_description.join("\n");
        }

        for (let i = 0; i < openAI_output.projects.length; i++) {
            $selectedResume.projects[i].description =
                openAI_output.projects[i].description;
        }
        console.log($selectedResume);
        console.log(await send_to_gpt(JSON.stringify($selectedResume)));
    }
    $: showlog;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
</svelte:head>

{#if $isLoading == false && $user}
    <div class="container">

        {#if innerWidth>600}
        <Sidenav   />
        {/if}

        <div class="editor"><Input /></div>

        <div class="output"><Preview /></div>
    </div>
{/if}

<style>
    .container {
        margin: 0px;
        height: 100vh;
        display: flex;
    }

    .editor {
        height: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        flex: 3 1 auto;
        min-width: 600px;
    }

    .output {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex: 3 1 auto;
    }

    @media (max-width: 850px) {
        /* .editor {
            min-width: 400px;
        } */

    }

    @media (max-width: 450px) {
        .container{
            flex:none;
        }
        .editor {
            flex:none;
            min-width:0;
            width: 100vw;

        }
        .output{
            display:none
        }
    
    }
</style>
