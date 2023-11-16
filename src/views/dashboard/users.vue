<template>
  <div class="dashboard py-3 px-2" v-if="loaded">
    <div class="container-fluid">
      <h6 class="card-title">Users</h6>
      <div class="card">
        <div class="card-body">
          <h6>Users</h6>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Card No</th>
                  <th>Phone</th>
                  <th>NIN</th>
                  <th>DOB</th>
                  <th>Place of Birth</th>
                  <th>Gender</th>
                  <th>Image</th>
                  <th>Passport</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <td>{{ item.first_name }}</td>
                  <td>{{ item.last_name }}</td>
                  <td>{{ item.card_number }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.nin }}</td>
                  <td>{{ item.date_of_birth }}</td>
                  <td>{{ item.place_of_birth }}</td>
                  <td>{{ item.gender }}</td>
                  <td>
                    <a
                      :href="item.image"
                      target="_blank"
                      class="d-block"
                      style="height: 50px; width: 25px"
                    >
                      <img :src="item.image" class="h-100 w-100" />
                    </a>
                  </td>
                  <td>
                    <a
                      :href="item.passport"
                      target="_blank"
                      class="d-block"
                      style="height: 30px"
                    >
                      <img :src="item.passport" class="h-100 w-100" />
                    </a>
                  </td>
                  <td>
                    <span v-if="item.status == 1" class="badge badge-success"
                      >Approved</span
                    >
                    <span v-if="item.status == 2" class="badge badge-danger"
                      >Rejected</span
                    >
                    <span v-if="item.status == 0" class="badge badge-primary"
                      >Pending</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //   import { mapState } from "vuex";
  // import AreaChart from "@/components/dashboard/charts/AreaChart";
  // import merchants from "@/components/dashboard/merchants";
  export default {
    // components: { AreaChart },
    data() {
      return {
        // userExpense: [],
        balances: {},
        loaded: false,
        users: [],
      };
    },
    methods: {
      getUsers() {
        this.$store.commit("setLoader", true);
        this.$store.dispatch("get", `get-all-users`).then((resp) => {
          this.loaded = true;
          this.$store.commit("setLoader", false);
          console.log(resp);
          this.users = resp.data;
        });
      },
      approveUser(id) {
        this.$store.commit("setLoader", true);
        this.$store
          .dispatch("get", `approve/${id}`)
          .then((resp) => {
            console.log(resp);

            this.$store.commit("setLoader", false);
            window.ToasterAlert("success", "User approved successfully");
            window.setTimeout(() => {
              window.location.reload();
            }, 1500);
          })
          .catch(() => {
            this.$store.commit("setLoader", false);
          });
      },
      rejectUser(id) {
        this.$store.commit("setLoader", true);
        this.$store
          .dispatch("get", `reject/${id}`)
          .then((resp) => {
            console.log(resp);

            this.$store.commit("setLoader", false);
            window.ToasterAlert("success", "User rejected successfully");
            window.setTimeout(() => {
              window.location.reload();
            }, 1500);
          })
          .catch(() => {
            this.$store.commit("setLoader", false);
          });
      },
    },
    async created() {
      this.getUsers();
    },
  };
</script>

<style scoped lang="scss">
  .statistics {
    .stat-icon {
      background: #5f63f210;
      height: fit-content;
      border-radius: 10px;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 31.996px;
      }
    }
    .stat-no {
      padding: 10px;

      h6 {
        font-size: 28px;
        margin-bottom: 0;
        color: black;
      }
      p {
        font-size: 13px;
        margin-bottom: 0;
      }
    }
  }
</style>
