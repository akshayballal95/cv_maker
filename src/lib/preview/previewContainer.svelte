<script lang="ts">
    import type { Resume } from "../../input_model";
    import Experience from "./experience.svelte";
    import Introduction from "./introduction.svelte";
    import LeftSide from "./left_side.svelte";
    import Project from "./project.svelte";

    export let selectedResume: Resume;
</script>

<div
id="resume"
class="container border-black border-solid border-2 h-[842px] w-[595px] flex  "
>
<LeftSide bind:selectedResume={selectedResume} />
<div
    class=" w-[400px] pt-8 pl-4 pr-4 pb-8 font-Lato flex flex-col gap-4 justify-between text-[#6f6d6d]"
>
    <Introduction bind:selectedResume={selectedResume} />
    <div class="flex flex-col gap-2">
        <div class="flex flex-col">
            <h1 class="text-[#2f3c55] font-semibold">Experience</h1>

            <hr class="h-px border-0 bg-gray-900" />
        </div>
        <Experience bind:selectedResume={selectedResume} />
    </div>

    <div class="flex flex-col gap-2">
        <div class="flex flex-col">
            <h1 class="text-[#2f3c55] font-semibold">Projects</h1>
            <hr class="h-px border-0 bg-gray-900" />
        </div>
        <Project bind:selectedResume={selectedResume} />
    </div>
</div>
</div>