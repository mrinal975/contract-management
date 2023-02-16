<template>
  <!-- <Spinner /> -->
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "App",
  components: { NavBar, Spinner },
};
</script>
