<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
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
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark shadow">
      <div class="container">
        <a class="navbar-brand" href="#">Boolfolio</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page"
                >Home <span class="visually-hidden">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>

      <a href="http://127.0.0.1:8000/admin" class="btn btn-primary me-3"
        >Admin</a
      >
    </nav>
  </header>

  <main>
    <h1 class="p-3 text-muted">Cicciomax's projects</h1>
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="project in projects">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>

      <nav aria-label="Page navigation" class="d-flex justify-content-center">
        <ul class="pagination mt-5">
          <li
            class="page-item"
            v-for="link in this.links"
            :class="link.active ? 'active' : ''"
          >
            <a
              class="page-link"
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
  </main>

  <footer class="bg-dark">
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <ul class="list-unstyled">
            <h5 class="text-white">QUICK LINKS</h5>
            <li>
              <a class="text-decoration-none text-white" href="#">Lorem.</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Harum!</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Provident?</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Hic.</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Officiis!</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="list-unstyled">
            <h5 class="text-white">QUICK LINKS</h5>
            <li>
              <a class="text-decoration-none text-white" href="#">Lorem.</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Harum!</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Provident?</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Hic.</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Officiis!</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="list-unstyled">
            <h5 class="text-white">QUICK LINKS</h5>
            <li>
              <a class="text-decoration-none text-white" href="#">Lorem.</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Harum!</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Provident?</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Hic.</a>
            </li>
            <li>
              <a class="text-decoration-none text-white" href="#">Officiis!</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
