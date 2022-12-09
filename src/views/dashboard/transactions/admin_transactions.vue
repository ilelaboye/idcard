<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Admin Transactions</h5>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Account Name</th>
                  <th>Amount Transferred</th>
                  <th>Transaction No</th>
                  <th>Company Deducted from</th>
                  <th>Order ID</th>
                  <th>Order No</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody v-if="transactions.admin_transactions.length > 0">
                <tr
                  v-for="(transact, index) in transactions.admin_transactions"
                  :key="index"
                >
                  <td>{{ ++index }}</td>
                  <td>{{ transact.account_name }}</td>
                  <td>₦{{ formatPrice(transact.amount) }}</td>
                  <td>{{ transact.transaction_no }}</td>
                  <td>{{ transact.company_name }}</td>
                  <td>
                    {{ transact.order_id }}
                  </td>
                  <td>
                    {{ transact.order_no }}
                  </td>
                  <td>
                    {{ formatDateTime(transact.date) }}
                  </td>
                </tr>
              </tbody>
              <NoData
                :data="{ colspan: 9, message: 'No available transaction' }"
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
// import NoData from "@/components/dashboard/noData.vue";
export default {
  // components: { NoData },
  data() {
    return {
      loading: false,
      transactions: [],
      loaded: false,
    };
  },
  methods: {
    getTransactions() {
      this.$store
        .dispatch("get", "alltransactions/" + this.$store.state.user.id)
        .then((resp) => {
          this.loaded = true;
          this.transactions = resp.data;
          console.log(resp);
        });
    },
  },
  created() {
    this.getTransactions();
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
