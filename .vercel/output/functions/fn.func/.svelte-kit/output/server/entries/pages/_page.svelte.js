import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/index2.js";
import { u as user } from "../../chunks/AuthStore.js";
const logo = "/_app/immutable/assets/your-logo.cdbe1f4d.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-amd9q6.svelte-amd9q6{box-sizing:border-box}.container.svelte-amd9q6.svelte-amd9q6{display:flex;justify-content:space-between;align-items:center;height:100vh;max-width:1200px;margin:0 auto}.branding.svelte-amd9q6.svelte-amd9q6{width:70%;padding:4rem;background-color:#fff;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.2)}.brand-heading.svelte-amd9q6.svelte-amd9q6{font-size:3rem;font-weight:bold;color:#333;margin-bottom:1rem}.brand-text.svelte-amd9q6.svelte-amd9q6{font-size:1.5rem;color:#777;margin-bottom:2rem}.features-grid.svelte-amd9q6.svelte-amd9q6{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:1rem;margin-top:2rem}.feature.svelte-amd9q6.svelte-amd9q6{display:flex;align-items:center;margin-bottom:1rem;font-size:1.2rem;color:#777}.feature.svelte-amd9q6 i.svelte-amd9q6{font-size:1.5rem;color:#4285f4;margin-right:0.5rem}.login.svelte-amd9q6.svelte-amd9q6{width:30%;padding:5rem 2rem;background-color:#4285f4;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;align-items:center}.logo.svelte-amd9q6.svelte-amd9q6{width:100px;height:100px;border-radius:50%;margin-bottom:2rem}.heading.svelte-amd9q6.svelte-amd9q6{font-size:1.5rem;color:#fff;margin-bottom:2rem}.btn.svelte-amd9q6.svelte-amd9q6{padding:0.7rem 1rem;border:none;border-radius:25px;background-color:rgb(231, 56, 56);color:white;font-size:1rem;font-weight:bold;cursor:pointer;display:flex;align-items:center;gap:10px}.btn.svelte-amd9q6.svelte-amd9q6:hover{background-color:rgba(0, 0, 0, 0.2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-1axtkfm_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" class="svelte-amd9q6"><!-- HEAD_svelte-1axtkfm_END -->`, ""}

${!$user ? `<div class="container svelte-amd9q6"><div class="branding svelte-amd9q6"><h1 class="brand-heading svelte-amd9q6">ResumeGenius</h1>
        <p class="brand-text svelte-amd9q6">Create the perfect resume in seconds with our AI-powered resume
            generator
        </p>
        <div class="features-grid svelte-amd9q6"><div class="feature svelte-amd9q6"><i class="fas fa-check-circle svelte-amd9q6"></i>
                <p class="svelte-amd9q6">Customizable resume templates for any job type</p></div>
            <div class="feature svelte-amd9q6"><i class="fas fa-check-circle svelte-amd9q6"></i>
                <p class="svelte-amd9q6">Keyword optimization for better visibility</p></div>
            <div class="feature svelte-amd9q6"><i class="fas fa-check-circle svelte-amd9q6"></i>
                <p class="svelte-amd9q6">Real-time feedback and suggestions</p></div>
            <div class="feature svelte-amd9q6"><i class="fas fa-check-circle svelte-amd9q6"></i>
                <p class="svelte-amd9q6">Automated cover letter creation</p></div>
            <div class="feature svelte-amd9q6"><i class="fas fa-check-circle svelte-amd9q6"></i>
                <p class="svelte-amd9q6">Privacy and security guaranteed</p></div>
            <div class="feature svelte-amd9q6"><i class="fas fa-check-circle svelte-amd9q6"></i>
                <p class="svelte-amd9q6">100% satisfaction guarantee</p></div></div></div>
    <div class="login svelte-amd9q6"><img${add_attribute("src", logo, 0)} alt="Logo" class="logo svelte-amd9q6">
        <h2 class="heading svelte-amd9q6">Create your Resume Now</h2>
        <button class="btn svelte-amd9q6"><i class="fa-brands fa-google svelte-amd9q6" style="color: #ffffff; font-size: 20px"></i>Sign in
            with Google</button></div></div>` : ``}`;
});
export {
  Page as default
};
