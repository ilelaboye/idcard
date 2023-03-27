<template>
  <div id="sidebar-wrapper">
    <div class="list-group list-group-flush">
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        to="/dashboard"
        :class="$route.name == 'dashboard' ? 'active' : ''"
      >
        <i class="fas fa-home"></i>
        <span>Dashboard</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        to="/users"
        :class="$route.name == 'users' ? 'active' : ''"
      >
        <i class="fas fa-users"></i>
        <span>Users</span>
      </router-link>
      <a
        class="list-group-item list-group-item-action list-group-item-light px-3"
        href="https://punchouttest.000webhostapp.com/admin_allcoyusers.html"
        target="_blank"
      >
        <i class="fas fa-users"></i>
        <span>Company Users</span>
      </a>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        :to="{ name: 'companies' }"
        :class="$route.name == 'companies' ? 'active' : ''"
      >
        <i class="fa fa-building"></i>
        <span>Companies</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        :to="{ name: 'demoRequests' }"
        :class="$route.name == 'demoRequests' ? 'active' : ''"
      >
        <i class="fa fa-question"></i>
        <span>Demo Requests</span>
      </router-link>
      <a
        class="list-group-item list-group-item-action list-group-item-light px-3"
        href="https://punchouttest.000webhostapp.com/admin_allcoytransactions.html"
        target="_blank"
      >
        <i class="fa fa-exchange"></i>
        <span>Companies Transactions</span>
      </a>
      <a
        class="list-group-item list-group-item-action list-group-item-light px-3"
        href="https://punchouttest.000webhostapp.com/admin_allpayments.html"
        target="_blank"
      >
        <i class="fa fa-credit-card"></i>
        <span>All Payments</span>
      </a>
      <a
        class="list-group-item list-group-item-action list-group-item-light px-3"
        href="https://punchouttest.000webhostapp.com/clanApproved.html"
        target="_blank"
      >
        <i class="fas fa-thumbs-up"></i>
        <span>Clan Approved Transactions</span>
      </a>
      <a
        class="list-group-item list-group-item-action list-group-item-light px-3"
        href="https://punchouttest.000webhostapp.com/clanPending.html"
        target="_blank"
      >
        <i class="fas fa-thumbs-down"></i>
        <span>Clan Pending Transactions</span>
      </a>

      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        to="/jumia-orders"
        :class="$route.name == 'jumiaOrders' ? 'active' : ''"
      >
        <i class="fab fa-opencart"></i>
        <span>Jumia Orders</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        :to="{ name: 'kongaOrders' }"
        :class="$route.name == 'kongaOrders' ? 'active' : ''"
      >
        <i class="fab fa-opencart"></i>
        <span>Konga Orders</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        to="/amazon-orders"
        :class="$route.name == 'amazonOrders' ? 'active' : ''"
      >
        <i class="fab fa-amazon"></i>
        <span>Amazon Orders</span>
      </router-link>

      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        to="/transactions"
      >
        <i class="fab fa-opencart"></i>
        <span>Transactions</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        to="/admin-transactions"
      >
        <i class="fab fa-opencart"></i>
        <span>Admin Transactions</span>
      </router-link>
      <a
        class="list-group-item list-group-item-action list-group-item-light px-3"
        href="javascript:void()"
        @click="logout()"
      >
        <i class="fas fa-power-off"></i>
        <span>Logout</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (context) => context.user,
    }),
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
  created() {},
};
</script>
<style scoped lang="scss">
#sidebar-wrapper {
  strong {
    padding: 4px 7px;
    border-radius: 20px;
    background: #5f63f2;
    color: #fff;
    font-size: 13px;
    margin-left: 10px;
  }
  .dash-logo {
    width: 180px;
    .c-name {
      font-size: 14px;
      margin-left: 5px;
      display: block;
      margin-top: -2px;
    }
    .role {
      margin-left: 5px;
      span {
        font-size: 10px;
        margin-right: 5px;
      }
    }
  }
  .list-group {
    margin-top: 20px;
    .list-group-item {
      border: none;
      font-size: 14px;
      margin-bottom: 11px;

      padding: 10px 0;
      display: flex;
      align-items: center;
      a {
        color: #272b41;
      }
      &.active {
        color: #272b41;
        background-color: #f0f3ff;
        // border-radius: 6px;
        svg,
        i {
          color: #5f63f2;
        }
      }
      &:hover {
        color: #272b41;
        background-color: #f0f3ff;
        // border-radius: 6px;
      }
    }
    i,
    svg {
      margin-right: 17px;
      font-size: 14px;
      width: 20px;
    }
    svg {
      width: 15px;
      margin-right: 21px;
    }
  }
}
</style>
