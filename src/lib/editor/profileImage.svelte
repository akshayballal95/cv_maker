<script lang="ts">
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
                class="btn btn-outline"
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


    .fa-cloud-upload-alt {
        margin-right: 10px;
    }
</style>
