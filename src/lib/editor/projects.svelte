<script lang="ts">
    import { Project } from "../../input_model";
    import "../../styles/form.css";
    let exp1: Project = new Project();
    export let projects = [exp1];

    function add_experience() {
        projects = [...projects, new Project()];
    }

    $: add_experience;
</script>

<body>
    <div class="card-container">
        <h2>Projects</h2>
        {#each projects as project, i}
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
        {/each}

        <button class="add_exp" on:click={add_experience}>
            Add Project
        </button>
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
        margin-top: 0;
        font-weight: 400;
    }

    h3 {
        padding: 0;
        margin-top: 0;
        font-weight: 400;
    }

    .add_exp {
        width: 100%;
        padding: 15px;
        background-color: antiquewhite;
        background: none;
        color: inherit;
        border: 1px;
        border-style: dashed;
        border-color: black;

        font: inherit;
        cursor: pointer;
        outline: inherit;
    }

    .add_exp:hover {
        background-color: rgb(243, 243, 243);
    }
</style>
