<template>
  <div class="dashboard py-3 px-2">
    <div class="container-fluid">
      <h6 class="card-title">Dashboard</h6>
      <div class="row statistics mt-3 mb-3">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AreaChart from "@/components/dashboard/charts/AreaChart";
// import merchants from "@/components/dashboard/merchants";
export default {
  computed: {
    ...mapState({
      user: (context) => context.user,
    }),
  },
  components: { AreaChart },
  data() {
    return {
      // userExpense: [],
      balances: {},
    };
  },
  methods: {
    getBalances() {
      this.$store
        .dispatch("get", `external/termii/history/${this.$store.state.user.id}`)
        .then((resp) => {
          console.log(resp);
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
    margin-left: 10px;

    h6 {
      font-size: 28px;
      margin-bottom: 0;
    }
    p {
      font-size: 13px;
      margin-bottom: 0;
    }
  }
}
</style>
