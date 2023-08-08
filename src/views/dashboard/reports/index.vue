<template>
  <div class="orders px-2 mt-2" v-if="loaded">
    <div class="report-tab">
      <ul class="nav nav-pills my-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-report-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-report"
            type="button"
            role="tab"
            aria-controls="pills-report"
            aria-selected="true"
          >
            Report
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-history-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-history"
            type="button"
            role="tab"
            aria-controls="pills-history"
            aria-selected="false"
          >
            Termii History
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-history-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-refunds"
            type="button"
            role="tab"
            aria-controls="pills-refunds"
            aria-selected="false"
          >
            Refunds History
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-history-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-airtime"
            type="button"
            role="tab"
            aria-controls="pills-airtime"
            aria-selected="false"
          >
            Airtime History
          </button>
        </li>
      </ul>
    </div>
    <div class="order-body">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-report"
          role="tabpanel"
          aria-labelledby="pills-report-tab"
        >
          <div class="card">
            <div class="card-body pt-2">
              <div
                class="d-flex justify-content-between align-items-center mb-3"
              >
                <h5 class="card-title mb-0">Reports</h5>
                <div class="search d-flex" style="width: 25em">
                  <multiselect
                    v-model="company"
                    :options="companies"
                    label="company_name"
                  >
                  </multiselect>
                  <button
                    class="btn btn-primary f-13 ms-1"
                    @click.prevent="getReports()"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th class="text-center">Count</th>
                      <th class="text-center">Payment</th>
                      <th class="text-center">Refund</th>
                      <th class="text-center">Offline Paymnent</th>
                      <th class="text-center">Wallet Inflow</th>
                      <th class="text-center">Fee Based</th>
                      <th class="text-center">Subscription</th>
                      <th class="text-center">Total Revenue</th>
                      <th class="text-center">VAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in report" :key="index">
                      <td>
                        {{ item.name }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.count)) }}
                      </td>
                      <td class="text-center">
                        {{
                          formatPrice(
                            roundUpAmount(parseFloat(item.online_payment))
                          )
                        }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.refund)) }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.offline_payment)) }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.wallet_inflow)) }}
                      </td>
                      <td class="text-center">
                        {{
                          formatPrice(
                            roundUpAmount(
                              parseFloat(item.fee) -
                                parseFloat(calculateVAT(item.fee))
                            )
                          )
                        }}
                      </td>
                      <td class="text-center">
                        {{
                          formatPrice(
                            roundUpAmount(
                              parseFloat(item.subscription) -
                                parseFloat(item.subRefund) -
                                parseFloat(calculateVAT(item.subscription))
                            )
                          )
                        }}
                      </td>
                      <td class="text-center">
                        {{
                          formatPrice(
                            roundUpAmount(
                              parseFloat(item.fee) -
                                parseFloat(calculateVAT(item.fee)) +
                                (parseFloat(item.subscription) -
                                  parseFloat(item.subRefund) -
                                  parseFloat(calculateVAT(item.subscription)))
                            )
                          )
                        }}
                      </td>
                      <td class="text-center">
                        {{
                          formatPrice(
                            roundUpAmount(
                              calculateVAT(item.fee) +
                                calculateVAT(item.subscription)
                            )
                          )
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-history"
          role="tabpanel"
          aria-labelledby="pills-history-tab"
        >
          <div class="card">
            <div class="card-body pt-2">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Phone</th>
                      <th>Created At</th>
                      <th>Sent At</th>
                      <th>Status</th>
                      <!-- <th>Message</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in termiiHistory" :key="index">
                      <td>{{ item.amount }}</td>
                      <td>{{ item.receiver }}</td>
                      <td>{{ formatDateTimeSecond(item.created_at) }}</td>
                      <td>{{ formatDateTimeSecond(item.sent_at) }}</td>
                      <td>
                        <span
                          class="badge"
                          :class="
                            item.status == 'Delivered' || item.status == 'Sent'
                              ? 'badge-success'
                              : 'badge-danger'
                          "
                          >{{ item.status }}</span
                        >
                      </td>
                      <!-- <td>{{ item.message }}</td> -->
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-refunds"
          role="tabpanel"
          aria-labelledby="pills-refunds-tab"
        >
          <div class="card">
            <div class="card-body pt-2">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>Amount</th>
                      <th>Mode</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in refundsHistory" :key="index">
                      <td>{{ item.companyName }}</td>
                      <td>{{ item.amountRefunded }}</td>
                      <td>
                        <span v-if="item.mode == 1">Wallet</span>
                        <span v-else-if="item.mode == 2">Purchases</span>
                        <span v-else-if="item.mode == 3">Online Payment</span>
                        <span v-else-if="item.mode == 4">Offline Payment</span>
                        <span v-else-if="item.mode == 6">Subscription</span>
                        <span v-else-if="item.mode == 7">Fee</span>
                        <span v-else></span>
                      </td>
                      <td>{{ formatDateTimeSecond(item.date) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-airtime"
          role="tabpanel"
          aria-labelledby="pills-airtime-tab"
        >
          <div class="card">
            <div class="card-body pt-2">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Company Name</th>
                      <th>Amount</th>
                      <th>Partner</th>
                      <th>Order No</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in airtimeHistory" :key="index">
                      <td>{{ item.companyName }}</td>
                      <td>{{ item.amount }}</td>
                      <td>{{ item.method }}</td>
                      <td>
                        <span
                          class="badge"
                          :class="
                            item.status == 1 
                              ? 'badge-success'
                              : 'badge-danger'
                          "
                          >
                          <span v-if="item.status == 1">Success</span>
                          <span v-else-if="item.status == 2">Failed</span>
                          <span v-else></span>
                        </span>
                      </td>
                      <td>{{ item.orderNo }}</td>
                      <td>{{ formatDateTimeSecond(item.updatedAt) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      loaded: false,
      company: {},
      companies: [],
      termiiHistory: [],
      refundsHistory: [],
      airtimeHistory: [],
      vat_percent: 0,
      report: [
        {
          name: "Jan",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Feb",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Mar",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Apr",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "May",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Jun",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Jul",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Aug",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Sep",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Oct",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Nov",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
        {
          name: "Dec",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
          fee: 0,
          refund: 0,
          subscription: 0,
          subRefund: 0,
          count: 0,
        },
      ],
    };
  },
  methods: {
    calculateVAT(amount) {
      var vatFee =
        (parseFloat(this.vat_percent) / (100 + parseFloat(this.vat_percent))) *
        amount;
      return vatFee;
    },
    getCompanies() {
      this.$store
        .dispatch("get", "get-companies/" + this.$store.state.user.id)
        .then((resp) => {
          this.companies = resp.data;
          // console.log(this.companies);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },

    getTermiiHistory(page = 1) {
      this.$store
        .dispatch(
          "get",
          `external/termii/history/${this.$store.state.user.id}?page=${page}`
        )
        .then((resp) => {
          console.log(resp);
          this.termiiHistory = resp.data.termiiHistory;
        });
    },
    getRefundsHistory(page = 1) {
      this.$store
        .dispatch("get", `refunds/${this.$store.state.user.id}?page=${page}`)
        .then((resp) => {
          console.log(resp);
          this.refundsHistory = resp.data;
        });
    },
    getAirtimeHistory(page) {
      this.$store
        .dispatch(
          "get",
          `airtime/${this.$store.state.user.id}?page=${page}`
        )
        .then((resp) => {
          console.log(resp);
          this.airtimeHistory = resp.data.airtime;
        });
    },
    getReports() {
      this.$store.commit("setLoader", true);
      this.report.forEach((item) => {
        item.offline_payment = 0;
        item.online_payment = 0;
        item.wallet_inflow = 0;
        item.fee = 0;
        item.refund = 0;
        item.subscription = 0;
        item.subRefund = 0;
        item.count = 0;
      });
      console.log(this.company);
      if (!this.company) this.company = {};
      this.$store
        .dispatch(
          "get",
          `reports/${this.$store.state.user.id}?company_id=${this.company.id}`
        )
        .then((resp) => {
          this.loaded = true;
          // var count = [];
          resp.data.forEach((item) => {
            var month = new Date(String(item.date)).getMonth();
            if (item.mode == 3 && item.status == 1) {
              this.report[month].count -= 1;
              this.report[month].refund =
                this.report[month].refund + parseFloat(item.amount);
              this.report[month].online_payment =
                this.report[month].online_payment - parseFloat(item.amount);
            }
            if (item.mode == 3 && item.status == 2) {
              var amount = item.fees;
              if (!amount) {
                amount = 0;
              }
              this.report[month].fee =
                this.report[month].fee + parseFloat(amount);
            }
            if (item.mode == 3 && item.status == 2) {
              this.report[month].count += 1;
              this.report[month].online_payment =
                this.report[month].online_payment + parseFloat(item.amount);
            }
            if (item.mode == 6 && item.status == 2) {
              this.report[month].subscription =
                this.report[month].subscription + parseFloat(item.amount);
            }
            if (item.mode == 6 && item.status == 1) {
              this.report[month].subRefund =
                this.report[month].subRefund + parseFloat(item.amount);
              this.report[month].subscription =
                this.report[month].subscription - parseFloat(item.amount);
            }
            if (item.mode == 4 && item.status == 2) {
              this.report[month].count += 1 
              this.report[month].offline_payment =
                this.report[month].offline_payment + parseFloat(item.amount);
            }
            if (item.mode == 1 && item.status == 1) {
              this.report[month].wallet_inflow =
                this.report[month].wallet_inflow + parseFloat(item.amount);
            }
          });
          // console.log(count);
          this.$store.commit("setLoader", false);
        });
    },
  },
  created() {
    this.vat_percent = process.env.VUE_APP_VAT_PERCENT;
    this.getReports();
    this.getCompanies();
    this.getTermiiHistory();
    this.getRefundsHistory();
    this.getAirtimeHistory();
  },
};
</script>

<style lang="scss" scoped>
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background: #012538 !important;
}
.nav-link {
  color: black;
  padding: 5px 54px;
  font-size: 14px;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
}
</style>
