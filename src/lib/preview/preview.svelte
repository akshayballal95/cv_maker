<script>
    import { loading, resumes, selectedResume } from "$lib/stores/ResumeStore";

    import "../../styles/loader.css";

    import html2canvas from "html2canvas";
    import jsPDF from "jspdf";
    import LeftSide from "./left_side.svelte";
    import Introduction from "./introduction.svelte";
    import Experience from "$lib/preview/experience.svelte";
    import Project from "$lib/preview/project.svelte";

    function generatePDF() {
        let d = document.getElementById("resume");

        if (d != null) {
            html2canvas(d, {
                allowTaint:true,
                width: 595,
                height: 842,
                scale: 6,
            }).then((canvas) => {
                var imgData = canvas.toDataURL("../assets/png");
                var doc = new jsPDF("p", "mm");
                doc.addImage(imgData, "PNG", 0, 0, 210, 297);
                doc.save("resume.pdf");
            });
        }
    }
</script>

<body>
    <button class="btn" on:click={generatePDF}>Download</button>

    {#if $loading == true}
        <div class="loading-container">
            <div>populating fields based on information provided</div>
            <div class="loader-container">
                <div class="loader" />
            </div>
            <div>this may take a second...</div>
        </div>
    {/if}

    <div
        id="resume"
        class="container border-black border-solid border-2 h-[842px] w-[595px] flex"
    >
        <LeftSide bind:selectedResume={$selectedResume} />
        <div
            class=" w-[400px] pt-8 pl-4 pr-4 pb-8 font-Lato flex flex-col gap-4 justify-between text-[#6f6d6d]"
        >
            <Introduction bind:selectedResume={$selectedResume} />
            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-1">
                    <h1 class="text-[#2f3c55] font-semibold">Experience</h1>
                
                    <hr class="h-px  border-0 bg-gray-900" />
                </div>
                <Experience bind:selectedResume={$selectedResume} />
            </div>

            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-2">
                    <h1 class="text-[#2f3c55] font-semibold">Projects</h1>
                    <hr class="h-px  border-0 bg-gray-900" />

                </div>
                <Project bind:selectedResume={$selectedResume} />
            </div>
        </div>
    </div>
</body>

<style>
</style>
