<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Transactions</h5>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Account Transferred to (Account Number)</th>
                  <th>Account Transferred to (Account Name)</th>
                  <th>Money Transferred from (Account Number)</th>
                  <th>Money Transferred from (Account Name)</th>
                  <th>Money Transferred from (Narration)</th>
                  <th>Money Transferred from (Bank Name)</th>
                  <th>Currency</th>
                  <th>Date Added</th>
                  <th>Date Modified</th>
                  <th>Session ID (Our Own Reference)</th>
                  <th>Transaction Reference (Clan's Own)</th>
                  <th>Is_Verified</th>
                  <th>Posted To Wallet</th>
                  <th>Check For Split Payment</th>
                  <th>Has Been Posted</th>
                </tr>
              </thead>
              <tbody v-if="transactions.company_transactions.length > 0">
                <tr
                  v-for="(transact, index) in transactions.company_transactions"
                  :key="index"
                >
                  <td>{{ ++index }}</td>
                  <td>{{ transact.amount }}</td>
                  <td>{{ transact.transact_by }}</td>
                  <td>{{ transact.company_name }}</td>
                  <td>{{ transact.products }} products</td>
                  <td>
                    <!-- {{ transact.merchant == "Jumia" ? "₦" : "$" }} -->
                    ₦{{ formatPrice(transact.shipping) }}
                  </td>

                  <td>
                    {{
                      transact.delivery_address + transact.city + transact.state
                    }}
                  </td>
                  <td>
                    <span
                      v-if="transact.status == 1"
                      class="badge badge-primary"
                      >Awaiting Processing</span
                    >
                    <span
                      v-if="transact.status == 2"
                      class="badge badge-success"
                      >processed</span
                    >
                  </td>
                  <td>
                    <!-- {{ transact.merchant == "Jumia" ? "₦" : "$"
                    }} -->
                    ₦{{ formatPrice(transact.total) }}
                  </td>

                  <td>₦{{ formatPrice(transact.account_balance) }}</td>
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
