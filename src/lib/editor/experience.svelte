<script lang="ts">
    import { WorkExperience } from "../../input_model";
    import FormCard from "./formCard.svelte";
    import FormTemplate from "./formTemplate.svelte";
    let exp1: WorkExperience = new WorkExperience();
    export let work_exps: WorkExperience[];
    $: work_exps = [exp1];

    function add_experience() {
        work_exps = [...work_exps, new WorkExperience()];
    }
</script>

<body>
    <FormCard name="Work Experience">
        {#each work_exps as work, i}
            <FormTemplate name="Experience" bind:items={work_exps} index={i}>
                <div class="lg:grid grid-rows-4 grid-cols-2 gap-4">
                    <div class="col-span-2">
                        <label for="company-name" class="label">
                            <span class="label-text">Company Name</span>
                        </label>
                        <input
                            type="text"
                            id="company-name"
                            name="company-name"
                            bind:value={work.company_name}
                            class="input input-bordered w-full"
                        />
                    </div>
                    <div class="col-span-2">
                        <label for="job_title" class="label">
                            <span class="label-text">Job Title</span>
                        </label>
                        <input
                            type="text"
                            id="job_title"
                            name="job_title"
                            bind:value={work.job_title}
                            class="input input-bordered w-full"
                        />
                    </div>
                    <div>
                        <label for="city" class="label">
                            <span class="label-text">City</span>
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            bind:value={work.city}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div>
                        <label for="country" class="label">
                            <span class="label-text">Country</span>
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            bind:value={work.country}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div>
                        <label for="start_date" class="label">
                            <span class="label-text">Start Date Date</span>
                        </label>
                        <input
                            type="text"
                            id="start_date"
                            name="start_date"
                            bind:value={work.start_date}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div>
                        <label for="end_date" class="label">
                            <span class="label-text">End Date</span>
                        </label>
                        <input
                            type="text"
                            id="end_date"
                            name="end_date"
                            bind:value={work.end_date}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="col-span-2">
                        <label for="Description" class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            bind:value={work.description}
                            class="input input-bordered w-full"
                        />
                    </div>
                </div>
            </FormTemplate>
            <div class="divider" />
        {/each}
        <button
            class="btn btn-outline w-full mt-5 border-dashed"
            on:click={add_experience}
        >
            Add Experience
        </button>
    </FormCard>
</body>

<style>
</style>
