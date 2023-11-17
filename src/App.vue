<script>
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      projects_api: "/api/projects",
      projects: [],
    };
  },
  mounted() {
    axios
      .get(this.baseUrl + this.projects_api)
      .then((response) => {
        this.projects = response.data.projects.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
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
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="col" v-for="project in projects">
          <div class="card">
            <div class="card-img-top text-center">
              <img class="img-fluid" :src="project.image" alt="" />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer></footer>
</template>

<style></style>
