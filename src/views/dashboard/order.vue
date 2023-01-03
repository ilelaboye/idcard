<template>
  <div class="orders px-2 py-4" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h4 class="mb-0 card-title">
        Order <span>{{ order.order.order_no }}</span>
      </h4>

      <div class="order-actions">
        <button
          class="btn btn-success f-14"
          data-bs-toggle="modal"
          data-bs-target="#approveModal"
        >
          <i class="fas fa-check me-1"></i> Approve
        </button>
        <button
          class="btn btn-danger ms-1 f-14"
          data-bs-toggle="modal"
          data-bs-target="#rejectModal"
        >
          <i class="fas fa-times me-1"></i> Decline
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
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Shipping</th>
                  <th v-if="order.order.merchant == 'Amazon'">Tax</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in order.product" :key="index">
                  <td>
                    {{ item.description }}
                  </td>
                  <td>{{ currency }}{{ formatPrice(item.price) }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ currency }}{{ formatPrice(item.shipping) }}</td>
                  <td v-if="order.order.merchant == 'Amazon'">
                    {{ currency }}{{ formatPrice(item.tax) }}
                  </td>
                  <td>
                    {{ currency
                    }}{{
                      formatPrice(
                        item.quantity * item.price + item.shipping + item.tax
                      )
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="body-footer mt-3">
            <div class="bf-wrapper row justify-content-between">
              <div class="col-md-4">
                <div class="bf-approval">
                  <h6 class="bf-header">Delivery Address</h6>
                  <p class="deli-add">
                    {{ order.order.address }}, {{ order.order.city }},
                    {{ order.order.state }}
                  </p>
                </div>
                <div class="bf-approval">
                  <h6 class="bf-header">Requestor</h6>
                  <p class="deli-add">
                    {{ order.order.order_by_name }}
                  </p>
                </div>
                <div class="bf-approval">
                  <h6 class="bf-header">Supplier</h6>
                  <p class="deli-add">
                    {{ order.order.merchant }}
                  </p>
                </div>
              </div>
              <div class="bt-calc col-md-4">
                <div class="btc-item">
                  <h6 class="bfc-title">Subtotal:</h6>
                  <span
                    >{{ currency }}{{ formatPrice(order.order.total) }}</span
                  >
                </div>
                <div class="btc-item">
                  <h6 class="bfc-title">Shipping:</h6>
                  <span
                    >{{ currency }}{{ formatPrice(order.order.shipping) }}</span
                  >
                </div>
                <div class="btc-item" v-if="order.order.merchant == 'Amazon'">
                  <h6 class="bfc-title">Taxes:</h6>
                  <span>{{ currency }}{{ formatPrice(order.order.tax) }}</span>
                </div>
                <div class="btc-item">
                  <h6 class="bfc-title">Processing fee:</h6>
                  <span
                    >{{ currency
                    }}{{ formatPrice(Math.ceil(proccessing_fee)) }}</span
                  >
                </div>
                <div class="btc-item btci-total">
                  <h6 class="bfc-title">Total:</h6>
                  <span>{{ currency }}{{ formatPrice(Math.ceil(total)) }}</span>
                </div>
              </div>
            </div>
            <div class="bf-wrapper row mt-3">
              <div class="col-md-6">
                <h6 class="bf-header">Business Purpose</h6>
                <textarea
                  class="form-control"
                  cols="30"
                  rows="2"
                  placeholder="Summary"
                  v-model="order.order.summary"
                  disabled
                ></textarea>
                <textarea
                  class="form-control mt-2"
                  cols="30"
                  rows="4"
                  placeholder="Details"
                  v-model="order.order.detail"
                  disabled
                ></textarea>
              </div>
              <div class="col-md-6">
                <div class="bf-approvals">
                  <h6 class="bf-header">Approvals</h6>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody v-if="order.approvers.length > 0">
                        <tr
                          v-for="(item, index) in order.approvers"
                          :key="index"
                        >
                          <td>{{ item.first_name }} {{ item.last_name }}</td>
                          <td>{{ item.EXECUTOR_ID }}</td>
                          <td>
                            <span
                              class="badge badge-primary"
                              v-if="item.APPROVAL_STATUS == 0"
                              >pending</span
                            >
                            <span
                              class="badge badge-success"
                              v-if="item.APPROVAL_STATUS == 1"
                              >approved</span
                            >
                            <span
                              class="badge badge-danger"
                              v-if="item.APPROVAL_STATUS == 2"
                              >rejected</span
                            >
                          </td>
                        </tr>
                      </tbody>
                      <NoData
                        v-else
                        :data="{ colspan: 3, message: 'No approver found' }"
                      ></NoData>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="activity mt-5">
              <h6 class="f-15">Activity</h6>
              <div v-if="order.order.activities.length > 0">
                <div
                  class="activity-body"
                  v-for="(item, key) in order.order.activities"
                  :key="key"
                >
                  <div class="act-item">
                    <div class="act-icon">{{ item.activity[0] }}</div>
                    <div class="act-content">
                      <p>{{ item.activity }}</p>
                      <span class="text-muted">{{
                        formatDateTimeSecond(item.activity_date)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <table class="w-100" v-else>
                <thead>
                  <tr>
                    <td></td>
                  </tr>
                </thead>
                <NoData :data="{ colspan: 1, message: 'No activity' }"></NoData>
              </table>
            </div>
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
            <form action="">
              <div class="form-group">
                <label for="notes">Comment</label>
                <textarea
                  class="form-control"
                  id="notes"
                  v-model="notes"
                  cols="30"
                  rows="5"
                >
                </textarea>
              </div>
              <button
                class="btn btn-success"
                :disabled="loading"
                @click="approveOrder()"
              >
                <span v-if="!loading">Approve</span>
                <span v-else>Loading...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="rejectModal"
      tabindex="-1"
      aria-labelledby="rejectModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="rejectModalLabel">Decline Request</h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-group">
                <label for="notes">Comment</label>
                <textarea
                  class="form-control"
                  id="notes"
                  v-model="notes"
                  cols="30"
                  rows="5"
                >
                </textarea>
              </div>
              <button
                class="btn btn-danger"
                :disabled="loading"
                @click="rejectOrder()"
              >
                <span v-if="!loading">Decline</span>
                <span v-else>Loading...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import NoData from "@/components/dashboard/noData.vue";
export default {
  components: { NoData },
  data() {
    return {
      loading: false,
      order: [],
      loaded: false,
      selected: [],
      approvers: [],
      approver: "",
      proccessing_fee: 0,
      total: 0,
      subtotal: 0,
      notes: "",
      summary: "",
      detail: "",
      currency: "",
      myApprove: {},
    };
  },
  methods: {
    rejectOrder() {
      this.loading = true;
      this.$store
        .dispatch("post", {
          endpoint: "approvalqueue/reject/" + this.$store.state.user.user_id,
          details: { order_id: this.order.order.order_id, notes: this.notes },
        })
        .then((resp) => {
          this.loading = false;
          window.$("#rejectModal").modal("hide");
          window.SweetAlert("success", resp.data);
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          this.loading = false;
          window.$("#rejectModal").modal("hide");
          this.$store.dispatch("handleError", err);
        });
    },
    approveOrder() {
      this.loading = true;
      this.$store
        .dispatch("post", {
          endpoint: "approvalqueue/approve/" + this.$store.state.user.user_id,
          details: { order_id: this.order.order.order_id, notes: this.notes },
        })
        .then((resp) => {
          this.loading = false;
          window.$("#approveModal").modal("hide");
          window.SweetAlert("success", resp.data);
          window.location.reload();
        })
        .catch((err) => {
          this.loading = false;
          window.$("#approveModal").modal("hide");
          this.$store.dispatch("handleError", err);
        });
    },
    getOrder() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          "orders/one/" +
            this.$store.state.user.id +
            "/" +
            this.$route.params.id
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          console.log(resp);
          this.order = resp.data;
          this.loaded = true;
          this.subtotal =
            this.order.order.total +
            this.order.order.shipping +
            this.order.order.tax;
          this.proccessing_fee = 0.03 * this.subtotal;
          this.total = this.subtotal + this.proccessing_fee;
          this.currency = this.order.order.merchant == "Amazon" ? "$" : "₦";
        });
    },
    // getProcessingFee() {
    //   this.$store
    //     .dispatch(
    //       "get",
    //       "users/approvers/read/" + this.$store.state.user.user_id
    //     )
    //     .then((resp) => {
    //       resp.data.map((item) => this.approvers.push(item.EXECUTOR_ID));
    //       console.log(this.approvers);
    //     });
    // },
  },
  created() {
    console.log("dllflf");
    this.getOrder();
    // this.getApprovals();
  },
};
</script>
<style scoped lang="scss">
.multiselect {
  width: 77%;
}
.ms-aitem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ms-li {
  list-style: none;
  font-size: 16px;
}
.bal_stat {
  font-size: 13px;
  padding: 5px;
}
.activity {
  .act-item {
    display: flex;
    align-items: center;
    margin-top: 15px;
    .act-icon {
      width: 33px;
      min-width: 33px;
      height: 33px;
      border-radius: 33px;
      color: #fff;
      background: #068759;
      text-align: center;
      line-height: 33px;
      text-transform: capitalize;
      font-weight: 500;
    }
    .act-content {
      margin-left: 15px;
      font-size: 13px;

      p {
        margin-bottom: 0;
        font-weight: 500;
      }
    }
  }
}
.order-actions {
  .btn {
    padding: 5px 10px;
  }
}
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
textarea.form-control {
  font-size: 14px;
  padding: 1px 5px;
}
.body-footer {
  .bf-header {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .bf-wrapper {
    .bf-header,
    .deli-add {
      font-size: 14px;
      text-transform: capitalize;
    }
    .bt-calc {
      .btc-item {
        display: flex;
        justify-content: space-between;
        .bfc-title {
          font-size: 15px;
        }
      }
      .btci-total {
        border-top: 1px solid gray;
        margin-top: 10px;
        padding-top: 10px;
      }
    }
  }
}
@media (max-width: 767px) {
  .col-md-4,
  .bf-wrapper .col-md-6 {
    margin-top: 20px;
  }
}
</style>
