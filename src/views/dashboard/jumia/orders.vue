<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Orders</h5>
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
                  <th>Company</th>
                  <th>Items</th>
                  <th>Shipping</th>
                  <th>Delivery Address</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Wallet Balance</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody v-if="orders.length > 0">
                <tr v-for="(order, index) in orders" :key="index">
                  <td>{{ ++index }}</td>
                  <td>{{ order.id }}</td>
                  <td>{{ order.order_by }}</td>
                  <td>{{ order.company_name }}</td>
                  <td>{{ order.products }} products</td>
                  <td>
                    <!-- {{ order.merchant == "Jumia" ? "₦" : "$" }} -->
                    ₦{{ formatPrice(order.shipping) }}
                  </td>

                  <td>
                    {{ order.delivery_address + order.city + order.state }}
                  </td>
                  <td>
                    <span v-if="order.status == 1" class="badge badge-primary"
                      >Awaiting Processing</span
                    >
                    <span v-if="order.status == 2" class="badge badge-success"
                      >processed</span
                    >
                  </td>
                  <td>
                    <!-- {{ order.merchant == "Jumia" ? "₦" : "$"
                    }} -->
                    ₦{{ formatPrice(order.total) }}
                  </td>

                  <td>₦{{ formatPrice(order.account_balance) }}</td>
                  <td>
                    {{ formatDateTime(order.date) }}
                  </td>

                  <td>
                    <button
                      class="btn btn-purple"
                      data-bs-toggle="modal"
                      data-bs-target="#approveModal"
                      @click="changeOrder(order)"
                    >
                      <i class="fas fa-check"></i>
                    </button>
                    <!-- <router-link
                      :to="'order/' + order.order_id"
                      class="btn-view"
                    >
                      <i class="fas fa-eye"></i>
                    </router-link> -->
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
      id="approveModal"
      tabindex="-1"
      aria-labelledby="approveModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="approveModalLabel">Approve Order</h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="confirm">
              <i class="fas fa-check"></i>
            </div>
            <p class="my-3">Confirm Approval</p>
            <button
              class="btn btn-success"
              :disabled="loading"
              @click="approveOrder()"
            >
              <span v-if="!loading">Approve</span>
              <span v-else>Loading...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NoData from "@/components/dashboard/noData.vue";
export default {
  // components: { NoData },
  data() {
    return {
      loading: false,
      orders: [],
      selectedOrder: {},
      loaded: false,
    };
  },
  methods: {
    getOrders() {
      this.$store
        .dispatch("get", "allorders/jumia/" + this.$store.state.user.id)
        .then((resp) => {
          this.loaded = true;
          this.orders = resp.data;
          console.log(resp);
        });
    },
    changeOrder(order) {
      this.selectedOrder = order;
    },
    approveOrder() {
      this.loading = true;
      this.$store
        .dispatch("post", {
          endpoint: "allorders/jumia/" + this.$store.state.user.id,
          details: { order_id: this.selectedOrder.id },
        })
        .then(() => {
          // this.getOrders()
          this.loading = false;

          // window.$("#approveModal").modal("hide");
          window.ToasterAlert("success", "Order processed successfully");

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
    },
  },
  created() {
    console.log(this.$store.state.user);
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
#approveModal .modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .confirm i {
    font-size: 60px;
    color: green;
  }
}
</style>
