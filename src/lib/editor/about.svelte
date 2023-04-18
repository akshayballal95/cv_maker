<script>
    import { PersonalInformation } from "../../input_model";
    import "../../styles/form.css";
    import FormTemplate from "./formTemplate.svelte";
    export let personal_information = new PersonalInformation();
</script>

<body>
    
<FormTemplate name = "Personal Information">
    <div class="about-grid">
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
        <div>
            <label for="postion">Position</label>
            <input
                type="text"
                id="position"
                name="position"
                bind:value={personal_information.position}
            />
        </div>
        <div>
            <label for="introduction">Introduction</label>
            <textarea
                id="introduction"
                name="introduction"
                bind:value={personal_information.introduction}
            />
        </div>
   
</div>
</FormTemplate>
       </body
>

<style>
    .about-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0 30px;
    }
    .about-container {
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .about-grid > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }
    .about-grid > :nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
    }
    .about-grid > :nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
    }
    .about-grid > :nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
    }
    .about-grid > :nth-child(5) {
        grid-area: 3 / 1 / 4 / 3;
    }
    .about-grid > :nth-child(6) {
        grid-area: 4 / 1 / 5 / 3;
    }
    h2 {
        padding: 0;
        margin-top: 0;
        font-weight: 400;
    }
</style>
