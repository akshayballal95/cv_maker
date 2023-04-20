<script lang="ts">
    import { slide } from "svelte/transition";
    import { Project } from "../../input_model";
    import "../../styles/form.css";
    import FormCard from "./formCard.svelte";
    import FormTemplate from "./formTemplate.svelte";
    let exp1: Project = new Project();
    export let projects = [exp1];
    $: projects
    function add_project() {
        projects = [...projects, new Project()];
    }

    $: collapsed = true;
    function toggleCollapse() {
        collapsed = !collapsed;
    }

</script>

<body>
<FormCard name="Projects">

        {#each projects as project, i}
        <FormTemplate name="Projects" bind:items = {projects} index = {i}>

            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                    <label for = "title" class="label">
                        <span class="label-text">Title</span>
                      </label>                      <input
                        type="text"
                        id="title"
                        name="title"
                        bind:value={project.title}
                        class="input input-bordered w-full"

                    />
                </div>
                <div>
                    <label for = "start-date" class="label">
                        <span class="label-text">Start Date</span>
                      </label>                      <input
                        type="text"
                        id="start_date"
                        name="start_date"
                        bind:value={project.start_date}
                        class="input input-bordered w-full"

                    />
                </div>
                <div>
                    <label for = "end_date" class="label">
                        <span class="label-text">End Date</span>
                      </label>                      <input
                        type="text"
                        id="end_date"
                        name="end_date"
                        bind:value={project.end_date}
                        class="input input-bordered w-full"

                    />
                </div>

                <div class= "col-span-2">
                    <label for = "description" class="label">
                        <span class="label-text">Description</span>
                      </label>                      <textarea
                        id="description"
                        name="description"
                        bind:value={project.description}
                        class="input input-bordered w-full"

                    />
                </div>
            </div>
     </FormTemplate>
        
        {/each}
        <button class="btn btn-outline w-full mt-5 border-dashed" on:click={add_project}> Add Project </button>

       

      
    </FormCard></body
>

<style>
    .education-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        gap: 0 30px;
    }

    .education-grid > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
    }
    .education-grid > :nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
    }
    .education-grid > :nth-child(3) {
        grid-area: 2 / 2 / 3 / 3;
    }
    .education-grid > :nth-child(4) {
        grid-area: 3 / 1 / 4 / 3;
    }

    h2 {
        padding: 0;
        margin: 0;
        font-weight: 400;
    }

    h3 {
        padding: 0;
        margin-top: 0;
        font-weight: 400;
    }

    
</style>
