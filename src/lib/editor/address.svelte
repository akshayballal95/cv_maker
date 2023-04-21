<script>
    import { Address } from "../../input_model";
    import "../../styles/form.css";
    import { slide } from "svelte/transition";
    import FormCard from "./formCard.svelte";

    export let address = new Address();

</script>

<body>
    <FormCard name="Address">
        <div class="lg:grid grid-cols-2 gap-4">
            <div class="col-span-2">
                <label for="address-line-1" class="label">
                    <span class="label-text">Address Line 1</span>
                </label>                <input 
                    type="text"
                    id="address-line-1"
                    name="address-line-1"
                    bind:value={address.address_line_1}
                    class="input input-bordered w-full "

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
   


</style>
