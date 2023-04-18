<script lang="ts">
    import { slide } from "svelte/transition";
    import { Project } from "../../input_model";
    import "../../styles/form.css";
    let exp1: Project = new Project();
    export let projects = [exp1];

    function add_experience() {
        projects = [...projects, new Project()];
    }

    $: collapsed = true;
    function toggleCollapse() {
        collapsed = !collapsed;
    }

    $: add_experience;
</script>

<body>
    <div class="card-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h2 on:click={toggleCollapse}>Projects</h2>
        {#if !collapsed}

        {#each projects as project, i}
        <div class = "form-container" transition:slide>

            <h3>Project {i + 1}</h3>
            <div class="education-grid">
                <div>
                    <label for="title">Title</label>
                    <input
                        type="text"
                        id="institution-name"
                        name="institution-name"
                        bind:value={project.title}
                    />
                </div>
                <div>
                    <label for="start_date">Start Date</label>
                    <input
                        type="text"
                        id="start_date"
                        name="start_date"
                        bind:value={project.start_date}
                    />
                </div>
                <div>
                    <label for="end_date">End Date</label>
                    <input
                        type="text"
                        id="end_date"
                        name="end_date"
                        bind:value={project.end_date}
                    />
                </div>

                <div>
                    <label for="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        bind:value={project.description}
                    />
                </div>
            </div>
            </div>
        {/each}
        <button class="add_btn" on:click={add_experience}>
            Add Project
        </button>
        {/if}

      
    </div></body
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
