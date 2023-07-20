import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectListPage from "./pages/ProjectListPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/all-projects/",
      name: "projectListPage",
      component: ProjectListPage,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/error",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export { router };
