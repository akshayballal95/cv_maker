<script lang="ts">
    import { loading } from "../../stores/ResumeStore";
    import type { Resume } from "../../input_model";
    export let resume_object: Resume;
    import avatar from "$lib/assets/photo.png";
    import oip from "$lib/assets/default.jpg";
    $: resume = resume_object;
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
    <div class="a4-1">
        <div class="a4-1-child" />
        <div class="introduction-wrapper">
            <div class="introduction">
                <div class="mariana-anderson-parent">
                    <div class="mariana-anderson">
                       
                        <b>{resume.personal_information.first_name}</b><span>
                            {resume.personal_information.last_name}</span
                        >
                    </div>
                    <div class="marketing-manager">
                        {resume.personal_information.position}
                    </div>
                </div>
                <div class="lorem-ipsum-dolor">
                    {resume.personal_information.introduction}
                </div>
            </div>
        </div>
        <header class="experience-parent">
            <b class="experience">Experience</b>
            <div class="frame-child" />
        </header>
        <header class="projects-parent">
            <b class="experience">Projects</b>
            <div class="frame-child" />
        </header>
        <div class="group-parent">
            <!-- <img class="frame-inner" alt="" src={line} /> -->
            <div class="instance-parent">
                {#each resume.work_experience as work, i}
                    <div class="parent">
                        <b class="b">2019 - 2022</b>
                        <div class="company-name">
                            {work.company_name}
                        </div>
                        <b class="job-position-here">{work.job_title}</b>
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
        <div class="a4-1-inner">
            <div class="mariana-anderson-parent">
                <div class="component-1">
                    <b class="phone">Phone</b>
                    <div class="div">7762844196</div>
                </div>
                <div class="component-2">
                    <b class="phone"><p class="email">Email</p></b>
                    <div class="div">arballal95@gmail.com</div>
                </div>
                <div class="component-3">
                    <b class="address">Address</b>
                    <div class="mariana-anderson">
                        {resume.address.address_line_1}
                    </div>
                    <div class="mariana-anderson">
                        {resume.address.address_line_2}
                    </div>
                    <div class="mariana-anderson">
                        {resume.address.city}: {resume.address.pincode}
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-parent">
            <b class="experience">Contact</b>
            <div class="frame-child1" />
        </div>
        <div class="education-parent">
            <b class="experience">Education</b>
            <div class="frame-child1" />
        </div>
        <div class="expertise-parent">
            <b class="experience">Expertise</b>
            <div class="frame-child1" />
        </div>
        <div class="languages-parent">
            <b class="experience">Languages</b>
            <div class="frame-child1" />
        </div>
        <div class="component-4-parent">
            <div class="mariana-anderson-parent">
                <div class="mariana-anderson">2008</div>
                <b class="bachelor-of-engineering">Bachelor of Engineering</b>
                <div class="birla-institute-of">
                    Birla Institute of Technology
                </div>
            </div>
            <div class="mariana-anderson-parent">
                <div class="mariana-anderson">2008</div>
                <b class="bachelor-of-engineering">Bachelor of Engineering</b>
                <div class="birla-institute-of">
                    Birla Institute of Technology
                </div>
            </div>
        </div>
        <div class="uiux-parent">
            <b class="uiux"
                ><ul class="uiux1">
                    <li class="uiux2">UI/UX</li>
                </ul></b
            >
            <b class="uiux"
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
        <div class="english-parent">
            <b class="uiux">English</b><b class="spanish"
                ><p class="email">Spanish</p></b
            >
        </div>
        <div class="frame-group">
            {#each resume.projects as project, i}
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
        {#if resume.avatar}
            <img
                class="photo-2022-11-07-12-51-02-1-icon"
                alt=""
                src={resume.avatar}
            />
        {:else}
            <img class="photo-2022-11-07-12-51-02-1-icon" alt="" src={avatar} />
        {/if}
    </div>
</body>

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
        --font-size-5xs: 8px;
        --font-size-3xs: 10px;
        --font-size-xs: 12px;
        --font-size-lg: 18px;
        --font-size-mid: 17px;

        /* Colors */
        --color-white: #fff;
        --color-gray-100: #838383;
        --color-gray-200: #797979;
        --color-black: #000;
        --color-whitesmoke: #f5f5f5;
        --color-dimgray: #6f6d6d;
        --color-darkslategray: #323b4c;

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
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .introduction {
        align-self: stretch;
        gap: 9px;
    }
    .introduction-wrapper {
        position: absolute;
        top: 33px;
        left: 216px;
        width: 348px;
        font-size: 32px;
        color: var(--color-darkslategray);
        font-family: var(--font-lato);
    }
    .experience,
    .frame-child {
        align-self: stretch;
        position: relative;
    }
    .frame-child {
        border-top: 1px solid var(--color-darkslategray);
        box-sizing: border-box;
        height: 1px;
        flex-shrink: 0;
    }
    .experience-parent,
    .projects-parent {
        position: absolute;
        top: 170px;
        left: 216px;
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
    .projects-parent {
        top: 632px;
        left: 215px;
    }

    .b {
        width: 72px;
    }
    .b,
    .company-name,
    .job-position-here {
        color: var(--color-darkslategray);
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
        position: absolute;
        top: 210px;
        left: 220px;
        flex-direction: row;
        align-items: center;
        gap: 13px;
        font-size: var(--font-size-3xs);
        color: var(--color-dimgray);
        font-family: var(--font-lato);
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
    .a4-1-inner,
    .component-3 {
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
    .a4-1-inner {
        position: absolute;
        top: 170px;
        left: 22px;
        width: 239px;
        padding: 28px 0;
        box-sizing: border-box;
        font-size: var(--font-size-xs);
    }
    .contact-parent {
        position: absolute;
        top: 167px;
        left: 22px;
        width: 177px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .frame-child1 {
        align-self: stretch;
        position: relative;
        border-top: 1px solid var(--color-whitesmoke);
        box-sizing: border-box;
        height: 1px;
        flex-shrink: 0;
    }
    .education-parent,
    .expertise-parent,
    .languages-parent {
        position: absolute;
        top: 356px;
        left: 19px;
        width: 177px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .expertise-parent,
    .languages-parent {
        top: 524px;
    }
    .languages-parent {
        top: 716px;
    }
    .bachelor-of-engineering,
    .birla-institute-of {
        align-self: stretch;
        position: relative;
    }
    .bachelor-of-engineering {
        font-size: var(--font-size-xs);
    }
    .birla-institute-of {
        font-family: var(--font-lato);
    }
    .component-4-parent {
        position: absolute;
        top: 392px;
        left: 22px;
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
    }
    .uiux-parent {
        position: absolute;
        top: 563px;
        left: 19px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: var(--font-size-3xs);
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
    .div5,
    .english-parent {
        font-size: var(--font-size-3xs);
    }
    .english-parent {
        position: absolute;
        top: 752px;
        left: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .div5 {
        align-self: stretch;
        position: relative;
    }
    .frame-group,
    .rolling-stone-ball-parent {
        color: var(--color-darkslategray);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .rolling-stone-ball-parent {
        flex: 1;
        flex-direction: column;
    }
    .frame-group {
        position: absolute;
        top: 677px;
        left: 218px;
        width: 364px;
        flex-direction: row;
        gap: 10px;
        font-size: var(--font-size-xs);
        color: var(--color-black);
        font-family: var(--font-lato);
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
        height: 842px;
        overflow: hidden;
        text-align: left;
        font-size: var(--font-size-lg);
        color: var(--color-white);
        font-family: var(--font-nunito);
    }
</style>
