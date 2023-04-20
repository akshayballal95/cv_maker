<script lang="ts">
    import Input from "$lib/editor/input.svelte";
    import Preview from "$lib/preview/preview.svelte";
    import { send_to_gpt } from "../../openai";
    import { loading, selectedResume } from "$lib/stores/ResumeStore";
    import { user, isLoading } from "$lib/stores/AuthStore";
    import Sidenav from "$lib/sidenav/sidenav.svelte";
    import { get } from "svelte/store";

    let openAI_output = [];

    let innerWidth = 0;
    let innerHeight = 0;


</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
</svelte:head>

{#if $isLoading == false && $user}
    <div class="container">
            <Sidenav />
         


    </div>
{/if}

<style>

 

</style>
