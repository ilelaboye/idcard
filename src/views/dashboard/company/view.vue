<template>
  <div class="order px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Companies</h5>
    </div>
    <div class="order-body">
      <ul class="nav nav-pills my-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-details-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-details"
            type="button"
            role="tab"
            aria-controls="pills-details"
            aria-selected="true"
          >
            Details
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-users-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-users"
            type="button"
            role="tab"
            aria-controls="pills-users"
            aria-selected="false"
          >
            Users
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-transac-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-transac"
            type="button"
            role="tab"
            aria-controls="pills-transac"
            aria-selected="false"
          >
            Transactions
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-details"
          role="tabpanel"
          aria-labelledby="pills-details-tab"
        >
          <h4 class="card-title">Company details</h4>
        </div>
        <div
          class="tab-pane fade"
          id="pills-users"
          role="tabpanel"
          aria-labelledby="pills-users-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Company ID</th>
                  <th>Company Name</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Amount of Orders Placed</th>
                  <th>Amount of Payments Created</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users.transactions" :key="index">
                  <td>{{ item.company_slug }}</td>
                  <td>{{ item.company_name }}</td>
                  <td>{{ item.first_name }}</td>
                  <td>{{ item.last_name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.role_id }}</td>
                  <td>{{ item.department }}</td>
                  <td>{{ item.orderCount }}</td>
                  <td>{{ item.paymentCount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-transac"
          role="tabpanel"
          aria-labelledby="pills-transac-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Transaction No</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Mode</th>
                  <th>Mode ID</th>
                  <th>Date</th>
                  <th>Payment No</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in transactions.transactions"
                  :key="index"
                >
                  <td>${{ item.company_name }}</td>
                  <td>${{ item.transaction_no }}</td>
                  <td>${{ item.amount }}</td>
                  <td>
                    <span v-if="item.status == 1">Credit</span>
                    <span v-else-if="item.status == 2">Debit</span>
                    <span v-else></span>
                  </td>
                  <td>
                    <span v-if="item.mode == 1">Wallet</span>
                    <span v-else-if="item.mode == 2">Purchases</span>
                    <span v-else-if="item.mode == 3">Online Payment</span>
                    <span v-else-if="item.mode == 4">Offline Payment</span>
                    <span v-else></span>
                  </td>
                  <td>${{ item.mode_id }}</td>
                  <td>${{ item.date }}</td>
                  <td>${{ item.payment_no }}</td>
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
export default {
  data() {
    return {
      loaded: false,
      users: [],
      transactions: [],
    };
  },
  methods: {
    getCompany() {},
    getCompanyUsers() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `allusers/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.users = resp.data;
          console.log(resp.data);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
    getCompanyTransactions() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `allcoytransactions/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.transactions = resp.data;
          console.log(resp.data);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
  },
  created() {
    this.getCompany();
    this.getCompanyUsers();
    this.getCompanyTransactions();
  },
};
</script>

<style scoped lang="scss">
.order {
  .order-body {
    .nav-link {
      color: black;
      padding: 5px 54px;
      font-size: 14px;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
      color: #fff;
    }
  }
}
</style>
