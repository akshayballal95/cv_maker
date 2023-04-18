<script>
    import { loading, selectedResume } from "$lib/stores/ResumeStore";
    // import type { Resume } from "../../input_model";
    import avatar from "$lib/assets/photo.png";
    import oip from "$lib/assets/default.jpg";
    import "../../styles/loader.css";
    

    import html2canvas from "html2canvas";
    import jsPDF from "jspdf";

    function generatePDF() {
        let d = document.getElementById("resume")

        if(d!=null){
            
            html2canvas(d, {
                width: 595,
                height: 842,
                scale:6,
            }).then((canvas) => {
            var imgData = canvas.toDataURL("image/png");
            var doc = new jsPDF("p", "mm");
            doc.addImage(imgData, 'PNG', 0, 0, 200, 300);
            doc.save("resume.pdf");
        });
        }
       
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
    />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
    />
</svelte:head>

<body>
    <button on:click={generatePDF}/>
    <div id="resume" class="a4-1">
        {#if $loading == true}
            <div class="loading-container">
                <div>populating fields based on information provided</div>

                <div class="loader">Loading...</div>
                <div>this may take a second...</div>
            </div>
        {/if}

        <div class="a4-1">
            <div class="a4-1-child" />

            <div class="contact-header-parent">
                <div class="contact-header">
                    <b class="contact">Contact</b>
                    <div class="education-header-child" />
                </div>
                <div class="contact-information">
                    <div class="component-1">
                        <b class="phone">Phone</b>
                        <div class="div">
                            {$selectedResume.personal_information.phone_number}
                        </div>
                    </div>
                    <div class="component-2">
                        <b class="phone"><p class="email">Email</p></b>
                        <div class="div">
                            {$selectedResume.personal_information.email}
                        </div>
                    </div>
                    <div class="component-3">
                        <b class="address">Address</b>
                        <div class="mariana-anderson">
                            {$selectedResume.address.address_line_1}
                        </div>
                        <div class="mariana-anderson">
                            {$selectedResume.address.address_line_2}
                        </div>
                        <div class="mariana-anderson">
                            {$selectedResume.address.city}: {$selectedResume
                                .address.pincode}
                        </div>
                    </div>
                </div>
                <div class="contact-header">
                    <b class="contact">Education</b>
                    <div class="education-header-child" />
                </div>
                <div class="education-information">
                    {#each $selectedResume.education as education}
                        <div class="mariana-anderson-parent">
                            <div class="mariana-anderson">2008</div>
                            <b class="bachelor-of-engineering"
                                >{education.institute_name}</b
                            >
                            <div class="birla-institute-of">
                                {education.degree}
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="contact-header">
                    <b class="contact">Expertise</b>
                    <div class="education-header-child" />
                </div>
                <div class="expertise-information">
                    <b class="uiux"
                        ><ul class="uiux1">
                            <li class="uiux2">UI/UX</li>
                        </ul></b
                    ><b class="uiux"
                        ><ul class="uiux1">
                            <li class="uiux2">Wireframes</li>
                        </ul></b
                    ><b class="uiux"
                        ><ul class="uiux1">
                            <li class="uiux2">Storyboards</li>
                        </ul></b
                    ><b class="uiux"
                        ><ul class="uiux1">
                            <li class="uiux2">User Flows</li>
                        </ul></b
                    ><b class="uiux"
                        ><ul class="uiux1">
                            <li class="uiux2">Process Flows</li>
                        </ul></b
                    >
                </div>
                <div class="contact-header">
                    <b class="contact">Languages</b>
                    <div class="education-header-child" />
                </div>
                <div class="languages-information">
                    <b class="uiux">English</b><b class="spanish"
                        ><p class="email">Spanish</p></b
                    >
                </div>
            </div>
            <div class="frame-parent">
                <div class="introduction-wrapper">
                    <div class="introduction">
                        <div class="mariana-anderson-parent">
                            <div class="mariana-anderson">
                                <b
                                    >{$selectedResume.personal_information
                                        .first_name}</b
                                ><span>
                                    {$selectedResume.personal_information
                                        .last_name}</span
                                >
                            </div>
                            <div class="marketing-manager">
                                {$selectedResume.personal_information.position}
                            </div>
                        </div>
                        <div class="lorem-ipsum-dolor">
                            {$selectedResume.personal_information.introduction}
                        </div>
                    </div>
                </div>
                <header class="experience-parent">
                    <b class="contact">Experience</b>
                    <div class="frame-child" />
                </header>
                <div class="group-parent">
                    <div class="instance-parent">
                        {#each $selectedResume.work_experience as work, i}
                            <div class="parent">
                                <b class="b"
                                    >{work.start_date} - {work.end_date}</b
                                >
                                <div class="company-name">
                                    {work.company_name}
                                </div>
                                <b class="job-position-here">{work.job_title}</b
                                >
                                <ul
                                    class="lorem-ipsum-dolor1"
                                    style="padding-left: 10px; padding-top:0; margin-top:5px"
                                >
                                    {#each work.description.split("\n") as des, i}
                                        <li>
                                            {des}
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {/each}
                    </div>
                </div>
                <header class="experience-parent">
                    <b class="contact">Projects</b>
                    <div class="frame-child" />
                </header>
                <div class="frame-group">
                    {#each $selectedResume.projects as project, i}
                        <div class="rolling-stone-ball-parent">
                            <b class="job-position-here">{project.title}</b>
                            <div class="div5">
                                {project.start_date} - {project.end_date}
                            </div>
                            <div class="lorem-ipsum-dolor1">
                                {project.description}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            {#if $selectedResume.avatar}
                <img
                    class="photo-2022-11-07-12-51-02-1-icon"
                    alt=""
                    src={$selectedResume.avatar}
                />
            {:else}
                <img
                    class="photo-2022-11-07-12-51-02-1-icon"
                    alt=""
                    src={oip}
                />
            {/if}
        </div>
    </div></body
>

<style>
    body {
        margin: 0;
        line-height: normal;
    }

    :root {
        /* fonts */
        --font-lato: Lato;
        --font-nunito: Nunito;
        --font-inherit: inherit;

        /* font sizes */
        --font-size-5xs: 9px;
        --font-size-3xs: 11px;
        --font-size-xs: 12px;
        --font-size-mid: 17px;
        --font-size-lg: 18px;

        /* Colors */
        --color-white: #fff;
        --color-gray-100: #838383;
        --color-gray-200: #797979;
        --color-black: #000;
        --color-darkslategray: #323b4c;
        --color-dimgray: #6f6d6d;
        --color-whitesmoke: #f5f5f5;

        /* Gaps */
        --gap-9xs: 4px;

        /* Paddings */
        --padding-smi: 13px;
    }

    .a4-1-child {
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--color-darkslategray);
        width: 196px;
        height: 842px;
    }
    .mariana-anderson {
        align-self: stretch;
        position: relative;
        letter-spacing: 0.04em;
    }
    .marketing-manager {
        align-self: stretch;
        position: relative;
        font-size: 15px;
        color: var(--color-black);
        margin-top: -3px;
    }
    .mariana-anderson-parent {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .lorem-ipsum-dolor {
        align-self: stretch;
        position: relative;
        font-size: var(--font-size-5xs);
        letter-spacing: 0.04em;
        color: var(--color-gray-200);
        text-align: justify;
    }
    .introduction,
    .introduction-wrapper {
        display: flex;
        font-size: 32px;
        color: var(--color-darkslategray);
        font-family: var(--font-lato);
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-right: 10px;
    }
    .introduction {
        align-self: stretch;
        gap: 9px;
    }

    .contact {
        align-self: stretch;
        position: relative;
    }

    .contact-header {
        width: 177px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .div,
    .phone {
        position: absolute;
        height: 37.25%;
        width: 44.77%;
        top: 0;
        left: 0;
        letter-spacing: 0.04em;
        display: inline-block;
    }
    .div {
        height: 68.63%;
        width: 100%;
        top: 31.37%;
        font-size: var(--font-size-3xs);
        font-family: var(--font-lato);
    }
    .component-1 {
        align-self: stretch;
        position: relative;
        height: 51px;
        flex-shrink: 0;
    }
    .email {
        margin: 0;
    }
    .address,
    .component-2 {
        align-self: stretch;
        position: relative;
    }
    .component-2 {
        height: 51px;
        flex-shrink: 0;
        margin-top: -9px;
    }
    .address {
        font-size: var(--font-size-xs);
        letter-spacing: 0.04em;
        font-family: var(--font-nunito);
    }
    .component-3,
    .contact-information {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .component-3 {
        align-self: stretch;
        gap: 3px;
        margin-top: -9px;
        font-size: var(--font-size-3xs);
        font-family: var(--font-lato);
    }
    .contact-information {
        width: 239px;
        font-size: var(--font-size-xs);
    }
    .education-header-child {
        align-self: stretch;
        position: relative;
        border-top: 1px solid var(--color-whitesmoke);
        box-sizing: border-box;
        height: 1px;
        flex-shrink: 0;
    }
    .bachelor-of-engineering,
    .birla-institute-of {
        align-self: stretch;
        position: relative;
        letter-spacing: 0.04em;
    }
    .bachelor-of-engineering {
        font-size: var(--font-size-xs);
    }
    .birla-institute-of {
        font-family: var(--font-lato);
    }
    .education-information {
        width: 239px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 15px;
        font-size: var(--font-size-3xs);
    }
    .uiux2 {
        margin-bottom: 0;
    }
    .uiux1 {
        margin: 0;
        padding-left: var(--padding-smi);
    }
    .uiux {
        position: relative;
        display: inline-block;
        width: 121px;
        height: 24px;
        flex-shrink: 0;
        font-size: var(--font-size-3xs);
        font-family: var(--font-inherit);
    }
    .expertise-information {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: var(--font-inherit);
        font-family: var(--font-inherit);
    }
    .spanish {
        position: relative;
        display: inline-block;
        width: 121px;
        height: 24px;
        flex-shrink: 0;
        margin-top: -4px;
    }
    .contact-header-parent,
    .languages-information {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: var(--font-size-3xs);
    }
    .contact-header-parent {
        position: absolute;
        top: 169px;
        left: 19px;
        align-items: flex-start;
        gap: 14px;
        font-size: var(--font-size-lg);
        color: var(--color-white);
        font-family: var(--font-nunito);
    }
    .frame-child {
        align-self: stretch;
        position: relative;
        border-top: 1px solid var(--color-darkslategray);
        box-sizing: border-box;
        height: 1px;
        flex-shrink: 0;
    }
    .experience-parent {
        width: 358px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-9xs);
        text-align: left;
        font-size: var(--font-size-mid);
        color: var(--color-darkslategray);
        font-family: var(--font-lato);
    }

    .b {
        width: auto;
    }
    .b,
    .company-name,
    .job-position-here {
        position: relative;
        display: inline-block;
    }
    .company-name {
        color: var(--color-gray-100);
        width: 196px;
    }
    .job-position-here {
        font-size: var(--font-size-xs);
        width: auto;
    }
    .lorem-ipsum-dolor1 {
        align-self: stretch;
        position: relative;
        font-size: var(--font-size-5xs);
        color: var(--color-gray-200);
        text-align: justify;
    }
    .parent {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .group-parent,
    .instance-parent {
        padding-right: 10px;
        padding-left: 0;
        display: flex;
        justify-content: flex-start;
    }
    .instance-parent {
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .group-parent {
        flex-direction: row;
        align-items: center;
        gap: 13px;
    }
    .rolling-stone-ball-parent {
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
    }
    .frame-group,
    .frame-parent,
    .rolling-stone-ball-parent {
        display: flex;
        justify-content: flex-start;
    }
    .frame-group {
        width: 364px;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
        font-size: var(--font-size-xs);
        color: var(--color-black);
    }
    .frame-parent {
        position: absolute;
        top: 20px;
        left: 213px;
        flex-direction: column;
        align-items: flex-start;
        gap: 19px;
        font-size: var(--font-size-3xs);
        color: var(--color-dimgray);
    }
    .photo-2022-11-07-12-51-02-1-icon {
        position: absolute;
        top: 33px;
        left: 28px;
        border-radius: 73.86px;
        width: 125px;
        height: 123.11px;
        object-fit: cover;
    }
    .a4-1 {
        position: relative;
        background-color: var(--color-white);
        width: 595px;
        aspect-ratio: 1/1.414;
        /* height: 842px; */
        overflow: hidden;
        text-align: left;
        font-size: 32px;
        color: var(--color-darkslategray);
        font-family: var(--font-lato);
    }

    .loading-container {
        display: flex;
        font-family: Lato;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 842px;
        font-size: var(--font-size-lg);
        color: var(--color-white);
        font-family: var(--font-nunito);
        z-index: 10;
    }
</style>
