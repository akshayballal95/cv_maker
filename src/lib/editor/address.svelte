<script>
    import { Address } from "../../input_model";
    import "../../styles/form.css";
    import { slide } from "svelte/transition";
    import FormTemplate from "./formTemplate.svelte";

    export let address = new Address();

</script>

<body>
    <FormTemplate name="Address">
        <div class="address-grid">
            <div>
                <label for="address-line-1">Address Line 1</label>
                <input
                    type="text"
                    id="address-line-1"
                    name="address-line-1"
                    bind:value={address.address_line_1}
                />
            </div>

            <div>
                <label for="address-line-2">Address Line 2</label>
                <input
                    type="text"
                    id="address-line-2"
                    name="address-line-2"
                    bind:value={address.address_line_2}
                />
            </div>

            <div>
                <label for="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    bind:value={address.city}
                />
            </div>

            <div>
                <label for="pincode">Pincode</label>
                <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    bind:value={address.pincode}
                />
            </div>
        </div>
    </FormTemplate>
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
