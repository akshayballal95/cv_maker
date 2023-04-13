<script lang="ts">
    import { WorkExperience } from "../../input_model";
    import "../../styles/form.css";
    let exp1: WorkExperience = new WorkExperience();
    export let work_exps = [exp1];

    function add_experience() {
        work_exps = [...work_exps, new WorkExperience()];
    }

    $: add_experience;
</script>

<body>
    <div class="card-container">
        <h2>Work</h2>
        {#each work_exps as work, i}
            <h3>Experience {i + 1}</h3>
            <div class="education-grid">
                <div>
                    <label for="institution">Company Name</label>
                    <input
                        type="text"
                        id="institution-name"
                        name="institution-name"
                        bind:value={work.company_name}
                    />
                </div>
                <div>
                    <label for="job_title">Job Title</label>
                    <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        bind:value={work.job_title}
                    />
                </div>
                <div>
                    <label for="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        bind:value={work.city}
                    />
                </div>

                <div>
                    <label for="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        bind:value={work.country}
                    />
                </div>
                <div>
                    <label for="end_date">End Date</label>
                    <input
                        type="text"
                        id="end_date"
                        name="end_date"
                        bind:value={work.end_date}
                    />
                </div>
                <div>
                    <label for="start_date">Start Date</label>
                    <input
                        type="text"
                        id="start_date"
                        name="start_date"
                        bind:value={work.start_date}
                    />
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        bind:value={work.description}
                    />
                </div>
            </div>
        {/each}

        <button class="add_exp" on:click={add_experience}>
            Add Experience
        </button>
    </div></body
>

<style>
    .education-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0 30px;
    }

    .education-grid > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }
    .education-grid > :nth-child(2) {
        grid-area: 1 / 2 / 3 / 2;
    }
    .education-grid > :nth-child(3) {
        grid-area: 2 / 1 / 2 / 2;
    }
    .education-grid > :nth-child(4) {
        grid-area: 2 / 2 / 4 / 2;
    }
    .education-grid > :nth-child(5) {
        grid-area: 3 / 2 / 4 / 3;
    }
    .education-grid > :nth-child(6) {
        grid-area: 3/1/3/2;
    }
    .education-grid > :nth-child(7) {
        grid-area: 4 / 1 / 4 / 3;
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
