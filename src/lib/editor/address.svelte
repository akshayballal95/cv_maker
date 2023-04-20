<script>
    import { Address } from "../../input_model";
    import "../../styles/form.css";
    import { slide } from "svelte/transition";
    import FormCard from "./formCard.svelte";

    export let address = new Address();

</script>

<body>
    <FormCard name="Address">
        <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
                <label for="address-line-1" class="label">
                    <span class="label-text">Address Line 1</span>
                </label>                <input
                    type="text"
                    id="address-line-1"
                    name="address-line-1"
                    bind:value={address.address_line_1}
                    class="input input-bordered w-full"

                />
            </div>

            <div class="col-span-2">
                <label for="address-line-2" class="label">
                    <span class="label-text">Address Line 2</span>
                </label>                <input
                    type="text"
                    id="address-line-2"
                    name="address-line-2"
                    bind:value={address.address_line_2}
                    class="input input-bordered w-full"

                />
            </div>

            <div>
                <label for="city" class="label">
                    <span class="label-text">City</span>
                </label>                <input
                    type="text"
                    id="city"
                    name="city"
                    bind:value={address.city}
                    class="input input-bordered w-full"

                />
            </div>

            <div>
                <label for="pincode" class="label">
                    <span class="label-text">Pincode</span>
                </label>                <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    bind:value={address.pincode}
                    class="input input-bordered w-full"

                />
            </div>
        </div>
    </FormCard>
</body>

<style>
    p {
        margin: 10px 0 0;
    }
    .address-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0 30px;
    }

 
    .address-grid > :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
    }
    .address-grid > :nth-child(2) {
        grid-area: 2 / 1 / 3 / 3;
    }
    .address-grid > :nth-child(3) {
        grid-area: 3 / 1 / 4 / 2;
    }
    .address-grid > :nth-child(4) {
        grid-area: 3 / 2 / 4 / 3;
    }


</style>
