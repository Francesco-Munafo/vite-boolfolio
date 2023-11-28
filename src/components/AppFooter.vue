<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="pf_bg_main">
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <ul class="list-unstyled">
            <h5 class="text-white home_desc fs-3">🞂 QUICK LINKS</h5>
            <li>
              <router-link
                :to="{ name: 'home' }"
                class="text-decoration-none pf_text_light home_desc fs-6"
                >HOME
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'projects' }"
                class="text-decoration-none pf_text_light home_desc fs-6"
                >PROJECTS
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'about' }"
                class="text-decoration-none pf_text_light home_desc fs-6"
                >ABOUT
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contacts' }"
                class="text-decoration-none pf_text_light home_desc fs-6"
                >CONTACTS
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="row">
            <div class="col"></div>
            <div class="col p-3">
              <a
                class="pf_text_dark text-decoration-none"
                target="_blank"
                href="https://boolean.careers/"
              >
                <div
                  class="d-flex flex-grow-1 justify-content-center align-items-center bg-light rounded-5 p-2 px-4"
                >
                  <img class="" src="../assets/img/Logo.png" alt="" />
                  <h2 class="pf_text_boolean">boolean</h2>
                </div>
              </a>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div class="col d-flex flex-column align-items-end">
          <ul class="list-unstyled text-white">
            <h5 class="text-white home_desc fs-3">INFO</h5>
            <li>
              <strong>E-mail:</strong
              ><span>
                <a
                  class="text-decoration-none text-white"
                  href="mailto:acquamarea1@gmail.com"
                >
                  acquamarea1@gmail.com</a
                ></span
              >
            </li>
          </ul>
          <ul class="list-unstyled d-flex">
            <li>
              <a href="https://github.com/Francesco-Munafo"
                ><i
                  class="fa-brands fa-square-github fs-1 pf_text_dark me-4"
                ></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/francesco-munaf%C3%B2-30a94926a/"
                ><i class="fa-brands fa-linkedin fs-1 pf_text_dark"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h6 class="text-white text-center m-0 py-1">
      &copy; Francesco Munafò - All right reserved
    </h6>
  </footer>
</template>

<style></style>
