<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark pf_bg_main shadow">
      <div class="container">
        <a class="navbar-brand cm_font" href="#">Boolfolio</a>
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
              <router-link
                class="nav-link cm_font"
                active-class="active"
                to="/"
                aria-current="page"
                >Home <span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link cm_font"
                active-class="active"
                :to="{ name: 'projects' }"
                >Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link cm_font"
                active-class="active"
                :to="{ name: 'about' }"
                >About
              </router-link>
            </li>
            <li class="nav-item cm_font">
              <router-link
                class="nav-link"
                active-class="active"
                :to="{ name: 'contacts' }"
                >Contacts
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <a href="http://127.0.0.1:8000/admin" class="btn btn-primary me-3"
        >Admin</a
      >
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
