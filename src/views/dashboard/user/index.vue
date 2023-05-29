<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div class="main-title">
        <h6 class="mb-0">Users</h6>
        <div class="v-line"></div>
        <div class="search">
          <input
            type="text"
            class="form-control search"
            placeholder="Search users"
            v-model="search"
          />
        </div>
      </div>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Company ID</th>
                  <th>Email</th>

                  <th>Department</th>
                  <th>Role</th>
                  <th>No of Order</th>
                </tr>
              </thead>
              <tbody v-if="filteredList.length > 0">
                <tr v-for="(user, index) in filteredList" :key="index">
                  <td>{{ ++index }}</td>
                  <td>{{ user.last_name }} {{ user.first_name }}</td>

                  <td>{{ user.company_name }}</td>
                  <td>{{ user.company_slug }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    {{ user.department }}
                  </td>
                  <td>{{ user.role_id }}</td>
                  <td>{{ user.orderCount }}</td>
                </tr>
              </tbody>
              <NoData
                :data="{ colspan: 7, message: 'No registered user' }"
                v-else
              ></NoData>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoData from "@/components/dashboard/noData.vue";
export default {
  components: { NoData },
  computed: {
    filteredList() {
      return this.users.filter((user) => {
        return user.first_name
          ? user.first_name.toLowerCase().includes(this.search.toLowerCase())
          : null || user.last_name
          ? user.last_name.toLowerCase().includes(this.search.toLowerCase())
          : null ||
            user.email.toLowerCase().includes(this.search.toLowerCase()) ||
            user.company_name
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            user.role_id.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  data() {
    return {
      loading: false,
      users: [],
      selectedOrder: {},
      loaded: false,
      search: "",
    };
  },
  methods: {
    getUsers() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("get", "allusers/" + this.$store.state.user.id)
        .then((resp) => {
          this.loaded = true;
          this.$store.commit("setLoader", false);
          this.users = resp.data.users;
          console.log(this.users);
        });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped lang="scss">
.btn-success {
  font-size: 14px;
}
table thead tr th {
  color: #5a5f7d;
  background: #f8f9fb;
}
table tbody tr td {
  padding: 16px;
  color: #272b41;
}
.card-title {
  font-size: 18px;
}
.btn-add {
  font-size: 14px;
  border-radius: 0;
}
#approveModal .modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .confirm i {
    font-size: 60px;
    color: green;
  }
}
</style>
