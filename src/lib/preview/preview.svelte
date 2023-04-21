<script>
    import { loading, resumes, selectedResume } from "$lib/stores/ResumeStore";

    import "../../styles/loader.css";

    import html2canvas from "html2canvas";
    import jsPDF from "jspdf";
    import LeftSide from "./left_side.svelte";
    import Introduction from "./introduction.svelte";
    import Experience from "$lib/preview/experience.svelte";
    import Project from "$lib/preview/project.svelte";
    import { slide } from "svelte/transition";

    function generatePDF() {
        let d = document.getElementById("resume");
        d?.classList.replace("scale-75","scale-100")
        if (d != null) {
            html2canvas(d, {
                allowTaint: true,
                width: 595,
                height: 842,
                scale: 3,
            }).then((canvas) => {
                canvas.getContext("2d");
                var imgData = canvas.toDataURL("../assets/png");
                var doc = new jsPDF("p", "mm");
                doc.addImage(imgData, "PNG", 0, 0, 210, 297);
                doc.save("resume.pdf");
                d?.classList.replace("scale-100","scale-75")
            });
        }
    }
    
</script>

<body>
 

    <button
        on:click={generatePDF}
        title="Contact Sale"
        class="fixed z-90 bottom-10 right-8 btn btn-accent text-white hover:bg-blue-700 hover:drop-shadow-2xl "
        >Download <i class="fa-solid fa-download ml-2"></i></button
    >

    <div
        id="resume"
        class="container border-black border-solid border-2 h-[842px] w-[595px] flex  "
    >
        <LeftSide bind:selectedResume={$selectedResume} />
        <div
            class=" w-[400px] pt-8 pl-4 pr-4 pb-8 font-Lato flex flex-col gap-4 justify-between text-[#6f6d6d]"
        >
            <Introduction bind:selectedResume={$selectedResume} />
            <div class="flex flex-col gap-2">
                <div class="flex flex-col">
                    <h1 class="text-[#2f3c55] font-semibold">Experience</h1>

                    <hr class="h-px border-0 bg-gray-900" />
                </div>
                <Experience bind:selectedResume={$selectedResume} />
            </div>

            <div class="flex flex-col gap-2">
                <div class="flex flex-col">
                    <h1 class="text-[#2f3c55] font-semibold">Projects</h1>
                    <hr class="h-px border-0 bg-gray-900" />
                </div>
                <Project bind:selectedResume={$selectedResume} />
            </div>
        </div>
    </div>
</body>

<style>
</style>
