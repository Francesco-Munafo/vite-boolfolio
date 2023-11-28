<script>
export default {};
</script>
<template>
  <div class="row row-cols-sm-1 row-cols-lg-2 py-5 w-100 h-100">
    <div
      class="col vertical_text cm_title fw-bolder p-0 d-flex flex-column align-items-center justify-content-center"
    >
      <div class="title">
        <div class="pf_text_main lh_20 flex-shrink-0">WELCOME TO</div>
        <div class="pf_text_light flex-shrink-0">MY PORTFOLIO</div>
      </div>
    </div>
    <div class="col px-4 mt-sm-2 home_desc">
      <img
        class="rounded img-fluid"
        src="../assets/img/178678846_6047628561921354_1083255450266941805_n.jpg"
        alt=""
      />
      <div>
        <div class="pf_text_main">Francesco Munafo' (Cicciomax),</div>
        <div class="pf_text_light">Junior FullStack Web Developer.</div>
      </div>
      <div class="techs_logo d-flex">
        <div class="logo">
          <img
            width="60"
            height="60"
            src="../assets/img/HTML5_logo.png"
            alt=""
          />
        </div>
        <div>
          <img
            width="43"
            height="60"
            src="../assets/img/css3_logo.png"
            alt=""
          />
        </div>
        <div>
          <img
            width="60"
            height="60"
            src="../assets/img/javascript_logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center w-75 mx-auto">
    <div class="spacer_item me-2">
      <div class="pf_bg_main w-75 mx-auto h-100 rounded"></div>
    </div>
    <div class="spacer"></div>
  </div>

  <!-- <router-link to="/projects" class="btn btn-primary">
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
  </router-link> -->

  <div class="container py-5">
    <h4 class="text-center pf_text_main home_desc">LOOK AT SOME STATS:</h4>
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
