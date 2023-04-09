<script>
    import { PersonalInformation } from "../input_model";
    import "../styles/form.css";
    export let personal_information = new PersonalInformation();
</script>

<body>
    <div class="card-container">
        <h2>Personal Information</h2>
        <div class="card-grid">
            <div>
                <label for="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    bind:value={personal_information.first_name}
                />
            </div>
            <div>
                <label for="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    bind:value={personal_information.last_name}
                />
            </div>
            <div>
                <label for="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    bind:value={personal_information.email}
                />
            </div>
            <div>
                <label for="phone">Phone Number:</label>
                <input
                    type="text"
                    id="phone-number"
                    name="phone-number"
                    bind:value={personal_information.phone_number}
                />
            </div>
        </div>
    </div>
</body>

<style>
    .card-grid {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0 30px;
    }

    h2 {
        padding: 0;
        margin-top: 0;
        font-weight: 400;
    }
</style>
