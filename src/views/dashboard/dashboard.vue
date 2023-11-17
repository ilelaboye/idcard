<template>
  <div class="dashboard py-3 px-2" v-if="loaded">
    <div class="container-fluid">
      <h6 class="card-title">Dashboard</h6>
      <div class="row statistics">
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(users.length)) }}</h6>
                <p class="text-muted">Total Users</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h6>Pending</h6>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>NIN</th>
                  <th>DOB</th>
                  <th>Place of Birth</th>
                  <th>Gender</th>
                  <th>Image</th>
                  <th>Passport</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <td>
                    <a :href="`user/${item.id}`">
                      <svg
                        style="width: 24px"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        enable-background="new 0 0 512 512"
                      >
                        <g>
                          <g>
                            <path
                              d="m499.4,250.8c-51-86.3-143.6-140.4-243.4-140.4s-192.5,54.1-243.4,140.4c-2.1,3.1-2.1,7.3 5.32907e-15,10.4 51,86.3 143.6,140.4 243.4,140.4s192.5-54.1 243.4-140.4c2.1-3.1 2.1-7.3 0-10.4zm-243.4,130c-90.5,0-174.8-47.8-221.6-124.8 46.8-77 131.1-124.8 221.6-124.8s174.8,47.8 221.6,124.8c-46.8,77-131.1,124.8-221.6,124.8z"
                            />
                            <path
                              d="m256,162.4c-52,0-93.6,41.6-93.6,93.6 0,52 41.6,93.6 93.6,93.6s93.6-41.6 93.6-93.6c0-52-41.6-93.6-93.6-93.6zm0,166.4c-40.6,0-72.8-32.3-72.8-72.8s32.3-72.8 72.8-72.8 72.8,32.3 72.8,72.8-32.2,72.8-72.8,72.8z"
                            />
                            <path
                              d="m256,214.4v20.8c11.4,0 20.8,9.4 20.8,20.8s-9.4,20.8-20.8,20.8-20.8-9.4-20.8-20.8h-20.8c0,22.9 18.7,41.6 41.6,41.6 22.9,0 41.6-18.7 41.6-41.6s-18.7-41.6-41.6-41.6z"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </td>
                  <td>{{ item.first_name }}</td>
                  <td>{{ item.last_name }}</td>
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
                    {{ item.passport }}
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
  // import { mapState } from "vuex";
  // import AreaChart from "@/components/dashboard/charts/AreaChart";
  // import merchants from "@/components/dashboard/merchants";
  export default {
    computed: {
      // ...mapState({
      //   user: (context) => context.user,
      // }),
    },
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
        this.$store.dispatch("get", `get-users`).then((resp) => {
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
