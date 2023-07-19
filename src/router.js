import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/all-projects",
      name: "projectsList",
      component: ProjectList,
    },
    {
      path: "/error",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export { router };
