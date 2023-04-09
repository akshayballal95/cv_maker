<script lang = "ts">
    import About from "./about.svelte";
    import Address from "./address.svelte";
    import Education from "./education.svelte";
    import Experience from "./experience.svelte";
    import item from "../resume.json";
    import { send_to_gpt } from "../openai";

    $: resume = item;
    let ai_descriptions = [];

    async function showlog() {
        ai_descriptions = await send_to_gpt(JSON.stringify(resume));
        console.log(ai_descriptions);
        for (let i = 0; i < ai_descriptions.improved_job_roles.length; i++) {
            resume.work_experience[i].description =
                ai_descriptions.improved_job_roles[i].job_description;
        }

        console.log(await send_to_gpt(JSON.stringify(resume)));
    }
</script>

<body>
    <div class="container">
        <About bind:personal_information={resume.personal_information} />
        <Address bind:address={resume.address} />
        <Education bind:education={resume.education} />
        <Experience bind:work_exps={resume.work_experience} />
    </div>

    <button on:click={showlog}> SUBMIT </button>
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
