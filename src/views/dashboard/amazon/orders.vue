<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Orders</h5>
      <button
        class="btn btn-primary btn-add"
        data-bs-toggle="modal"
        data-bs-target="#merchantsModal"
      >
        <i class="fas fa-plus me-2"></i> Create Order
      </button>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Order Id</th>
                  <th>Requester</th>
                  <th>Items</th>
                  <th>Shipping</th>
                  <th>Merchant</th>
                  <th>Total</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody v-if="orders.length > 0">
                <tr v-for="(order, index) in orders" :key="index">
                  <td>{{ ++index }}</td>
                  <td>{{ order.order_id }}</td>
                  <td>{{ order.order_by_name }}</td>
                  <td>{{ order.products }} products</td>
                  <td>
                    {{ order.merchant == "Jumia" ? "₦" : "$" }}
                    {{ formatPrice(order.shipping) }}
                  </td>
                  <td>{{ order.merchant }}</td>
                  <td>
                    {{ order.merchant == "Jumia" ? "₦" : "$"
                    }}{{ formatPrice(order.total) }}
                  </td>
                  <td>
                    {{ formatDateTime(order.date) }}
                  </td>
                  <td>
                    <span class="badge badge-success" v-if="order.approval == 1"
                      >approved</span
                    >
                    <span class="badge badge-primary" v-else>pending</span>
                  </td>
                  <td>
                    <router-link
                      :to="'order/' + order.order_id"
                      class="btn-view"
                    >
                      <i class="fas fa-eye"></i>
                    </router-link>
                  </td>
                </tr>
              </tbody>
              <NoData
                :data="{ colspan: 9, message: 'No available order' }"
                v-else
              ></NoData>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="merchantsModal"
      tabindex="-1"
      aria-labelledby="merchantsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="merchantsModalLabel">
              Select merchant
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <merchants />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import merchants from "@/components/dashboard/merchants.vue";
import NoData from "@/components/dashboard/noData.vue";
export default {
  components: { merchants, NoData },
  data() {
    return {
      amazon: {
        url: process.env.VUE_APP_PHP_PUNCHOUT_URL,
      },
      loading: false,
      orders: [],
      loaded: false,
    };
  },
  methods: {
    getOrders() {
      this.$store
        .dispatch("get", "orders/company/all/" + this.$store.state.user.id)
        .then((resp) => {
          this.loaded = true;
          this.orders = resp.data;
          console.log(this.orders);
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped lang="scss">
table thead tr th {
  color: #5a5f7d;
  background: #f8f9fb;
}
table tbody tr td {
  padding: 16px;
  color: #272b41;
}
.card-title {
  font-size: 18px;
}
.btn-add {
  font-size: 14px;
  border-radius: 0;
}
</style>
