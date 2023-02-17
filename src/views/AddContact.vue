<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s
        </p>
      </div>
    </div>
  </div>
  <pre>{{ contact }}</pre>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.name"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.img"
              class="form-control"
              placeholder="Photo Url"
            />
          </div>
          <div class="mb-2">
            <input
              type="number"
              v-model="contact.mobile"
              class="form-control"
              placeholder="Mobile"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="contact.company"
              class="form-control"
              placeholder="Company"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="contact.title"
              placeholder="Title"
            />
          </div>
          <div class="mb-2">
            <selector class="form-control" v-if="groups.length > 0">
              <option value="">Select Group</option>
              <option value="" v-for="group of group" :key="group.id">
                {{ group.name }}
              </option>
            </selector>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="create" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4gZrd_VO1NSruRjZiHRpTqeBGStyLtYKpHyKnfGJfg&s"
          class="contact-img"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ContactService } from "@/service/ContactService";

export default {
  name: "AddContact",
  data: function () {
    return {
      contact: {
        name: "",
        company: "",
        email: "",
        title: "",
        mobile: "",
        img: "",
        groupId: "",
      },
      groups: [],
    };
  },
  created: async function () {
    try {
      let response = await ContactService.getAllGroups();
      this.groups = response;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
