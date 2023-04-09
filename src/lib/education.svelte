<script>
    import { Education } from "../input_model";
    import "../styles/form.css";

    export let education = new Education();
</script>

<body>
    <div class="card-container">
        <h2>Education</h2>

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
        margin-top: 0;
        font-weight: 400;
    }
</style>
