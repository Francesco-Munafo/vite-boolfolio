<script>
import axios from "axios";

export default {
  name: "ContactsView",
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      loading: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: [],
      success: null,
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      this.errors = [];
      this.success = null;

      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      console.log(payload);

      axios
        .post(this.baseUrl + "/api/contacts", payload)
        .then((response) => {
          console.log("😍", response);
          const success = response.data.success;
          if (!success) {
            console.log(response.data.errors);
            this.errors = response.data.errors;
          } else {
            console.log(response);
            console.log(response.data.message);

            this.name = "";
            this.email = "";
            this.phone = "";
            this.message = "";

            this.success = response.data.message;
          }
          this.loading = false;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>

<template>
  <div class="p-5 mb-4 pf_bg_dark text-light">
    <div class="container py-5">
      <h1 class="display-5 fw-bold">Send any request!</h1>
      <p class="col-md-8 fs-4">Find out what's in the pot</p>
      <button
        class="btn btn-primary btn-lg cm_font pf_text_light"
        type="button"
      >
        Find out more
      </button>
    </div>
  </div>

  <div class="container">
    <div class="alert alert-success" role="alert" v-if="success">
      <strong>
        {{ success }}
      </strong>
    </div>
    <form action="" class="py-5" v-on:submit.prevent="sendForm()">
      <div v-if="!loading">
        <div class="mb-3">
          <label for="name" class="form-label cm_font pf_text_light"
            >Name</label
          >
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            placeholder="Your name here"
            aria-describedby="nameHelper"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.name">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.name">{{ message }}</li>
            </ul>
          </div>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label cm_font pf_text_light"
            >Phone</label
          >
          <input
            v-model="phone"
            type="tel"
            name="phone"
            id="phone"
            class="form-control"
            :class="{ 'is-invalid': errors.phone }"
            placeholder="Your phone number"
            aria-describedby="phoneHelper"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.phone">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.phone">{{ message }}</li>
            </ul>
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label cm_font pf_text_light"
            >Email</label
          >
          <input
            v-model="email"
            type="text"
            name="email"
            id="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="Your email here"
            aria-describedby="emailHelper"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.email">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.email">{{ message }}</li>
            </ul>
          </div>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label cm_font pf_text_light"
            >Message</label
          >
          <textarea
            v-model="message"
            class="form-control"
            :class="{ 'is-invalid': errors.message }"
            name="message"
            id="message"
            rows="3"
            placeholder="Your message here..."
          ></textarea>
          <div class="alert alert-danger" role="alert" v-if="errors.message">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.message">{{ message }}</li>
            </ul>
          </div>
        </div>

        <button type="submit" class="btn btn-primary cm_font pf_text_light">
          Send
        </button>
      </div>

      <div class="loader text-center py-5" v-else>
        <i class="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
        <div class="mt-3">Loading...</div>
      </div>
    </form>
  </div>
</template>

<style></style>
