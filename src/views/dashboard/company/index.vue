<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div class="main-title">
        <h6 class="mb-0">Company</h6>
        <div class="v-line"></div>
        <div class="search">
          <input
            type="text"
            class="form-control search"
            placeholder="Search company"
            v-model="search"
          />
        </div>
      </div>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Account No</th>
                  <th>Account Balance</th>
                  <th>RC No</th>
                  <th>Verification Status</th>
                  <th>Delivery Address</th>
                  <th>Ref Code</th>
                  <!-- <th>Delivery City</th>
                  <th>Delivery State</th> -->
                  <th>VAT No</th>
                  <th>Tax exempt</th>
                  <th>No Of Users</th>
                  <th>No Of Orders</th>
                  <th>Total Amount Spent on Orders Item</th>
                  <th>Total Amount Spent on Shipping Orders</th>
                  <th>Total Amount spent on Tax Orders</th>
                  <th>Total Amount spent on Orders including fees</th>
                </tr>
              </thead>
              <tbody v-if="filteredList.length > 0">
                <tr v-for="(company, index) in filteredList" :key="index">
                  <td>
                    <router-link
                      class="btn btn-view"
                      :to="{ name: 'companyView', params: { id: company.id } }"
                      ><i class="fa fa-eye"></i
                    ></router-link>
                  </td>
                  <td>{{ company.company_name }}</td>
                  <td>{{ company.company_slug }}</td>
                  <td>{{ company.account_number }}</td>
                  <td>₦{{ formatPrice(company.account_balance) }}</td>
                  <td>
                    {{ company.rc_number }}
                  </td>
                  <td>
                    <span
                      class="badge badge-success"
                      v-if="company.verification_status == 1"
                      >verified</span
                    >
                    <span class="badge badge-danger" v-else>not verified</span>
                  </td>
                  <td>
                    {{ company.delivery_address }},
                    <span v-if="company.city"
                      >{{ JSON.parse(company.city).name }},
                    </span>
                    <span v-if="company.state">{{
                      JSON.parse(company.state).state
                    }}</span>
                  </td>
                  <td>
                    {{ company.ref_code }}
                  </td>
                  <td>
                    {{ company.vat_number }}
                  </td>
                  <td>
                    {{ company.tax_exempt }}
                  </td>
                  <td>
                    {{ company.users }}
                  </td>
                  <td>
                    {{ company.orders }}
                  </td>
                  <td>₦{{ formatPrice(company.order_subtotal) }}</td>
                  <td>₦{{ formatPrice(company.shipping_total) }}</td>
                  <td>₦{{ formatPrice(company.tax_total) }}</td>
                  <td>₦{{ formatPrice(company.order_total) }}</td>
                </tr>
              </tbody>
              <NoData
                :data="{ colspan: 9, message: 'No available company' }"
                v-else
              ></NoData>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoData from "@/components/dashboard/noData.vue";
export default {
  components: { NoData },
  computed: {
    filteredList() {
      return this.companies.filter((company) => {
        // console.log(company.company_slug);
        return (
          company.company_name
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          company.company_slug.toString().includes(this.search.toLowerCase())
        );
      });
    },
  },
  data() {
    return {
      loading: false,
      companies: [],
      loaded: false,
      search: "",
    };
  },

  methods: {
    getCompanies() {
      this.$store.commit("setLoader", true);
      this.$store
        .dispatch("get", "allcompanies/" + this.$store.state.user.id)
        .then((resp) => {
          this.$store.commit("setLoader", false);
          this.loaded = true;
          this.companies = resp.data;
          console.log(this.companies);
        })
        .catch(() => {
          this.$store.commit("setLoader", false);
        });
    },
  },
  created() {
    this.getCompanies();
  },
};
</script>

<style scoped lang="scss">
.btn-success {
  font-size: 14px;
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
