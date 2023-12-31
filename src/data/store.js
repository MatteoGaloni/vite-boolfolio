import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  projectsApi: "projects",
  loading: false,
  loadingError: false,
  projects: [],
  currentProjectsPage: 0,
  totalProjectsPages: 0,
});
