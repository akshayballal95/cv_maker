<script lang="ts">
    import Input from "$lib/editor/input.svelte";
    import Preview from "$lib/preview/preview.svelte";
    import type { Resume } from "../input_model";
    import { send_to_gpt } from "../openai";
    import item from "../resume.json";
    import {loading} from '../stores/ResumeStore';


    export let resume_object = item as Resume;
    let openAI_output = [];


    async function showlog() {
        $loading = true
        openAI_output = await send_to_gpt(JSON.stringify(resume_object));
        $loading = false;

        resume_object.personal_information.introduction =
            openAI_output.introduction;
        console.log(openAI_output);
        for (let i = 0; i < openAI_output.improved_job_roles.length; i++) {
            resume_object.work_experience[i].description =
                openAI_output.improved_job_roles[i].job_description.join("\n");
        }

        for (let i = 0; i < openAI_output.projects.length; i++) {
            resume_object.projects[i].description =
                openAI_output.projects[i].description;
        }
        console.log(resume_object);
        console.log(await send_to_gpt(JSON.stringify(resume_object)));
    }
    $: showlog;
</script>

<div class="container">
    <div class="side-nav"><button on:click={showlog}> SUBMIT </button></div>
    <div class="editor"><Input bind:resume_object /></div>
    <div class="output">
        <div class="preview"><Preview bind:resume_object /></div>
    </div>
</div>

<style>
    .container {
        margin: 0px;
        height: 100%;
        display: flex;
    }

    .side-nav {
        background-color: orange;
        width: 15em;
    }
    .editor {
        height: 100vh;
        box-sizing: border-box;
        overflow: scroll;
        flex: 1 1 auto;
    }

    .output {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: 3 1 auto;
    }

    .preview {
        width: 595px;
        height: 842px;
        border: 1px;
        border-color: black;
        border-style: solid;
    }
</style>
