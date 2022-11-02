<template>
  <div class="border-end" id="sidebar-wrapper">
    <div class="sidebar-heading p-3 d-flex align-items-center">
      <div class="dash-logo">
        <img src="@/assets/img/logo.png" class="w-100" />
      </div>
      <div class="ms-2 dl-txt">
        <p>BuySimply</p>
        <span>Super Dashboard</span>
      </div>
    </div>
    <div class="list-group list-group-flush">
      <router-link
        class="list-group-item list-group-item-action list-group-item-light active p-3"
        to="/dashboard"
      >
        <i class="fas fa-th-large"></i>
        <span>Dashboard</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light p-3"
        to="/orders"
      >
        <i class="fas fa-shopping-basket"></i>
        <span>Orders</span>
      </router-link>
      <router-link
        class="list-group-item list-group-item-action list-group-item-light p-3"
        to="/merchants"
      >
        <i class="fas fa-store"></i>
        <span>Merchants</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
#sidebar-wrapper {
  padding-left: 15px;
  padding-right: 15px;
  .dl-txt {
    p {
      margin: 0;
      font-weight: bold;
    }
    span {
      font-size: 12px;
    }
  }
  .dash-logo {
    width: 60px;
  }
  .list-group {
    margin-top: 20px;
    .list-group-item {
      border: none;
      font-size: 15px;
      margin-bottom: 5px;
      &.active {
        color: black;
        background-color: #f3f4f8;
        border-radius: 6px;
      }
      &:hover {
        color: black;
        background-color: #f3f4f8;
        border-radius: 6px;
      }
    }
    i {
      margin-right: 17px;
      font-size: 17px;
    }
  }
}
</style>
