<script lang="ts">
    import { slide } from "svelte/transition";

    $: collapsed = true;
    function toggleCollapse() {
        collapsed = !collapsed;
    }
    export let name = "";
</script>

<div class="card w-full bg-base-100 shadow-xl">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="card-body">
        <h2 class="text-2xl cursor-pointer" on:click={toggleCollapse}>
            {name}
        </h2>

        {#if !collapsed}
            <div class="lg:bg-base-300 lg:rounded lg:p-10" transition:slide>
                <slot />
            </div>
        {/if}
    </div>
</div>

<style>
    /* .address-container {
        padding: 30px;
    } */
</style>
