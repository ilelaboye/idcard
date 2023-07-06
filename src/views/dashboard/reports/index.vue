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
                      <th class="text-center">Payment</th>
                      <th class="text-center">Offline Paymnent</th>
                      <th class="text-center">Wallet Inflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in report" :key="index">
                      <td>
                        {{ item.name }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.online_payment)) }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.offline_payment)) }}
                      </td>
                      <td class="text-center">
                        {{ formatPrice(roundUpAmount(item.wallet_inflow)) }}
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
            <div class="card-body pt-2"></div>
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
      report: [
        {
          name: "Jan",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Feb",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Mar",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Apr",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "May",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Jun",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Jul",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Aug",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Sep",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Oct",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Nov",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
        {
          name: "Dec",
          online_payment: 0,
          offline_payment: 0,
          wallet_inflow: 0,
        },
      ],
    };
  },
  methods: {
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
    getBalance() {
      this.$store
        .dispatch("get", `external/allbalances/${this.$store.state.user.id}`)
        .then((resp) => {
          console.log(resp);
        });
    },
    getTermiiHistory() {
      this.$store
        .dispatch("get", `external/termii/history/${this.$store.state.user.id}`)
        .then((resp) => {
          console.log(resp);
        });
    },
    getReports() {
      this.$store.commit("setLoader", true);
      this.report.forEach((item) => {
        item.offline_payment = 0;
        item.online_payment = 0;
        item.wallet_inflow = 0;
      });

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
            if (item.mode == 3 && item.status == 2) {
              this.report[month].online_payment =
                this.report[month].online_payment + parseFloat(item.amount);
            }
            if (item.mode == 4 && item.status == 2) {
              this.report[month].offline_payment =
                this.report[month].offline_payment + parseFloat(item.amount);
            }
            if (item.mode == 1 && item.status == 1) {
              // if (month == 5) {
              //   count.push(`${item.id} - ${item.date}`);
              // }
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
    this.getBalance();
    this.getReports();
    this.getCompanies();
    this.getTermiiHistory();
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
