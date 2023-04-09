<script>
    import Input from '$lib/input.svelte';
</script>


<div class="container">
    <div class="side-nav">Side</div>
    <div class="editor"><Input/></div>
    <div class="output">Out</div>
</div>

<style>
    .container {
        margin: 0px;
        height: 100%;
        display: flex;
    }

    .side-nav {
        background-color: orange;
        width: 15em;
    }
    .editor {
        flex: 1 1 auto;
    }

    .output{
        flex: 3 1 auto;
    }
</style>
