<script lang="ts">
    import { slide } from "svelte/transition";

    $: collapsed = true;
    function toggleCollapse() {
        collapsed = !collapsed;
    }
    export let name = "";


    export let items:any;
    let item: Education;
    // import "../../styles/form.css";
    import type { Education } from "../../input_model";
</script>

<div class="card w-full bg-base-100 shadow-xl">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="card-body">
        <h2 class="text-2xl" on:click={toggleCollapse}>{name}</h2>

        {#if !collapsed}
            <slot items={items}></slot>
        {/if}
    </div>
</div>

<style>
    /* .address-container {
        padding: 30px;
    } */
</style>
