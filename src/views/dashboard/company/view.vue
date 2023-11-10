<template>
  <div class="order px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0 text-uppercase">
        {{ users.length > 0 ? users[0].company_name : "Company details" }}
      </h5>
    </div>
    <div class="order-body">
      <ul class="nav nav-pills my-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-details-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-details"
            type="button"
            role="tab"
            aria-controls="pills-details"
            aria-selected="true"
          >
            Details
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-users-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-users"
            type="button"
            role="tab"
            aria-controls="pills-users"
            aria-selected="false"
          >
            Users
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-payments-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-payments"
            type="button"
            role="tab"
            aria-controls="pills-payments"
            aria-selected="false"
          >
            Payments
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-transac-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-transac"
            type="button"
            role="tab"
            aria-controls="pills-transac"
            aria-selected="false"
          >
            Transactions
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-details"
          role="tabpanel"
          aria-labelledby="pills-details-tab"
        >
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h4 class="card-title mb-0">Company details</h4>
            <div>
              <button
                class="btn btn-primary f-13"
                data-bs-target="#fundWallet"
                data-bs-toggle="modal"
              >
                Temporary Fund Wallet
              </button>
              <button
                class="btn btn-primary f-13 ms-1"
                data-bs-target="#refundWallet"
                data-bs-toggle="modal"
              >
                Refund
              </button>
            </div>
          </div>

          <div class="kpi">
            <div class="row stat-wrap">
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <router-link to="" class="card-body d-flex">
                    <div class="stat-icon">
                      <svg
                        viewBox="0 0 35.012 18.235"
                        height="18.235"
                        width="35.012"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          xmlns="http://www.w3.org/2000/svg"
                          id="user"
                          transform="translate(-8 -12.583)"
                        >
                          <g
                            id="Group_1111"
                            data-name="Group 1111"
                            transform="translate(8 14.773)"
                          >
                            <circle
                              id="Ellipse_46"
                              data-name="Ellipse 46"
                              cx="2.917"
                              cy="2.917"
                              r="2.917"
                              transform="translate(2.919)"
                              fill="#f63178"
                              opacity="0.5"
                            ></circle>
                            <path
                              id="Path_1020"
                              data-name="Path 1020"
                              d="M17.731,17.5A6.115,6.115,0,0,0,15.3,22.386v.365h-6.2A1.1,1.1,0,0,1,8,21.657v-.729a4.009,4.009,0,0,1,4.011-4.011h3.648A4,4,0,0,1,17.731,17.5Z"
                              transform="translate(-8 -9.623)"
                              fill="#f63178"
                              opacity="0.5"
                            ></path>
                            <circle
                              id="Ellipse_47"
                              data-name="Ellipse 47"
                              cx="2.917"
                              cy="2.917"
                              r="2.917"
                              transform="translate(26.259)"
                              fill="#f63178"
                              opacity="0.5"
                            ></circle>
                            <path
                              id="Path_1021"
                              data-name="Path 1021"
                              d="M29.283,20.929v.729a1.1,1.1,0,0,1-1.094,1.094h-6.2v-.365A6.112,6.112,0,0,0,19.554,17.5a3.978,3.978,0,0,1,2.072-.584h3.648A4.012,4.012,0,0,1,29.283,20.929Z"
                              transform="translate(5.729 -9.625)"
                              fill="#f63178"
                              opacity="0.5"
                            ></path>
                          </g>
                          <circle
                            id="Ellipse_48"
                            data-name="Ellipse 48"
                            cx="4"
                            cy="4"
                            r="4"
                            transform="translate(21 12.583)"
                            fill="#f63178"
                          ></circle>
                          <path
                            id="Path_1022"
                            data-name="Path 1022"
                            d="M24.369,17.583H16.344a4.015,4.015,0,0,0-4.011,4.011v2.188a1.1,1.1,0,0,0,1.094,1.094H27.286a1.1,1.1,0,0,0,1.094-1.094V21.594A4.015,4.015,0,0,0,24.369,17.583Z"
                            transform="translate(5.149 5.941)"
                            fill="#f63178"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="stat-no">
                      <h6>{{ this.users.length }}</h6>
                      <p class="text-muted">Team Members</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <router-link to="" class="card-body d-flex">
                    <div class="stat-icon">
                      <svg
                        viewBox="0 0 31.996 26.985"
                        height="26.985"
                        width="31.996"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          xmlns="http://www.w3.org/2000/svg"
                          id="Group_1641"
                          data-name="Group 1641"
                          transform="translate(0.003 -40.092)"
                        >
                          <path
                            id="Path_1032"
                            data-name="Path 1032"
                            d="M27.95,40.379c-7.364,3.59-16.356,4-18.951,4.038H2.815A2.819,2.819,0,0,0,0,47.233C0,63.434-.015,62.5.032,62.705a1.32,1.32,0,0,0,.432.714h0a42.008,42.008,0,0,0,8.59.309,55.153,55.153,0,0,0,7.127-.574A43.054,43.054,0,0,0,29.366,59.3a13.8,13.8,0,0,0,2.628-1.272V42.913A2.814,2.814,0,0,0,27.95,40.379Zm1.415,15.943a39.344,39.344,0,0,1-13.555,4.231c-4.688.667-7.368.564-13.184.551V47.233a.188.188,0,0,1,.188-.187H8.057c6.692.106,15.072-1.395,21.045-4.306a.185.185,0,0,1,.264.171Z"
                            transform="translate(0 0)"
                            fill="#20c997"
                          ></path>
                          <path
                            id="Path_1033"
                            data-name="Path 1033"
                            d="M186.243,193.368a4.651,4.651,0,1,0-4.651-4.651A4.656,4.656,0,0,0,186.243,193.368Zm0-6.674a2.023,2.023,0,1,1-2.023,2.023,2.025,2.025,0,0,1,2.023-2.023Z"
                            transform="translate(-170.246 -134.976)"
                            fill="#20c997"
                          ></path>
                          <path
                            id="Path_1034"
                            data-name="Path 1034"
                            d="M375.136,133.958c.287,0,.222,0,2.418-.735a1.314,1.314,0,0,0-.831-2.493l-2,.667a1.314,1.314,0,0,0,.415,2.561Z"
                            transform="translate(-350.463 -84.909)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                          <path
                            id="Path_1035"
                            data-name="Path 1035"
                            d="M65.429,314.851h2a1.314,1.314,0,0,0,0-2.628h-2a1.314,1.314,0,0,0,0,2.628Z"
                            transform="translate(-60.111 -255.125)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                          <path
                            id="Path_1036"
                            data-name="Path 1036"
                            d="M39.008,327.06v3.522a2.817,2.817,0,0,1-1.483,2.48c-4.157,2.245-9.31,3.05-14.09,3.05-9.914,0-15.552-3.393-15.795-3.541a1.236,1.236,0,0,1-.161-.117,42,42,0,0,0,8.59.309c6.267,1.27,14.589,1.021,20.207-2.013a.193.193,0,0,0,.1-.168v-2.25A13.8,13.8,0,0,0,39.008,327.06Z"
                            transform="translate(-7.015 -269.034)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="stat-no">
                      <h6>
                        ₦{{ formatPrice(roundUpAmount(kpi.totalFees, 0)) }}
                      </h6>
                      <p class="text-muted">Monthly Fee</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <router-link to="" class="card-body d-flex">
                    <div class="stat-icon">
                      <svg
                        viewBox="0 0 31.996 26.985"
                        height="26.985"
                        width="31.996"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          xmlns="http://www.w3.org/2000/svg"
                          id="Group_1641"
                          data-name="Group 1641"
                          transform="translate(0.003 -40.092)"
                        >
                          <path
                            id="Path_1032"
                            data-name="Path 1032"
                            d="M27.95,40.379c-7.364,3.59-16.356,4-18.951,4.038H2.815A2.819,2.819,0,0,0,0,47.233C0,63.434-.015,62.5.032,62.705a1.32,1.32,0,0,0,.432.714h0a42.008,42.008,0,0,0,8.59.309,55.153,55.153,0,0,0,7.127-.574A43.054,43.054,0,0,0,29.366,59.3a13.8,13.8,0,0,0,2.628-1.272V42.913A2.814,2.814,0,0,0,27.95,40.379Zm1.415,15.943a39.344,39.344,0,0,1-13.555,4.231c-4.688.667-7.368.564-13.184.551V47.233a.188.188,0,0,1,.188-.187H8.057c6.692.106,15.072-1.395,21.045-4.306a.185.185,0,0,1,.264.171Z"
                            transform="translate(0 0)"
                            fill="#20c997"
                          ></path>
                          <path
                            id="Path_1033"
                            data-name="Path 1033"
                            d="M186.243,193.368a4.651,4.651,0,1,0-4.651-4.651A4.656,4.656,0,0,0,186.243,193.368Zm0-6.674a2.023,2.023,0,1,1-2.023,2.023,2.025,2.025,0,0,1,2.023-2.023Z"
                            transform="translate(-170.246 -134.976)"
                            fill="#20c997"
                          ></path>
                          <path
                            id="Path_1034"
                            data-name="Path 1034"
                            d="M375.136,133.958c.287,0,.222,0,2.418-.735a1.314,1.314,0,0,0-.831-2.493l-2,.667a1.314,1.314,0,0,0,.415,2.561Z"
                            transform="translate(-350.463 -84.909)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                          <path
                            id="Path_1035"
                            data-name="Path 1035"
                            d="M65.429,314.851h2a1.314,1.314,0,0,0,0-2.628h-2a1.314,1.314,0,0,0,0,2.628Z"
                            transform="translate(-60.111 -255.125)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                          <path
                            id="Path_1036"
                            data-name="Path 1036"
                            d="M39.008,327.06v3.522a2.817,2.817,0,0,1-1.483,2.48c-4.157,2.245-9.31,3.05-14.09,3.05-9.914,0-15.552-3.393-15.795-3.541a1.236,1.236,0,0,1-.161-.117,42,42,0,0,0,8.59.309c6.267,1.27,14.589,1.021,20.207-2.013a.193.193,0,0,0,.1-.168v-2.25A13.8,13.8,0,0,0,39.008,327.06Z"
                            transform="translate(-7.015 -269.034)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="stat-no">
                      <h6>
                        ₦{{ formatPrice(roundUpAmount(kpi.totalAmount, 0)) }}
                      </h6>
                      <p class="text-muted">Monthly Payment</p>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <router-link to="" class="card-body d-flex">
                    <div class="stat-icon">
                      <svg
                        viewBox="0 0 31.996 26.985"
                        height="26.985"
                        width="31.996"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          xmlns="http://www.w3.org/2000/svg"
                          id="Group_1641"
                          data-name="Group 1641"
                          transform="translate(0.003 -40.092)"
                        >
                          <path
                            id="Path_1032"
                            data-name="Path 1032"
                            d="M27.95,40.379c-7.364,3.59-16.356,4-18.951,4.038H2.815A2.819,2.819,0,0,0,0,47.233C0,63.434-.015,62.5.032,62.705a1.32,1.32,0,0,0,.432.714h0a42.008,42.008,0,0,0,8.59.309,55.153,55.153,0,0,0,7.127-.574A43.054,43.054,0,0,0,29.366,59.3a13.8,13.8,0,0,0,2.628-1.272V42.913A2.814,2.814,0,0,0,27.95,40.379Zm1.415,15.943a39.344,39.344,0,0,1-13.555,4.231c-4.688.667-7.368.564-13.184.551V47.233a.188.188,0,0,1,.188-.187H8.057c6.692.106,15.072-1.395,21.045-4.306a.185.185,0,0,1,.264.171Z"
                            transform="translate(0 0)"
                            fill="#20c997"
                          ></path>
                          <path
                            id="Path_1033"
                            data-name="Path 1033"
                            d="M186.243,193.368a4.651,4.651,0,1,0-4.651-4.651A4.656,4.656,0,0,0,186.243,193.368Zm0-6.674a2.023,2.023,0,1,1-2.023,2.023,2.025,2.025,0,0,1,2.023-2.023Z"
                            transform="translate(-170.246 -134.976)"
                            fill="#20c997"
                          ></path>
                          <path
                            id="Path_1034"
                            data-name="Path 1034"
                            d="M375.136,133.958c.287,0,.222,0,2.418-.735a1.314,1.314,0,0,0-.831-2.493l-2,.667a1.314,1.314,0,0,0,.415,2.561Z"
                            transform="translate(-350.463 -84.909)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                          <path
                            id="Path_1035"
                            data-name="Path 1035"
                            d="M65.429,314.851h2a1.314,1.314,0,0,0,0-2.628h-2a1.314,1.314,0,0,0,0,2.628Z"
                            transform="translate(-60.111 -255.125)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                          <path
                            id="Path_1036"
                            data-name="Path 1036"
                            d="M39.008,327.06v3.522a2.817,2.817,0,0,1-1.483,2.48c-4.157,2.245-9.31,3.05-14.09,3.05-9.914,0-15.552-3.393-15.795-3.541a1.236,1.236,0,0,1-.161-.117,42,42,0,0,0,8.59.309c6.267,1.27,14.589,1.021,20.207-2.013a.193.193,0,0,0,.1-.168v-2.25A13.8,13.8,0,0,0,39.008,327.06Z"
                            transform="translate(-7.015 -269.034)"
                            fill="#20c997"
                            opacity="0.5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div class="stat-no">
                      <h6>
                        ₦{{
                          formatPrice(
                            roundUpAmount(kpi.totalinflow - kpi.totaloutflow, 0)
                          )
                        }}
                      </h6>
                      <p class="text-muted">Wallet Balance</p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-users"
          role="tabpanel"
          aria-labelledby="pills-users-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>No of Orders Placed</th>
                  <th>No of Payments Created</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in users" :key="index">
                  <td>{{ item.first_name }} {{ item.last_name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.role_id }}</td>
                  <td>{{ item.department }}</td>
                  <td>{{ item.orderCount }}</td>
                  <td>{{ item.paymentCount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-payments"
          role="tabpanel"
          aria-labelledby="pills-payments-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Payment No</th>
                  <th style="min-width: 250px">Paid To</th>
                  <th>Amount</th>
                  <th>Created At</th>
                  <th>Due Date</th>

                  <th>Payee Name</th>
                  <th>Payment Status</th>
                  <th>Payment Method</th>
                  <th>Session ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in payments" :key="index">
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        class="btn btn-view"
                        :to="{ name: 'companyView', params: { id: item.id } }"
                        ><i class="fa fa-eye"></i
                      ></router-link>
                      <!-- you can only reprocess payment when it is stucked in processing -->
                      <button
                        class="btn btn-primary f-13"
                        @click.prevent="reprocessPayment(item.payment_no)"
                        v-if="item.status == 9"
                      >
                        Reprocess
                      </button>
                      <button
                        class="btn btn-primary f-12 ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#changeStatus"
                        @click="setSelectedPayment(item)"
                        v-if="item.status != 4 && item.status != 99"
                      >
                        Change Status
                      </button>
                    </div>
                  </td>
                  <td>{{ item.payment_no }}</td>
                  <td>
                    <div class="d-flex flex-column">
                      <p class="mb-0">{{ item.account_number }}</p>
                      <span>{{ item.bank_name }}</span>
                      <p class="mb-0">{{ item.account_name }}</p>
                    </div>
                  </td>
                  <td>₦{{ formatPrice(item.total) }}</td>
                  <td>{{ formatDateTime(item.created_at) }}</td>
                  <td>{{ formatDateTime(item.due_date) }}</td>
                  <td>{{ item.payee_name }}</td>
                  <td>
                    <span class="badge badge-primary" v-if="item.status == 0"
                      >draft</span
                    >
                    <span class="badge badge-info" v-else-if="item.status == 1"
                      >Sent for approval</span
                    >
                    <span
                      class="badge badge-success"
                      v-else-if="item.status == 2"
                      >Approved</span
                    >
                    <span
                      class="badge badge-danger"
                      v-else-if="item.status == 3"
                      >Rejected</span
                    >
                    <span
                      class="badge badge-success"
                      v-else-if="item.status == 4"
                      >Fully Paid</span
                    >
                    <span
                      class="badge badge-danger"
                      v-else-if="item.status == 5"
                      >Error in Payment (Reprocessing)</span
                    >
                    <span
                      class="badge badge-primary"
                      v-else-if="item.status == 6"
                      >Awaiting Funds</span
                    >
                    <span class="badge badge-info" v-else-if="item.status == 7"
                      >Awaiting Due Date</span
                    >
                    <span
                      class="badge badge-primary"
                      v-else-if="item.status == 9"
                      >Processing</span
                    >
                    <span class="badge badge-danger" v-else-if="item.status == 11"
                      >Cancelled</span
                    >
                    <span
                      class="badge badge-danger"
                      v-else-if="item.status == 99"
                      >Deleted</span
                    >
                    <span v-else></span>
                  </td>
                  <td>
                    {{ item.method }}
                  </td>
                  <td>{{ item.sessionID }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-transac"
          role="tabpanel"
          aria-labelledby="pills-transac-tab"
        >
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Transaction No</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Mode</th>
                  <th>Mode ID</th>
                  <th>Date</th>
                  <th>Payment No</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in transactions" :key="index">
                  <td>{{ item.transaction_no }}</td>
                  <td>{{ formatPrice(item.amount) }}</td>
                  <td>
                    <span class="badge badge-success" v-if="item.status == 1"
                      >Credit</span
                    >
                    <span
                      class="badge badge-primary"
                      v-else-if="item.status == 2"
                      >Debit</span
                    >
                    <span v-else></span>
                  </td>
                  <td>
                    <span v-if="item.mode == 1">Wallet</span>
                    <span v-else-if="item.mode == 2">Purchases</span>
                    <span v-else-if="item.mode == 3">Online Payment</span>
                    <span v-else-if="item.mode == 4">Offline Payment</span>
                    <span v-else-if="item.mode == 6">Subscription</span>
                    <span v-else-if="item.mode == 7">Fee</span>
                    <span v-else></span>
                  </td>
                  <td>{{ item.mode_id }}</td>
                  <td>{{ formatDateTime(item.date) }}</td>
                  <td>{{ item.payment_no }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="changeStatus"
      tabindex="-1"
      aria-labelledby="changeStatusLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="changeStatusLabel">
              Change Payment Status - {{ selectedPayment.payment_no }}
            </h6>
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
                <label class="f-13">Amount</label>
                <input
                  type="text"
                  class="form-control f-14"
                  disabled
                  :value="selectedPayment.total"
                />
              </div>
              <div class="form-group">
                <label class="f-13">Status</label>
                <select v-model="newStatus" class="form-control">
                  <option value="0">Draft</option>
                  <option value="1">Sent for approval</option>
                  <option value="2">Approved</option>
                  <option value="3">Reject</option>
                  <option value="4">Fully Paid</option>
                  <option value="5">Error in Processing</option>
                  <option value="6">Awaiting Funds</option>
                  <option value="7">Awaiting Due Date</option>
                  <option value="9">Processing</option>
                  <option value="99">Deleted</option>
                </select>
              </div>
              <button
                class="btn btn-primary w-100"
                :disabled="loading"
                @click.prevent="changeStatus()"
              >
                <span v-if="!loading">Change</span>
                <span v-else>Loading...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="fundWallet"
      tabindex="-1"
      aria-labelledby="fundWalletLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="fundWalletLabel">
              Temporary fund Wallet
            </h6>
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
                <label class="f-13">Amount</label>
                <input
                  type="text"
                  class="form-control f-14"
                  v-model="fund.amount"
                />
              </div>
              <div class="form-group duration">
                <label class="f-13">Duration</label>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    v-model="fund.durationPeriod"
                    class="form-control f-14"
                  />
                  <span class="input-group-text px-2" id="basic-addon2">
                    <select
                      v-model="fund.durationMode"
                      class="form-control f-14"
                    >
                      <option value="minutes">Minutes</option>
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Month</option>
                    </select>
                    <i class="fa fa-chevron-down"></i>
                  </span>
                </div>
              </div>
              <button
                class="btn btn-primary w-100"
                :disabled="loading"
                @click.prevent="fundWallet()"
              >
                <span v-if="!loading">Fund</span>
                <span v-else>Loading...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="refundWallet"
      tabindex="-1"
      aria-labelledby="refundWalletLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="refundWalletLabel">Refund Wallet</h6>
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
                <label class="f-13">Transaction No</label>
                <input
                  type="text"
                  class="form-control f-14"
                  v-model="refund_trans_no"
                />
              </div>
              <button
                class="btn btn-primary w-100"
                :disabled="loading"
                @click.prevent="refundWallet()"
              >
                <span v-if="!loading">Refund</span>
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
import axios from "axios";
export default {
  data() {
    return {
      loaded: false,
      users: [],
      transactions: [],
      payments: [],
      kpi: {},
      selectedPayment: {},
      loading: false,
      newStatus: "",
      refund_trans_no: "",
      fund: {
        amount: 0,
        durationMode: "minutes",
        durationPeriod: 0,
      },
    };
  },
  methods: {
    setSelectedPayment(payment) {
      this.selectedPayment = payment;
    },
    changeStatus() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("post", {
          endpoint: `payments/status/${this.$store.state.user.id}`,
          details: {
            status: this.newStatus,
            payment_no: this.selectedPayment.payment_no,
            company_id: this.$route.params.id,
          },
        })
        .then(() => {
          this.$store.commit("setLoader", false);
          window.location.reload();
        });
    },
    refundWallet() {
      if (this.refund_trans_no.length < 1) {
        window.ToasterAlert("error", "Invalid transaction number");
        return false;
      }
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("post", {
          endpoint: `refunds/${this.$store.state.user.id}`,
          details: {
            transactionNo: this.refund_trans_no,
            companyId: this.$route.params.id,
          },
        })
        .then((resp) => {
          this.$store.commit("setLoader", false);
          window.ToasterAlert("success", "Payment refund successfully");
          console.log(resp);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reprocessPayment(paymentNo) {
      this.$store.commit("setLoader", true);
      axios
        .post(
          `${this.$store.state.base_url}/payments/reprocess/${this.$store.state.user.id}`,
          { companyId: this.$route.params.id, paymentNo: paymentNo }
        )
        .then((data) => {
          this.$store.commit("setLoader", false);
          window.ToasterAlert("success", "Payment reprocessed successfully");
          console.log(data);
        })
        .catch((error) => {
          this.$store.commit("setLoader", false);
          this.$store.dispatch("handleError", error);
          console.log(error);
        });
      // this.$store
      //   .dispatch("post", {
      //     endpoint: `payments/reprocess/${this.$store.state.user.id}`,
      //     details: { companyId: this.$route.params.id, paymentNo: paymentNo },
      //   })
      //   .then((resp) => {
      //     this.$store.commit("setLoader", false);
      //     console.log(resp);
      //   });
    },
    getCompany() {
      this.$store
        .dispatch(
          "get",
          `company/${this.$route.params.id}/${this.$store.state.user.id}`
        )
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCompanyKpi() {
      this.$store
        .dispatch(
          "get",
          `company/kpi/${this.$route.params.id}/${this.$store.state.user.id}`
        )
        .then((resp) => {
          console.log(resp);
          this.kpi = resp.data;
          //   resp.data.map((item) => {
          //     this.fees += item.fees;
          //   });
          //   console.log(this.fees);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCompanyUsers() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `allusers/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.users = resp.data.users;
          // console.log(this.users);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
    getCompanyTransactions() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `allcoytransactions/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.transactions = resp.data.transactions;
          // console.log(resp.data);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
    getPayments() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch(
          "get",
          `payments/all/${this.$store.state.user.id}?company=${this.$route.params.id}`
        )
        .then((resp) => {
          // this.$store.commit("setLoader", false);
          // this.loaded = true;
          this.payments = resp.data.payments;
          console.log(resp);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
    fundWallet() {
      if (this.fund.amount < 1) {
        window.ToasterAlert("error", "Amount is required");
        return false;
      }
      if (this.fund.durationPeriod < 1) {
        window.ToasterAlert("error", "Duration period is required");
        return false;
      }
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("post", {
          endpoint: `tempcredit/${this.$store.state.user.id}`,
          details: { ...this.fund, companyId: this.$route.params.id },
        })
        .then((resp) => {
          this.$store.commit("setLoader", false);
          console.log(resp);
        });
    },
  },
  created() {
    this.getCompany();
    this.getCompanyUsers();
    this.getCompanyTransactions();
    this.getPayments();
    this.getCompanyKpi();
  },
};
</script>

<style scoped lang="scss">
.order {
  .order-body {
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
      background: #012538 !important;
    }
    .nav-link {
      color: black;
      padding: 5px 54px;
      font-size: 14px;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
      color: #fff;
    }

    .kpi {
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        h6 {
          font-size: 21px;
          margin-bottom: 0;
          color: black;
        }
        p {
          font-size: 13px;
          margin-bottom: 0;
        }
      }
    }
  }
  .duration {
    .input-group-text {
      padding: 0;
      background: #fff;
    }
    select {
      border: none;
    }
  }
}
</style>
