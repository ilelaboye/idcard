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
        :to="{ name: 'reports' }"
        :class="$route.name == 'reports' ? 'active' : ''"
      >
        <i class="fa fa-table"></i>
        <span>Report</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light px-3"
        :to="{ name: 'demoRequests' }"
        :class="$route.name == 'demoRequests' ? 'active' : ''"
      >
        <i class="fa fa-question"></i>
        <span>Demo Requests</span>
      </router-link>
      <div>
        <a
          href="#usersCollapse"
          class="list-group-item list-group-item-action list-group-item-light px-3"
          data-bs-toggle="collapse"
          :class="
            $route.name == 'users' || $route.name == 'usersRequest'
              ? 'active'
              : ''
          "
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <i class="fas fa-thumbs-up"></i>
          <div class="d-flex justify-content-between w-100">
            <span>Clan Transactions</span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 407.436 407.436"
              style="enable-background: new 0 0 407.436 407.436"
              xml:space="preserve"
            >
              <polygon
                points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "
                fill="#000000"
                style="fill: rgb(99, 100, 100)"
              ></polygon>
            </svg>
          </div>
        </a>
        <div class="pa-dropd">
          <ul class="collapse nav flex-column ms-1" id="usersCollapse">
            <li class="w-100">
              <router-link
                :to="{ name: 'clanPendingTransactions' }"
                class="nav-link"
                :class="
                  $route.name == 'clanPendingTransactions' ? 'active' : ''
                "
              >
                Pending</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'clanApprovedTransactions' }"
                class="nav-link"
                :class="
                  $route.name == 'clanApprovedTransactions' ? 'active' : ''
                "
              >
                Approved
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'clanInflow' }"
                class="nav-link"
                :class="$route.name == 'clanInflow' ? 'active' : ''"
              >
                Inflows
              </router-link>
            </li>
          </ul>
        </div>
      </div>

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
  .pa-dropd {
    .nav-link {
      display: block;
      padding-left: 62px;
      color: #636464;
      font-size: 14px;
      &:hover {
        color: #272b41;
        background-color: #f0f3ff;
        // border-radius: 6px;
      }
      &.active {
        color: #272b41;
        background-color: #f0f3ff !important;
      }
    }
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
