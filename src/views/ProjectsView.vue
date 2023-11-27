<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import AppCardPlaceholder from "../components/AppCardPlaceholder.vue";
export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
    AppCardPlaceholder,
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
  <div>
    <h1 class="p-3 cm_title pf_text_light">Francesco's projects</h1>
  </div>

  <div class="container mt-5 pb-5">
    <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-1 g-4">
      <div class="col" v-if="projects.length > 0" v-for="project in projects">
        <ProjectCard :project="project"></ProjectCard>
      </div>
      <AppCardPlaceholder v-else></AppCardPlaceholder>
    </div>

    <nav aria-label="Page navigation" class="d-flex justify-content-center">
      <ul class="pagination mt-5">
        <li
          class="page-item"
          v-for="link in this.links"
          :class="link.active ? 'active pf_bg_main' : ''"
        >
          <a
            class="page-link pf_bg_dark"
            role="button"
            aria-label="Previous"
            v-html="link.label"
            @click="apiCall(link.url)"
          >
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
