<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">demo</h5>
    </div>
    <div class="orders-body mt-2">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Business Name</th>
                  <th>Job Role</th>
                  <th>Industry</th>

                  <th>Organization size</th>
                  <th>Organization type</th>

                  <th>RC number</th>
                  <th>Revenue</th>
                  <th>Country</th>
                  <th>About</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody v-if="demos.demos.length > 0">
                <tr v-for="(transact, index) in demos.demos" :key="index">
                  <td>{{ ++index }}</td>
                  <td>
                    {{ transact.details.firstname }}
                    {{ transact.details.firstname }}
                  </td>
                  <td>{{ transact.details.phone }}</td>
                  <td>{{ transact.details.company_name }}</td>
                  <td>{{ transact.details.job_role }}</td>
                  <td>
                    {{ transact.details.industry }}
                  </td>
                  <td>
                    {{ transact.details.organization_size }}
                  </td>
                  <td>
                    {{ transact.details.organization_type }}
                  </td>
                  <td>₦{{ formatPrice(transact.details.rc_number) }}</td>
                  <td>₦{{ formatPrice(transact.details.country) }}</td>
                  <td>
                    {{ formatDateTime(transact.createdAt) }}
                  </td>
                </tr>
              </tbody>
              <NoData
                :data="{ colspan: 9, message: 'No available data' }"
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
  data() {
    return {
      loading: false,
      demo: [],
      loaded: false,
    };
  },
  methods: {
    getDemo() {
      this.$store
        .dispatch("get", "demos/all/" + this.$store.state.user.id)
        .then((resp) => {
          this.loaded = true;
          this.demos = resp.data;
          console.log(resp);
        });
    },
  },
  created() {
    this.getDemo();
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
