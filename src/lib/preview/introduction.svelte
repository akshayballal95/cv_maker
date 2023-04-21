<script lang="ts">
    import type { Resume } from "../../input_model";

    export let selectedResume:Resume
</script>


    <div class="flex flex-col gap-0 ">
        <h1 class="leading-tight p-0 m-0">
            <span
                class="text-[32px] text-[#2f3c55] tracking-widest font-bold"
                >{selectedResume.personal_information.first_name}
            </span><span
                class="text-[32px]  tracking-widest font-light"
                >{selectedResume.personal_information.last_name}</span
            >
        </h1>
        <h2 class="text-[#2f3c55] tracking-widest  p-0 m-0 ">
            {selectedResume.personal_information.position}
            
        </h2>
        <p class="text-[9px] text-justify mt-2 ">
            {selectedResume.personal_information.introduction}
        </p>
    </div>
