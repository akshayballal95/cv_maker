<script>
    import { InputModel } from "./input_model";
</script>

<body>
    <div class="container">
        <form action="#" method="post">
            <div class="name-container">
                <div>
                    <label for="first-name">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                    />
                </div>
                <div>
                    <label for="last-name">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                    />
                </div>
            </div>

            <div class="contact-container">
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div>
                    <label for="phone">Phone Number:</label>
                    <input
                        type="text"
                        id="phone-number"
                        name="phone-number"
                        required
                    />
                </div>
            </div>

            <label for="address">Address:</label>
            <textarea id="address" name="address" required />

            <label for="education">Education:</label>
            <textarea id="education" name="education" required />

            <label for="experience">Experience:</label>
            <textarea class="experience-field" name="experience[]" required />
            <button type="button" class="add-experience-btn">Add more</button>

            <input type="submit" value="Submit" />
        </form>
    </div>
</body>

<style>
    /* Font */
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        /* color: #666; */
    }
    .name-container {
        display: flex;
        justify-content: space-between;
    }
    .name-container div {
        flex-basis: 48%;
    }

    .contact-container {
        display: flex;
        justify-content: space-between;
    }
    .contact-container div {
        flex-basis: 48%;
    }

    /* Container */
    .container {
        /* display: flex;
        flex-direction: column; */
        margin: 0 auto;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    /* Form fields */
    label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
        /* color: #555; */
        /* text-transform: uppercase; */
        letter-spacing: 1px;
    }

    input[type="text"],
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 30px;
        border: 1px;
        border-style: ridge;
        border-color: rgb(180, 177, 177);
        border-radius: 5px;
        background-color: white;
        font-size: 14px;
        color: #666;
        transition: all 0.3s ease-in-out;
    }

    textarea {
        height: 150px;
        resize: none;
    }

    input[type="text"]:hover,
    textarea:hover {
        background-color: #ebebeb;
    }

    input[type="text"]:focus,
    textarea:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        background-color: #ebebeb;
    }

    /* Submit button */
    input[type="submit"] {
        background-color: #3498db;
        color: #fff;
        padding: 12px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
    }

    input[type="submit"]:hover {
        background-color: #2980b9;
    }

    /* Error messages */
    .error-message {
        display: block;
        font-size: 14px;
        color: red;
        margin-top: 5px;
    }
</style>
