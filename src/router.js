import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectCard from "./pages/ProjectCard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/allprojects",
      name: "projects",
      component: ProjectCard,
    },
  ],
});

export { router };
