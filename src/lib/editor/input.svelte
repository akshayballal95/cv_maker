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

    async function updateResume() {
        await updateResumeService($user?.uid!, $selectedResume);
    }

    let openAI_output = [];


    async function submit() {
        
        $loading = true;
        openAI_output = await send_to_gpt(JSON.stringify({...$selectedResume,avatar:""}));
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
    $: submit;
</script>

<body>
    <div class="container">
        <div class="button-set">
            <button class="save-button" on:click={updateResume}>
                <i class="fa-solid fa-floppy-disk" /> Save</button
            >
            <button class="submit-button" on:click={submit}>
                Submit  <i class="fa-sharp fa-solid fa-arrow-right"></i></button
            >
        </div>

        <TargetCompany bind:targetCompany={$selectedResume.target_company} />
        <ProfileImage  bind:avatar={$selectedResume.avatar}/>
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
        background-color: #fff;
        gap:20px;
    }

    .save-button {
        display: inline-block;
        border: 2px solid #ccc;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        background-color: rgb(106, 192, 106);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .save-button:hover {
        background-color: #ccc;
    }

    .submit-button {
        display: inline-block;
        border: 2px solid #ccc;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        background-color: orange;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .submit-button:hover {
        background-color: #ccc;
    }

    .fa-floppy-disk {
        margin-right: 10px;
    }
    .button-set{
        align-self: flex-end;
    }

 

    /* Form fields */
</style>
