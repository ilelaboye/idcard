<template>
  <div class="layout-dashboard">
    <Loader v-if="loader" />

    <Navbar />
    <div class="d-flex wrapper" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/dashboard/sidebar.vue";
import Navbar from "@/components/dashboard/navbar.vue";
import Loader from "@/components/dashboard/loader.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      loader: (context) => context.loader,
    }),
  },
  components: {
    Sidebar,
    Navbar,
    Loader,
  },
  created() {
    this.$store.commit("getUser");
    // console.log(this.$store.state.user);
    if (this.$store.state.user.role_id == 0) {
      window.location = "/pending";
    }
  },
};
</script>

<style scoped lang="scss">
#page-content-wrapper {
  background: #f4f5f7;
}
</style>
