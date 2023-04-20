<script lang="ts">
    import { slide } from "svelte/transition";

    export let items: any[];
    $: items;
    export let index: any;
    export let name: string;

    function delete_experience(i: number) {
        console.log(i);
        items = items.filter((e) => items.indexOf(e) != i);
    }
</script>

<div class="form-container flex flex-col ">
    <div class="flex justify-between items-center">
        <h3 class="text-xl">{name} {index + 1}</h3>
        <button
            on:click={() => delete_experience(index)}
            on:keydown={() => {}}
            class="btn"
        >
            <i class="fa-solid fa-trash-can" /></button
        >
    </div>
    <slot />
</div>
