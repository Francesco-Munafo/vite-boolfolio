<script>
import axios from "axios";
export default {
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
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
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
    </nav>
  </header>

  <main>
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="project in projects">
          <div class="card h-100">
            <div class="card-img-top text-center bg-dark">
              <img class="project_preview" :src="project.image" alt="" />
            </div>

            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>

              <p class="card-description">{{ project.description }}</p>
              <div class="card-footer d-flex justify-content-between">
                <div class="info">
                  <div>Created at: {{ project.publication_date }}</div>
                  <div class="badge rounded-pill bg-primary">
                    {{ project.type.name }}
                  </div>
                  <div class="technologies">
                    <div
                      class="badge bg-secondary"
                      v-for="technology in project.technologies"
                    >
                      <i class="fas fa-tag fa-xs fa-fw"></i>
                      {{ technology.name }}
                    </div>
                  </div>
                </div>
                <div class="links">
                  <a :href="project.git_link" class="btn btn-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </a>
                  <a :href="project.external_link" class="btn btn-dark ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-link-45deg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      />
                      <path
                        d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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

<style></style>
