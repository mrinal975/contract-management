<template>
  <div class="container mt-3">
    <div class="row">
      <p class="h3 text-success fw-bold">
        Contact Manager

        <router-link to="/contacts/add" class="btn btn-success btn-sm">
          <i class="fa fa-plus-circle"></i>
          New
        </router-link>
      </p>
      <p class="fst-italic">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s,
      </p>
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-8">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Name"
                />
              </div>
              <div class="col-md-4">
                <input type="submit" class="btn btn-outline-dark" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Spinner -->
  <div v-if="loading">
    <div class="container">
      <div class="row">
        <div class="col">
          <Spinner />
        </div>
      </div>
    </div>
  </div>

  <!-- Error Message -->
  <div v-if="!loading && errorMessage">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3 text-danger fw-bold">Network Error</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact.id">
        <div class="card my-2 list-group-item-success">
          <div class="card-body">
            <div class="row align-item-center">
              <div class="col-sm-3">
                <img
                  :src="contact.img"
                  alt="image not found"
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">{{ contact.name }}</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">{{ contact.email }}</span>
                  </li>
                  <li class="list-group-item">
                    Phone:
                    <span class="fw-bold">{{ contact.mobile }}</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-2 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  :to="`/contacts/view/${contact.id}`"
                  class="btn btn-warning my-1"
                >
                  <i class="fa fa-eye"> </i>
                </router-link>
                <router-link
                  :to="`/contacts/edit/${contact.id}`"
                  class="btn btn-primary my-1"
                >
                  <i class="fa fa-pen"> </i>
                </router-link>
                <router-link
                  :to="`/contacts/view/${contact.id}`"
                  class="btn btn-danger my-1"
                >
                  <i class="fa fa-trash"> </i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import { ContactService } from "@/service/ContactService";
export default {
  name: "Contact Manager",
  components: { Spinner },
  data: function () {
    return {
      loading: true,
      contacts: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getAllContact();
      this.contacts = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
      console.log(error);
    }
  },
  methods: {},
};
</script>
