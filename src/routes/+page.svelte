<script>
    import { goto } from "$app/navigation";
    import { authHandlers, user } from "$lib/stores/AuthStore";
    import logo from "$lib/assets/your-logo.png";

    async function login() {
        await authHandlers.login();
        goto("/creator");
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
</svelte:head>
<div class="container">
    <div class="branding">
        <h1 class="brand-heading">ResumeGenius</h1>
        <p class="brand-text">
            Create the perfect resume in seconds with our AI-powered resume
            generator
        </p>
        <div class="features-grid">
            <div class="feature">
                <i class="fas fa-check-circle" />
                <p>Customizable resume templates for any job type</p>
            </div>
            <div class="feature">
                <i class="fas fa-check-circle" />
                <p>Keyword optimization for better visibility</p>
            </div>
            <div class="feature">
                <i class="fas fa-check-circle" />
                <p>Real-time feedback and suggestions</p>
            </div>
            <div class="feature">
                <i class="fas fa-check-circle" />
                <p>Automated cover letter creation</p>
            </div>
            <div class="feature">
                <i class="fas fa-check-circle" />
                <p>Privacy and security guaranteed</p>
            </div>
            <div class="feature">
                <i class="fas fa-check-circle" />
                <p>100% satisfaction guarantee</p>
            </div>
        </div>
    </div>
    <div class="login">
        <img src={logo} alt="Logo" class="logo" />
        <h2 class="heading">Create your Resume Now</h2>
        <button on:click={login} class="btn"
            ><i class="fa-brands fa-google" style="color: #ffffff; font-size: 20px" />Sign in
            with Google</button
        >
    </div>
</div>

<style>
    /* Global styles */

    * {
        box-sizing: border-box;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        max-width: 1200px;
        margin: 0 auto;
    }

    .branding {
        width: 70%;
        padding: 4rem;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .brand-heading {
        font-size: 3rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 1rem;
    }

    .brand-text {
        font-size: 1.5rem;
        color: #777;
        margin-bottom: 2rem;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin-top: 2rem;
    }

    .feature {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: #777;
    }

    .feature i {
        font-size: 1.5rem;
        color: #4285f4;
        margin-right: 0.5rem;
    }

    .login {
        width: 30%;
        padding:5rem 2rem;
        background-color: #4285f4;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 2rem;
    }

    .heading {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 2rem;
    }

    .btn {
        padding: 0.7rem 1rem;
        border: none;
        border-radius: 25px;
        background-color: rgb(231, 56, 56);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        
    }

    .btn:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
