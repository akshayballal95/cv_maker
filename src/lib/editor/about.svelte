<script>
    import { PersonalInformation } from "../../input_model";
    import FormCard from "./formCard.svelte";
    export let personal_information = new PersonalInformation();
</script>

<body>
    <FormCard name="Personal Information">
        <div class="lg:grid grid-cols-2 gap-4">
            <div>
                <label for="first-name" class="label">
                    <span class="label-text">First Name</span>
                </label>
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    bind:value={personal_information.first_name}
                    class="input input-bordered w-full"
                />
            </div>
            <div>
                <label for="last-name" class="label">
                    <span class="label-text">Last Name</span>
                </label>                <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    bind:value={personal_information.last_name}
                    class="input input-bordered w-full"
                />
            </div>

            <div>
                <label for="email" class="label">
                    <span class="label-text">Email</span>
                </label>                <input
                    type="text"
                    id="email"
                    name="email"
                    bind:value={personal_information.email}
                    class="input input-bordered w-full"
                />
            </div>
            <div>
                <label for="phone-number" class="label">
                    <span class="label-text">Phone Number</span>
                </label>                <input
                    type="text"
                    id="phone-number"
                    name="phone-number"
                    bind:value={personal_information.phone_number}
                    class="input input-bordered w-full"
                />
            </div>
            <div class="col-span-2">
                <label for="position" class="label">
                    <span class="label-text">Job Position</span>
                </label>                <input
                    type="text"
                    id="position"
                    name="position"
                    bind:value={personal_information.position}
                    class="input input-bordered w-full"
                />
            </div>
            <div class="col-span-2">
                <label for="introduction" class="label">
                    <span class="label-text">Introduction</span>
                </label>                <textarea
                    id="introduction"
                    name="introduction"
                    bind:value={personal_information.introduction}
                    class="input input-bordered w-full"
                />
            </div>
        </div>
    </FormCard>
</body>

<style>
   
</style>
