import { App } from "./App.js";
import { Router } from "./components/router.js";

const d = document;
d.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", Router);
