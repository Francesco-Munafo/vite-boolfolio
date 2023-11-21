<script>
export default {
  name: "NotFoundView",
};
</script>

<template>
  <div
    class="container single_project d-flex flex-column justify-content-evenly align-content-center"
  >
    <h1 class="mt-5">Sorry, project not found! 🕵️‍♂️</h1>
    <div>
      <router-link to="/projects" class="btn btn-primary mb-5"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
        Back to projects
      </router-link>
    </div>
  </div>
</template>

<style></style>
