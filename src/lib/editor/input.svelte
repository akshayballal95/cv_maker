<script lang="ts">
    import About from "./about.svelte";
    import Address from "./address.svelte";
    import Education from "./education.svelte";
    import Experience from "./experience.svelte";
    import Projects from "$lib/editor/projects.svelte";
    import item from "../../resume.json";
    import { send_to_gpt } from "../../openai";
    import type { Project, Resume } from "../../input_model";
    import ProfileImage from "./profileImage.svelte";
    import {resume } from "$lib/stores/ResumeStore"

    

</script>

<body>
    <div class="container">
        <input type="text" bind:value={$resume.company.company_name}/>
        <ProfileImage bind:avatar = {$resume.avatar}/>
        <About bind:personal_information={$resume.personal_information} />
        <Address bind:address={$resume.address} />
        <Education bind:educations={$resume.education} />
        <Experience bind:work_exps={$resume.work_experience} />
        <Projects bind:projects = {$resume.projects } />
    </div>

    
</body>

<style>


    /* Container */
    .container {
        margin: 0 auto;
        padding: 30px;
        background-color: #fff;
    }

    /* Form fields */
</style>
