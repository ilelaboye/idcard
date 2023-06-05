<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Reports</h5>
      <div class="search d-flex" style="width: 25em">
        <multiselect
          v-model="company"
          :options="companies"
          label="company_name"
        >
        </multiselect>
        <button class="btn btn-primary f-13 ms-1" @click.prevent="getReports()">
          Submit
        </button>
      </div>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
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
                    ₦{{ formatPrice(roundUpAmount(item.online_payment)) }}
                  </td>
                  <td class="text-center">
                    ₦{{ formatPrice(roundUpAmount(item.offline_payment)) }}
                  </td>
                  <td class="text-center">
                    ₦{{ formatPrice(roundUpAmount(item.wallet_inflow)) }}
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
          console.log(this.companies);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
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
          resp.data.forEach((item) => {
            var month = new Date(item.date).getMonth();
            if (item.mode == 3 && item.status == 2) {
              this.report[month].online_payment =
                this.report[month].online_payment + parseFloat(item.amount);
            }
            if (item.mode == 4 && item.status == 2) {
              this.report[month].offline_payment =
                this.report[month].offline_payment + parseFloat(item.amount);
            }
            if (item.mode == 1 && item.status == 1) {
              this.report[month].wallet_inflow =
                this.report[month].wallet_inflow + parseFloat(item.amount);
            }
          });
          this.$store.commit("setLoader", false);
        });
    },
  },
  created() {
    this.getReports();
    this.getCompanies();
  },
};
</script>

<style></style>
