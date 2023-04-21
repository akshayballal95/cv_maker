<script lang="ts">
    import type { Resume } from "../../input_model";

    export let selectedResume:Resume
</script>

{#each selectedResume.projects as project}
    <div class=" flex flex-col">
        <div class="flex flex-row">
            <p class="text-[12px] font-bold text-[#4e4d4d]">
                {project.title}
            </p>

        </div>
        <p class="text-[9px]">
            {project.start_date} - {project.end_date}
        </p>
        
        <ul class="list-disc text-justify">
            <p class="text-[9px]">{project.description}</p>
        </ul>
    </div>
{/each}