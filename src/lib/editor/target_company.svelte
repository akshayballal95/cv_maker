<script>
    import { TargetCompany } from "../../input_model";
    import FormCard from "./formCard.svelte";
    export let targetCompany = new TargetCompany();
</script>

<body>
    <FormCard name="Target Company">
        <div class="lg:grid grid-rows-2 grid-cols-2 gap-4">
            <div>
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
