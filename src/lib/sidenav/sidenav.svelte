<script lang="ts">
    import { authHandlers, user } from "$lib/stores/AuthStore";
    import { onMount } from "svelte";
    import { selectedResume } from "../stores/ResumeStore";
    import Input from "$lib/editor/input.svelte";
    import Preview from "$lib/preview/preview.svelte";
    import {
        getResumes,
        resumes,
        addResumeFirestore,
    } from "../stores/ResumeStore";
    import ResumeItem from "./resume_item.svelte";

    async function logout() {
        await authHandlers.logout();
    }

    onMount(async () => {
        await getResumes($user?.uid!);
    });

    async function addResume() {
        await addResumeFirestore($user?.uid!, $selectedResume);
    }
</script>

<body>
    <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <!-- Page content here -->
            <div class="container">
                <div class="editor"><Input /></div>

                <div class="output"><Preview /></div>
            </div>

           
        </div>
        <div class="drawer-side shadow-xl">
            <label for="my-drawer-2" class="drawer-overlay" />

            <div class="menu p-4 w-80 bg-base-100 text-base-content space-y-3 h-full flex flex-col">
                <button class="btn btn-outline mb-5 gap-2" on:click={addResume}
                    ><i class="fa-sharp fa-light fa-plus" /> Add Resume</button
                >
                <!-- Sidebar content here -->
                <div class="content grow">
                    {#each $resumes as res, i}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li
                        on:click={() => {
                            $selectedResume = res;
                        }}
                    >
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a class={$selectedResume.id == res.id ? "active" : ""}>
                            <ResumeItem resume={res} /></a
                        >
                    </li>
                    {/each}
                </div>
               
              
                <button class="btn btn-error  h-30 logout-btn" on:click={logout}>Logout</button>

                </div>

        </div>
    </div></body
>

<style>
    .container {
        margin: 0px;
        height: 100vh;
        display: flex;
    }

    .editor {
        height: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        flex: 3 1 auto;
        min-width: 600px;
    }

    .output {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex: 3 1 auto;
    }

    .logout-btn{
        margin-top: auto;
        justify-self: flex-end;
     
    }

    @media (max-width: 850px) {
        /* .editor {
            min-width: 400px;
        } */
    }

    @media (max-width: 450px) {
        .container {
            flex: none;
        }
        .editor {
            flex: none;
            min-width: 0;
            width: 100vw;
        }
        .output {
            display: none;
        }
    }
</style>
