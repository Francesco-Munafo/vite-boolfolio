<script>
import axios from "axios";
export default {
  name: "SingleProjectView",
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      project_api: "/api/project/",
      response: false,
      project: {},
    };
  },
  methods: {
    apiCall(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.response = true;
          if (response.data.success) {
            this.project = response.data.result;
          } else {
            this.$router.push({ name: "NotFound" });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.apiCall(this.baseUrl + this.project_api + this.$route.params.slug);
  },
};
</script>

<template>
  <div class="container single_project">
    <div class="row my-5">
      <div class="col">
        <div class="card flex-row shadow" v-if="this.response">
          <img
            v-if="project.image.includes('https')"
            class=""
            :src="project.image"
            alt=""
          />
          <img
            v-else
            :src="'http://127.0.0.1:8000/storage/' + project.image"
            alt=""
            class="project_preview"
          />

          <div class="card-description ms-3 mt-1">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <small>Created at:</small>
            <h5>{{ project.publication_date }}</h5>
            <small>Type:</small>
            <div
              class="badge rounded-pill text-bg-primary ms-2"
              v-if="project.type"
            >
              {{ project.type.name }}
            </div>
            <br />
            <small>Technologies:</small>
            <ul class="list-unstyled">
              <li
                class="badge bg-secondary me-1"
                v-for="technology in project.technologies"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-tag-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
                {{ technology.name }}
              </li>
            </ul>
            <div class="links mb-3">
              <a class="btn btn-dark me-2" :href="project.git_link">
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
              <a class="btn btn-dark" :href="project.external_link">
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
        <div class="card flex-row" aria-hidden="true" v-else>
          <img src="..." class="col-2 placeholder" alt="" />
          <div class="card-body">
            <h2 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h2>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span><br />
              <span class="placeholder col-4"></span><br />
              <span class="placeholder col-4"></span><br />
              <span class="placeholder col-6"></span><br />
              <span class="placeholder col-9"></span><br />
              <span class="placeholder col-3"></span><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
