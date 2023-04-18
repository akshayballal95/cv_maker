<script lang="ts">
    import { slide } from "svelte/transition";

    $: collapsed = true;
    function toggleCollapse() {
        collapsed = !collapsed;
    }
    export let name = "";
   
    let item:Education;
    import "../../styles/form.css";
    import type { Education } from "../../input_model";
</script>

<div class="address-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click={toggleCollapse}>{name}</h2>

    {#if !collapsed}
        
            <div class="form-container" transition:slide>
                <slot/>
            </div>
        
    {/if}
</div>

<style>
    h2 {
        padding: 0;
        margin: 0;
        font-weight: 400;
    }
    .address-container {
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
</style>
