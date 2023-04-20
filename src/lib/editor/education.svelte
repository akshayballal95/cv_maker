<script>
    import { slide } from "svelte/transition";
    import { Education } from "../../input_model";
    import "../../styles/form.css";

    export let educations = [new Education()];

    function add_education() {
        educations = [...educations, new Education()];
    }

    $: collapsed = true;
    function toggleCollapse() {
        collapsed = !collapsed;
    }


    $: add_education;
</script>

<body>
    <div class="card-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <h2 class="text-2xl" on:click={toggleCollapse}>Education</h2>

        {#if !collapsed}
            {#each educations as education, i}
                <div class="form-container" transition:slide>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <h3 >Education {i + 1}</h3>
                    <div class="education-grid">
                        <div>
                            <label for="institution">Institution Name</label>
                            <input
                                type="text"
                                id="institution-name"
                                name="institution-name"
                                bind:value={education.institute_name}
                            />
                        </div>
                        <div>
                            <label for="field">Field of Study</label>
                            <input
                                type="text"
                                id="field"
                                name="field"
                                bind:value={education.field}
                            />
                        </div>
                        <div>
                            <label for="degree">Degree</label>
                            <input
                                type="text"
                                id="degree"
                                name="degree"
                                required
                                bind:value={education.degree}
                            />
                        </div>
                        <div>
                            <label for="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                bind:value={education.city}
                            />
                        </div>
                        <div>
                            <label for="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                bind:value={education.country}
                            />
                        </div>
                    </div>
                </div>
            {/each}
            <button class="add_btn" on:click={add_education}>
                Add Education
            </button>
        {/if}
    </div></body
>

<style>
    .education-grid {
        display: grid;
        margin-top: 15px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
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
        grid-area: 3 / 1 / 4 / 2;
    }
    .education-grid > :nth-child(5) {
        grid-area: 3 / 2 / 4 / 3;
    }

    h2 {
        padding: 0;
        margin: 0;
        font-weight: 400;
    }
    h3 {
        padding: 0;
        margin: 0;
        font-weight: 400;
    }
</style>
