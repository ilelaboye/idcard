<template>
  <div class="dashboard py-3 px-2" v-if="loaded">
    <div class="container-fluid">
      <h6 class="card-title">Dashboard</h6>
      <div class="row statistics">
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances.clan)) }}</h6>
                <p class="text-muted">Clan Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances.monnify)) }}</h6>
                <p class="text-muted">Monnify Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances.providus)) }}</h6>
                <p class="text-muted">Providus Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances?.paystack || 0)) }}</h6>
                <p class="text-muted">Paystack Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances?.psb || 0)) }}</h6>
                <p class="text-muted">9PSB Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances?.allCompany || 0)) }}</h6>
                <p class="text-muted">All Company Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances.termii)) }}</h6>
                <p class="text-muted">Termii Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances.vtpass)) }}</h6>
                <p class="text-muted">VTPass Balance</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-3 mb-3">
          <div class="card">
            <a href="javascript:void()" class="d-flex">
              <div class="stat-no">
                <h6>{{ formatPrice(roundUpAmount(balances.mobilienig)) }}</h6>
                <p class="text-muted">MobileNg Balance</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="row statistics mt-3 mb-3">
        <div class="col-sm-9">
          <div class="card">
            <div class="card-body">
              <AreaChart :chartData="{ title: 'Expense Statistic' }" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <AreaChart :chartData="{ title: 'Wallet Statistic' }" />
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import AreaChart from "@/components/dashboard/charts/AreaChart";
// import merchants from "@/components/dashboard/merchants";
export default {
  computed: {
    ...mapState({
      user: (context) => context.user,
    }),
  },
  // components: { AreaChart },
  data() {
    return {
      // userExpense: [],
      balances: {},
      loaded: false,
    };
  },
  methods: {
    getBalances() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("get", `external/allbalances/${this.$store.state.user.id}`)
        .then((resp) => {
          this.loaded = true;
          this.$store.commit("setLoader", false);
          console.log(resp);
          this.balances = resp.data;
        });
    },
  },
  async created() {
    this.getBalances();
  },
};
</script>

<style scoped lang="scss">
.statistics {
  .stat-icon {
    background: #5f63f210;
    height: fit-content;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 31.996px;
    }
  }
  .stat-no {
    padding: 10px;

    h6 {
      font-size: 28px;
      margin-bottom: 0;
      color: black;
    }
    p {
      font-size: 13px;
      margin-bottom: 0;
    }
  }
}
</style>
