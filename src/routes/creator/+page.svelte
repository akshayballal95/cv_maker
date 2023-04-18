
<script lang="ts">
    import Input from "$lib/editor/input.svelte";
    import Preview from "$lib/preview/preview.svelte";
    import { send_to_gpt } from "../../openai";
    import { loading, selectedResume } from "$lib/stores/ResumeStore";
    import { user, isLoading } from "$lib/stores/AuthStore";
    import Sidenav from "$lib/sidenav/sidenav.svelte";


    let openAI_output = [];

    async function showlog() {
        $loading = true;
        openAI_output = await send_to_gpt(JSON.stringify($selectedResume));
        $loading = false;

        $selectedResume.personal_information.introduction = openAI_output.introduction;
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
        <Sidenav />

        <div class="editor"><Input /></div>
        

        <div class="output">
            <div class="preview"><Preview /></div>
        </div>
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
        overflow: scroll;
        width: 600px;
        /* flex: 1 1 auto; */
    }

    .output {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: 3 1 auto;
    }

    .preview {
        overflow: scroll;
        aspect-ratio: 1.414;
        height:100%;
        border: 1px;
        border-color: black;
        border-style: solid;
    }
</style>
