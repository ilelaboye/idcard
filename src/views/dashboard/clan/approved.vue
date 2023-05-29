<template>
  <div class="order px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0 text-uppercase">Clan Approved Transactions</h5>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Date Added</th>
                  <th>Date Approved</th>
                  <th>Vertical</th>
                  <th>merchant ID</th>
                  <th>Transaction Type</th>
                  <th>Account No</th>
                  <th>Bank Name</th>
                  <th>Bank Account Name</th>
                  <th>Transaction Reference</th>
                  <th>Transaction Description</th>
                  <th>Session ID</th>
                </tr>
              </thead>
              <tbody v-if="transactions.length > 0">
                <tr v-for="(transact, index) in transactions" :key="index">
                  <td>{{ transact.id }}</td>

                  <td>₦{{ formatPrice(transact.amount) }}</td>
                  <td>{{ formatDateTime(transact.date_added) }}</td>

                  <td>{{ formatDateTime(transact.date_approved) }}</td>
                  <td>{{ transact.vertical }}</td>
                  <td>{{ transact.merchant_id }}</td>
                  <td>{{ transact.transaction_type }}</td>
                  <td>{{ transact.destination_account_number }}</td>
                  <td>{{ transact.destination_bank_name2 }}</td>
                  <td>{{ transact.destination_bank_name }}</td>
                  <td>{{ transact.transaction_reference }}</td>
                  <td>{{ transact.transaction_description }}</td>
                  <td>{{ transact.session_id }}</td>
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
import banks from "@/data/banks.json";
import NoData from "@/components/dashboard/noData.vue";
export default {
  components: { NoData },
  data() {
    return {
      loaded: true,
      transactions: [],
    };
  },
  methods: {
    getTransactions() {
      console.log("ddd");
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("get", `payments/clanapproved/${this.$store.state.user.id}`)
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.transactions = resp.data;
          this.transactions.forEach((item) => {
            for (let i = 0; i < banks.length; i++) {
              if (item.destination_bank_code == banks[i].bank_code) {
                item.destination_bank_name2 = banks[i].name;
              }
            }
            if (item.destination_bank_code == 1) {
              item.destination_bank_name2 = "OFFLINE";
            }
          });

          console.log(resp);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
  },
  created() {
    // console.log(banks);
    this.getTransactions();
  },
};
</script>

<style></style>
