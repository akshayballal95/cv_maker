<script lang="ts">
    import About from "./about.svelte";
    import Address from "./address.svelte";
    import Education from "./education.svelte";
    import Experience from "./experience.svelte";
    import Projects from "$lib/editor/projects.svelte";
    import item from "../../resume.json";
    import ProfileImage from "./profileImage.svelte";
    import { selectedResume, updateResumeService } from "$lib/stores/ResumeStore"
    import {user} from "$lib/stores/AuthStore"
    import TargetCompany from "./target_company.svelte";

    async function updateResume(){
        await updateResumeService($user?.uid!, $selectedResume)
    }

</script>

<body>
    <div class="container">
        <button on:click={updateResume}> Save</button>
        <TargetCompany bind:targetCompany = {$selectedResume.target_company}/>
        <ProfileImage bind:avatar = {$selectedResume.avatar}/>
        <About bind:personal_information={$selectedResume.personal_information} />
        <Address bind:address={$selectedResume.address} />
        <Education bind:educations={$selectedResume.education} />
        <Experience bind:work_exps={$selectedResume.work_experience} />
        <Projects bind:projects = {$selectedResume.projects } />
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
