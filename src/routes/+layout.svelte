<script>
    import { user, isLoading } from "$lib/stores/AuthStore";
    import { auth, db } from "$lib/client/firebase";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import {
        addDoc,
        collection,
        doc,
        getDocs,
        query,
        setDoc,
    } from "firebase/firestore";
    import { PersonalInformation, Resume } from "../input_model";
    import { classToObject } from "$lib/client/firestore";
    import "$lib/app.css";

    onMount(() => {
        auth.onAuthStateChanged(async (currentUser) => {
            $user = currentUser;
            $isLoading = false;

            const q = query(collection(db, "users/" + $user?.uid + "/resumes"));

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty && $user) {
                addDoc(collection(db, "users/" + $user?.uid + "/resumes/"), {
                    ...classToObject(new Resume()),
                   
                    target_company: {company_name: "New Resume"}
                });
            }

            if ($user == null) {
                goto("/");
            }

            else {
                goto("/creator")
            }
        });
    });
</script>

<slot />
