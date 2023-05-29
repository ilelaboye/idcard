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
              <tbody v-if="transactions.length > 0">
                <tr v-for="(transact, index) in transactions" :key="index">
                  <td>₦{{ formatPrice(transact.amount) }}</td>
                  <td>{{ transact.account_number }}</td>
                  <td>{{ transact.transaction_payload.craccountname }}</td>
                  <td>
                    {{ transact.transaction_payload.originatoraccountnumber }}
                  </td>
                  <td>{{ transact.transaction_payload.originatorname }}</td>
                  <td>{{ transact.transaction_payload.narration }}</td>
                  <td>{{ transact.transaction_payload.bankname }}</td>
                  <td>{{ transact.transaction_payload.currency }}</td>
                  <td>{{ formatDateTime(transact.date_added) }}</td>
                  <td>{{ formatDateTime(transact.date_modified) }}</td>
                  <td>{{ transact.session_id }}</td>
                  <td>{{ transact.transaction_reference }}</td>
                  <td>{{ transact.is_verified }}</td>
                  <td>{{ transact.posted_to_wallet }}</td>
                  <td>{{ transact.check_for_split_payment }}</td>
                  <td>{{ transact.has_been_posted }}</td>
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
import axio from "axios";
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
      this.$store.commit("setLoader", true);
      axio
        .post(
          "https://wema.creditclan.com/api/v3/wema/bsmptransactions/",
          { start: 0, account_number: "", start_date: "", end_date: "" },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.transactions = resp.data.records;
          console.log(resp);
        })
        .catch((err) => {
          this.$store.dispatch("handleError", err);
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
