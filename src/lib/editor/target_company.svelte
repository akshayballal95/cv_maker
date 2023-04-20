<script>
    import { TargetCompany } from "../../input_model";
    import "../../styles/form.css";
    import FormCard from "./formCard.svelte";
    export let targetCompany = new TargetCompany();
</script>

<body>
    <FormCard name="Target Company">
        <div class="grid grid-rows-2 grid-cols-2 gap-4">
            
            <div >
                <label for="company_name" class="label">
                    <span class="label-text">Company Name</span>
                </label>
                <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    bind:value={targetCompany.company_name}
                    class="input input-bordered w-full max-w-xs"
                />
            </div>

            <div>
                <label for="position" class="label">
                    <span class="label-text">Position</span>
                </label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    bind:value={targetCompany.position}
                    class="input input-bordered w-full max-w-xs"
                />
            </div>

            <div class="col-span-2">
                <label for="job_description" class="label">
                    <span class="label-text">Job Description</span>
                </label>
                <textarea
                    id="job_description"
                    name="job_description"
                    bind:value={targetCompany.job_description}
                    class="input input-bordered w-full"
                />
            </div>
        </div>
    </FormCard>
</body>

<style>
    .company-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        gap: 0 30px;
    }

    .company-container {
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .company-grid > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
    }
    .company-grid > :nth-child(2) {
        grid-area: 2 / 1 / 3 / 3;
    }
    .company-grid > :nth-child(3) {
        grid-area: 3 / 1 / 4 / 2;
    }
    .company-grid > :nth-child(4) {
        grid-area: 3 / 2 / 4 / 3;
    }

    h2 {
        padding: 0;
        margin-top: 0;
        font-weight: 400;
    }
</style>
