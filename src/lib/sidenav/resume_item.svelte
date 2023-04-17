<script lang="ts">
    import { user } from "$lib/stores/AuthStore";
    import { deleteResumeService, selectedResume } from "$lib/stores/ResumeStore";
    import type { Resume } from "../../input_model";
    
    let isActive: boolean
    $: isActive
    export let resume: Resume;

    function selectResume () {
        $selectedResume = resume
    }
    function deleteResume(){
        deleteResumeService($user?.uid!, resume.id)
    }
</script>

<div on:click = {selectResume} on:keydown={()=>{}} class="container">
    <a href ="#" class = "{$selectedResume.id == resume.id?"active":""}" >
        <span class="item">{resume.target_company.company_name}</span>
        <i on:click={deleteResume} on:keydown={()=>{}} class="fa-solid fa-trash-can" />
   
    </a>
</div>

<style>

    
 a {
    display: flex;
    color: #333;
    padding: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: bold;
    justify-content: space-between;
}

 a.active {
    background-color: #3f51b5;
    color: #fff;
}

 a:hover:not(.active) {
    background-color: #3f51b5;
    color: #fff;
}

</style>
