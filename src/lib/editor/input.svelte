<script lang="ts">
    import About from "./about.svelte";
    import Address from "./address.svelte";
    import Education from "./education.svelte";
    import Experience from "./experience.svelte";
    import Projects from "$lib/editor/projects.svelte";
    import item from "../../resume.json";
    import { send_to_gpt } from "../../openai";
    import type { Project, Resume } from "../../input_model";

    export let resume_object :Resume;

</script>

<body>
    <div class="container">
        <About bind:personal_information={resume_object.personal_information} />
        <Address bind:address={resume_object.address} />
        <Education bind:education={resume_object.education} />
        <Experience bind:work_exps={resume_object.work_experience} />
        <Projects bind:projects = {resume_object.projects } />
    </div>

    
</body>

<style>
    /* Font */
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
    }

    /* Container */
    .container {
        margin: 0 auto;
        padding: 30px;
        background-color: #fff;
    }

    /* Form fields */
</style>
