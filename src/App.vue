<script>
import axios from "axios";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import ProjectsView from "./views/ProjectsView.vue";
export default {
  components: {
    ProjectsView,
    AppFooter,
    AppHeader,
  },

  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      projects_api: "/api/projects",
      projects: [],
      links: [],
      currentPage: 1,
      maxPages: null,
    };
  },
  methods: {
    apiCall(url) {
      axios
        .get(url)
        .then((response) => {
          this.projects = response.data.projects.data;
          this.maxPages = response.data.projects.last_page;
          this.currentPage = response.data.projects.current_page;
          this.links = response.data.projects.links;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.apiCall(this.baseUrl + this.projects_api);
  },
};
</script>

<template>
  <body>
    <AppHeader></AppHeader>

    <main class="pf_bg_dark">
      <router-view></router-view>
    </main>

    <AppFooter></AppFooter>
  </body>
</template>

<style></style>
