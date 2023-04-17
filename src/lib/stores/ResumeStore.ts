import { writable } from "svelte/store";
import { Resume } from "../../input_model";

export let loading = writable<boolean>(false);

export let resume = writable<Resume>(new Resume());