import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/projects", component: ProjectsView },
  { path: "/about", component: AboutView },
  { path: "/contacts", component: ContactsView },
  {
    path: "/project/:slug",
    name: "project",
    component: SingleProjectView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
