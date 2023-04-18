<script>
    import { TargetCompany } from "../../input_model";
    import "../../styles/form.css";
    import FormTemplate from "./formTemplate.svelte";
    export let targetCompany = new TargetCompany();
</script>

<body>
  <FormTemplate name = "Target Company"> <div class="company-grid">
    <div>
        <label for="company-line-1">Company Name</label>
        <input
            type="text"
            id="company-line-1"
            name="company-line-1"
            bind:value={targetCompany.company_name}
        />
    </div>

    <div>
        <label for="company-line-2">Job Description</label>
        <textarea
            id="company-line-2"
            name="company-line-2"
            bind:value={targetCompany.job_description}
        />
    </div>
</div>
</FormTemplate>
           
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
