<script lang="ts">
    import Icon from "@iconify/svelte";
    import "../../styles/form.css";

    export let avatar: string;
    let fileinput: any;
    const onFileSelected = (e: any) => {
        let image = e.target?.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            avatar = e.target?.result as string;
        };
    };
</script>

<body>
    <div class="card w-full bg-base-100 shadow-xl">

        <div class="card-body">
            <h2 class="text-2xl">Profile Image</h2>

            <button
                class="upload-button"
                on:click={() => {
                    fileinput.click();
                }}
            >
                <i class="fas fa-cloud-upload-alt" /> Upload
            </button>
            <input
                style="display:none"
                type="file"
                accept=".jpg, .jpeg, .png"
                on:change={(e) => onFileSelected(e)}
                bind:this={fileinput}
            />
        </div>
     
    </div>
</body>

<style>
    #app {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 30px;
    }

    .upload-button {
        display: inline-block;
        border: 2px solid #ccc;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .upload-button:hover {
        background-color: #ccc;
    }

    .fa-cloud-upload-alt {
        margin-right: 10px;
    }
</style>
