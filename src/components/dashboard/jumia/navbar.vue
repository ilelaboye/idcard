<template>
  <div class="j-topbar">
    <a href="/jumia" class="j-logo">
      <img src="@/assets/img/jumia.png" alt="jumia logo" class="w-100" />
    </a>
    <div class="jt-right d-flex align-items-center">
      <form class="j-search-form" @submit.prevent="searchProduct()">
        <div class="search d-flex align-items-center">
          <i class="fa fa-search"></i>
          <input type="text" class="form-control" v-model="search" />
        </div>
        <button class="btn btn-jsub" type="submit">Search</button>
      </form>
      <router-link to="/jumia/cart" class="cart-icon">
        <i class="fas fa-shopping-cart"></i>
        <span>{{ cart.length }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cart: (context) => context.cart,
    }),
  },
  data() {
    return {
      search: this.$store.state.jumiaSearch,
    };
  },
  methods: {
    searchProduct() {
      window.location = `/jumia?search=${this.search}`;
    },
  },
  created() {
    this.$store.commit("getCart");
    if (this.$route.query.search) {
      this.$store.state.jumiaSearch = this.$query.search;
      this.search = this.$route.query.search;
    }
  },
};
</script>

<style scoped lang="scss">
.j-topbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .j-logo {
    width: 150px;
  }
  .jt-right {
    margin-right: 8px;
    .j-search-form {
      display: flex;
      align-items: center;
      margin-right: 20px;
      .search {
        // border: 1px solid #ced4da;
        border-radius: 21px;
        padding: 4px 9px 4px 15px;
        margin-right: 15px;
        min-width: 17em;
        max-width: 80vw;
        background: #fff;
        input {
          border: none;
          box-shadow: none;
          outline: none;
          font-size: 14px;
        }
        i {
          font-size: 14px;
        }
      }

      .btn-jsub {
        background-color: #fe9900;
        color: #fff;
      }
    }
    .cart-icon {
      i {
        font-size: 22px;
        color: black;
      }
      span {
        display: block;
        height: 18px;
        width: 18px;
        line-height: 18px;
        background-color: #f57f17;
        border-radius: 50%;
        color: #ffffff;
        font-size: 12px;
        position: absolute;
        text-align: center;
        margin-top: -37px;
        margin-left: 8px;
        box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
}
@media (max-width: 576px) {
  .jumia .j-topbar {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .j-topbar .jt-right .j-search-form {
    margin-right: 4px;
  }
  .j-topbar .jt-right .j-search-form .search {
    margin-right: 7px;
    min-width: 16em;
  }
  .j-logo {
    margin-bottom: 10px;
  }
}
@media (max-width: 360px) {
  .j-topbar .jt-right .j-search-form .search {
    min-width: 14em;
  }
}
</style>
