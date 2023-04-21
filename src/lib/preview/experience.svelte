<script lang="ts">
    import type { Resume } from "../../input_model";

    export let selectedResume: Resume;
</script>

{#each selectedResume.work_experience as experience}
    <div class=" flex flex-col">
        <p class="text-[10px]  text-[#2f3c55]">
            {experience.start_date} - {experience.end_date}
        </p>
        <div class="flex flex-row font-bold">
            <p class="text-[12px] text-[#2f3c55] ">
                {experience.company_name}&nbsp|&nbsp
            </p>

            <p class="text-[12px] text-[#2f3c55] ">{experience.country}</p>
        </div>
        <p class="text-[10px] font-bold text-[#2f3c55] ">{experience.job_title}</p>
        <ul class="list-disc mt-1 text-justify ml-2 ">
            {#each experience.description.split("\n") as des, i}
                <li class="text-[9px] text-justify ">
                    {des}
                </li>
            {/each}
        </ul>
    </div>
{/each}
