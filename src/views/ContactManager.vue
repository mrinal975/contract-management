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
  <pre>{{ contacts }}</pre>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success">
          <div class="card-body">
            <div class="row align-item-center">
              <div class="col-sm-3">
                <img
                  src="../assets/download.png"
                  alt="image not found"
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">Mrinal</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">Mrina</span>
                  </li>
                  <li class="list-group-item">
                    Phone: <span class="fw-bold">+0163</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-2 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  to="/contacts/view/12"
                  class="btn btn-warning my-1"
                >
                  <i class="fa fa-eye"> </i>
                </router-link>
                <router-link
                  to="/contacts/edit/323"
                  class="btn btn-primary my-1"
                >
                  <i class="fa fa-pen"> </i>
                </router-link>
                <router-link
                  to="/contacts/view/98"
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
import { ContactService } from "@/service/ContactService";
export default {
  name: "Contact Manager",
  data: function () {
    return {
      loading: false,
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
