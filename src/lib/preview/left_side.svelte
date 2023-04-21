<script lang="ts">
    import type { Resume } from "../../input_model";

    export let selectedResume: Resume;
</script>

<div
    class="w-[180px] bg-[#323B4C] flex flex-col gap-4 justify-between pt-8 pb-8 text-gray-300 font-Lato"
>
    <img
        alt="profile"
        class="w-[120px] h-[120px] rounded-full self-center"
        src={selectedResume.avatar}
    />

    <div class="flex flex-col pl-4 mt-2 gap-2">
        <div class="contact flex flex-col">
            <h1 class="text-lg">Contact</h1>
            <hr class="h-px  border-0 bg-white" />

        </div>
        <div>
            <p class=" text-[12px] font-semibold">Phone</p>
            <p class="text-[10px] tracking-wide font-normal">
                {selectedResume.personal_information.phone_number}
            </p>
        </div>
        <div>
            <p class=" text-[12px] font-semibold">Email</p>
            <p class="text-[10px] tracking-wide font-normal">
                {selectedResume.personal_information.email}
            </p>
        </div>
        <div>
            <p class=" text-[12px] font-semibold">Address</p>
            <p class="text-[10px] tracking-wide font-normal">
                {selectedResume.address.address_line_1}
            </p>
            <p class="text-[10px] tracking-wide font-normal">
                {selectedResume.address.address_line_2}
            </p>
            <p class="text-[10px] tracking-wide font-normal">
                {selectedResume.address.city}: {selectedResume.address.pincode}
            </p>
        </div>
    </div>

    <div class="flex flex-col pl-4 mt-2 gap-2">
        <div class="contact flex flex-col">
            <h1 class="text-lg">Education</h1>
            <hr class="h-px  border-0 bg-white" />
        </div>
        {#each selectedResume.education as education}
            <div>
                <p class=" text-[12px] font-semibold">
                    {education.start_date} - {education.end_date}
                </p>
                <p class=" text-[12px] font-semibold">
                    {education.institute_name}
                </p>
                <p class="text-[10px] tracking-wide font-normal">
                    {education.degree}
                </p>
                <p class="text-[10px] tracking-wide font-normal">
                    {education.field}
                </p>
            </div>
            <div />
        {/each}
    </div>
    <div class="flex flex-col pl-4 mt-2 gap-2">
        <div class="contact flex flex-col">
            <h1 class="text-lg">Expertise</h1>
            <hr class="h-px  border-0 bg-white" />
        </div>
        <ul class="list-disc flex flex-col gap-1 ml-3">
            <li class=" text-[12px] font-semibold ">Project Management</li>
            <li class=" text-[12px] font-semibold ">Modeling</li>
            <li class=" text-[12px] font-semibold ">Leadership</li>
            <li class=" text-[12px] font-semibold ">Patents</li>
        </ul>
    </div>

    <div class="flex flex-col pl-4 mt-2 gap-2">
        <div class="contact flex flex-col">
            <h1 class="text-lg">Languages</h1>
            <hr class="h-px  border-0 bg-white" />
        </div>
        <ul class="list-disc ml-3 flex flex-col gap-1">
            <li class=" text-[12px] font-semibold ">English</li>
            <li class=" text-[12px] font-semibold ">Hindi</li>
        </ul>
    </div>
</div>
