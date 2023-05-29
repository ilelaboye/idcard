<template>
  <div class="order px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0 text-uppercase">
        {{ users.length > 0 ? users[0].company_name : "Company details" }}
      </h5>
    </div>
    <div class="order-body">
      <ul class="nav nav-pills my-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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
            class="nav-link active"
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
            id="pills-payments-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-payments"
            type="button"
            role="tab"
            aria-controls="pills-payments"
            aria-selected="false"
          >
            Payments
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
          class="tab-pane fade"
          id="pills-details"
          role="tabpanel"
          aria-labelledby="pills-details-tab"
        >
          <h4 class="card-title">Company details</h4>
        </div>
        <div
          class="tab-pane fade show active"
          id="pills-users"
          role="tabpanel"
          aria-labelledby="pills-users-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>No of Orders Placed</th>
                  <th>No of Payments Created</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <td>{{ item.first_name }} {{ item.last_name }}</td>
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
          id="pills-payments"
          role="tabpanel"
          aria-labelledby="pills-payments-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Payment No</th>
                  <th style="min-width: 250px">Paid To</th>
                  <th>Amount</th>
                  <th>Created At</th>
                  <th>Due Date</th>

                  <th>Payee Name</th>
                  <th>Payment Status</th>
                  <th>Payment Method</th>
                  <th>Session ID</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in payments" :key="index">
                  <td>
                    <router-link
                      class="btn btn-view"
                      :to="{ name: 'companyView', params: { id: item.id } }"
                      ><i class="fa fa-eye"></i
                    ></router-link>
                  </td>
                  <td>{{ item.payment_no }}</td>
                  <td>
                    <div class="d-flex flex-column">
                      <p class="mb-0">{{ item.account_number }}</p>
                      <span>{{ item.bank_name }}</span>
                      <p class="mb-0">{{ item.account_name }}</p>
                    </div>
                  </td>
                  <td>₦{{ formatPrice(item.total) }}</td>
                  <td>{{ formatDateTime(item.created_at) }}</td>
                  <td>{{ formatDateTime(item.due_date) }}</td>
                  <td>{{ item.payee_name }}</td>
                  <td>
                    <span class="badge badge-primary" v-if="item.status == 0"
                      >draft</span
                    >
                    <span class="badge badge-info" v-else-if="item.status == 1"
                      >Sent for approval</span
                    >
                    <span
                      class="badge badge-success"
                      v-else-if="item.status == 2"
                      >Approved</span
                    >
                    <span
                      class="badge badge-danger"
                      v-else-if="item.status == 3"
                      >Rejected</span
                    >
                    <span
                      class="badge badge-success"
                      v-else-if="item.status == 4"
                      >Fully Paid</span
                    >
                    <span
                      class="badge badge-danger"
                      v-else-if="item.status == 5"
                      >Error in Payment (Reprocessing)</span
                    >
                    <span
                      class="badge badge-primary"
                      v-else-if="item.status == 6"
                      >Awaiting Funds</span
                    >
                    <span class="badge badge-info" v-else-if="item.status == 7"
                      >Awaiting Due Date</span
                    >
                    <span
                      class="badge badge-primary"
                      v-else-if="item.status == 9"
                      >Processing</span
                    >
                    <span
                      class="badge badge-danger"
                      v-else-if="item.status == 99"
                      >Deleted</span
                    >
                    <span v-else></span>
                  </td>
                  <td>
                    {{ item.method }}
                  </td>
                  <td>{{ item.sessionID }}</td>
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
                <tr v-for="(item, index) in transactions" :key="index">
                  <td>{{ item.transaction_no }}</td>
                  <td>{{ formatPrice(item.amount) }}</td>
                  <td>
                    <span class="badge badge-success" v-if="item.status == 1"
                      >Credit</span
                    >
                    <span
                      class="badge badge-primary"
                      v-else-if="item.status == 2"
                      >Debit</span
                    >
                    <span v-else></span>
                  </td>
                  <td>
                    <span v-if="item.mode == 1">Wallet</span>
                    <span v-else-if="item.mode == 2">Purchases</span>
                    <span v-else-if="item.mode == 3">Online Payment</span>
                    <span v-else-if="item.mode == 4">Offline Payment</span>
                    <span v-else></span>
                  </td>
                  <td>{{ item.mode_id }}</td>
                  <td>{{ formatDateTime(item.date) }}</td>
                  <td>{{ item.payment_no }}</td>
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
      payments: [],
    };
  },
  methods: {
    getCompany() {
      this.$store
        .dispatch("get", `company/30/null`)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCompanyUsers() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `allusers/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.users = resp.data.users;
          // console.log(this.users);
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
          this.transactions = resp.data.transactions;
          // console.log(resp.data);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
    getPayments() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `payments/all/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          // this.$store.commit("setLoader", false);
          // this.loaded = true;
          this.payments = resp.data.payments;
          // console.log(resp);
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
    this.getPayments();
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
