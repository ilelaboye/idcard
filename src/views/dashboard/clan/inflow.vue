<template>
  <div class="order px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0 text-uppercase">Wallet Inflow From Clan</h5>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Sender</th>
                  <th>Creditor</th>
                  <th>Narration</th>
                  <th>Transaction Ref</th>
                  <th>Payment Ref</th>
                  <th>Session ID</th>
                </tr>
              </thead>
              <tbody v-if="transactions.length > 0">
                <tr v-for="(item, index) in transactions" :key="index">
                  <td>{{ formatDateTime(item.created_at) }}</td>

                  <td>₦{{ formatPrice(item.amount) }}</td>
                  <td>
                    <span class="d-block">{{
                      item.originatoraccountnumber
                    }}</span>
                    <span class="d-block">{{ item.originatorname }}</span>
                    <span>{{ item.bankname }}</span>
                  </td>
                  <td>
                    <span class="d-block">{{ item.craccount }}</span>
                    <span class="d-block">{{ item.craccountname }}</span>
                  </td>

                  <td>
                    {{ item.narration }}
                  </td>
                  <td>{{ item.transactionRef }}</td>
                  <td>{{ item.paymentreference }}</td>
                  <td>{{ item.sessionid }}</td>
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
    getInflow() {
      console.log("ddd");
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `external/clan/inflow/history/${this.$store.state.user.id}`
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.transactions = resp.data;

          console.log(resp);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
  },
  created() {
    console.log(this.$store.state.user);
    this.getInflow();
  },
};
</script>

<style></style>
