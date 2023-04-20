<script>
    import { slide } from "svelte/transition";
    import { Education } from "../../input_model";
    import FormCard from "./formCard.svelte";
    import FormTemplate from "./formTemplate.svelte";
    import "../../styles/form.css";

    export let educations = [new Education()];
    $: educations;

    function add_education() {
        educations = [...educations, new Education()];
    }
</script>

<body>
    <FormCard name="Education">
        {#each educations as education, i}
            <FormTemplate name="Education" bind:items={educations} index={i}>
                <div class="container grid grid-cols-2 grid-rows-3 gap-4">
                    <div class="col-span-2">
                        <label for="institution-name" class="label">
                            <span class="label-text">Institution Name</span>
                        </label>
                        <input
                            type="text"
                            id="institution-name"
                            name="institution-name"
                            bind:value={education.institute_name}
                            class="input input-bordered w-full "
                        />
                    </div>
                    <div>
                        <label for="Field" class="label">
                            <span class="label-text">Field of Study</span>
                        </label>
                        <input
                            type="text"
                            id="field"
                            name="field"
                            bind:value={education.field}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="">
                        <label for="degree" class="label">
                            <span class="label-text">Degree</span>
                        </label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            required
                            bind:value={education.degree}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div>
                        <label for="start-date" class="label">
                            <span class="label-text">Start Date</span>
                        </label>
                        <input
                            type="text"
                            id="start_date"
                            name="start_date"
                            bind:value={education.start_date}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="">
                        <label for="end_date" class="label">
                            <span class="label-text">End Date</span>
                        </label>
                        <input
                            type="text"
                            id="end_date"
                            name="end_date"
                            required
                            bind:value={education.end_date}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="">
                        <label for="city" class="label">
                            <span class="label-text">City</span>
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            bind:value={education.city}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div>
                        <label for="degree" class="label">
                            <span class="label-text">Country</span>
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            bind:value={education.country}
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                </div></FormTemplate
            >
            <div class="divider" />
        {/each}
        <button class="btn btn-outline w-full mt-5 border-dashed" on:click={add_education}> Add Education </button>

    </FormCard>
</body>

<style>
</style>
