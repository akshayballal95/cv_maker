import { c as create_ssr_component, a as subscribe } from "../../chunks/index2.js";
import { u as user, i as isLoading } from "../../chunks/AuthStore.js";
import "firebase/firestore";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $$unsubscribe_isLoading;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => value);
  $$unsubscribe_user();
  $$unsubscribe_isLoading();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
