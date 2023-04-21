<script>
    import { selectedResume } from "$lib/stores/ResumeStore";

    import html2canvas from "html2canvas";
    import jsPDF from "jspdf";

    import PreviewContainer from "./previewContainer.svelte";

    function generatePDF() {
        let d = document.getElementById("resume");
        d?.classList.replace("scale-75", "scale-100");
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
                d?.classList.replace("scale-100", "scale-75");
            });
        }
    }
</script>

<body>
    <button
        on:click={generatePDF}
        title="Contact Sale"
        class="fixed z-90 bottom-10 right-8 btn btn-accent text-white hover:bg-blue-700 hover:drop-shadow-2xl"
        >Download <i class="fa-solid fa-download ml-2" /></button
    >

    <PreviewContainer bind:selectedResume={$selectedResume} />
</body>

<style>
</style>
