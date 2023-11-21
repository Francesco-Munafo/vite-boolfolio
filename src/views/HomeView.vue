<script>
export default {};
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Welcome to my portfolio!</h1>
      <p class="col-md-8 fs-4">
        If you're here it means that you want to explore my WebDeveloper skills.
        So have a nice time and enjoy all my projects!
      </p>
      <router-link to="/projects" class="btn btn-primary">
        Go to projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </router-link>
    </div>
  </div>

  <div class="container">
    <h4>Look at some stats:</h4>
    <div class="row row-cols-1 row-cols-sm-3 my-4">
      <div class="col d-flex justify-content-center align-items-center">
        <div class="card p-5">
          <div class="pie" style="--p: 80; --b: 10px; --c: orange">80%</div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="card p-5">
          <div class="pie" style="--p: 40; --b: 10px; --c: orange">40%</div>
        </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
        <div class="card p-5">
          <div class="pie" style="--p: 20; --b: 10px; --c: orange">20%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
