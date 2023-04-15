<script lang="ts">
    import Icon from "@iconify/svelte";
    import "../../styles/form.css"

    export let avatar: string;
    let fileinput: any;
    const onFileSelected = (e:any) => {
        console.log(e.target)
        let image = e.target?.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            avatar = e.target?.result as string;
            console.log(avatar)
        };
    };
</script>

<body>
    <div id="app">
        <h3>Upload Image</h3>
    
      
 
        <button
            class="chan"
            on:click={() => {
                fileinput.click();
            }}
        >
            Choose Image
        </button>
        <input
            style="display:none"
            type="file"
            accept=".jpg, .jpeg, .png"
            on:change={(e) => onFileSelected(e)}
            bind:this={fileinput}
        />
    </div>
    
</body>

<style>
    #app {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 30px
    }



    /* h3{
        flex: 2 1 auto;
    } */
    
  
</style>
