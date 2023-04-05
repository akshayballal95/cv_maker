<script>
    import Input from "../input.svelte";
</script>


<div class="container">
    <div class="side-nav">Side</div>
    <div class="editor"><Input/></div>
</div>

<style>
    .container {
        margin: 0px;
        height: 100%;
        display: flex;
        /* background-color: yellow; */
    }

    .side-nav {
        background-color: orange;
        width: 15em;
    }
    .editor {
        /* background-color: green; */
        flex: 1 1 auto;
    }
</style>
