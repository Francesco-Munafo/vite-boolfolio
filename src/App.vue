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
      currentPage: 1,
      maxPages: null,
    };
  },
  methods: {
    apiCall(page) {
      axios
        .get(this.baseUrl + this.projects_api + "?page=" + page)
        .then((response) => {
          this.projects = response.data.projects.data;
          this.maxPages = response.data.projects.last_page;
          this.currentPage = response.data.projects.current_page;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    nextPage() {
      if (this.currentPage < this.maxPages) {
        this.currentPage++;
        this.apiCall(this.currentPage);
        console.log(this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.apiCall(this.currentPage);
        console.log(this.currentPage);
      }
    },
  },
  mounted() {
    this.apiCall(this.currentPage);
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

      <div class="d-flex justify-content-center mt-5">
        <button class="btn btn-secondary" @click="prevPage()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
        <div v-for="n in this.maxPages" class="d-flex align-items-center">
          <a class="mx-1" @click="this.apiCall(n)" style="cursor: pointer">{{
            n
          }}</a>
        </div>
        <button class="btn btn-secondary" @click="nextPage()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
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
