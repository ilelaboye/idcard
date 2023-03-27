<template>
  <div class="orders px-2 py-4 mt-2" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">Demo Requests</h5>
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
                  <td>
                    {{ transact.details.firstname }}
                    {{ transact.details.lastname }}
                  </td>
                  <td>{{ transact.details.phone }}</td>
                  <td>{{ transact.details.email }}</td>
                  <td>{{ transact.details.business_name }}</td>
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
                  <td>{{ transact.details.rc_number }}</td>
                  <td>{{ transact.details.revenue }}</td>
                  <td>{{ transact.details.country }}</td>
                  <td>{{ transact.details.about }}</td>
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
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li
                class="page-item"
                v-if="pagination.current != 1"
                :class="pagination.current == 1 ? 'disabled' : ''"
              >
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="getDemo(pagination.current - 1)"
                  tabindex="-1"
                  aria-disabled="true"
                  >Previous</a
                >
              </li>
              <li
                class="page-item"
                v-for="(item, index) in pagination.pagLimit"
                :key="index"
                :class="item == pagination.current ? 'active' : ''"
              >
                <a
                  v-if="item <= pagination.last"
                  class="page-link"
                  @click.prevent="getDemo(item)"
                  href="#"
                  >{{ item }}</a
                >
              </li>
              <li
                class="page-item"
                v-if="pagination.last > pagination.pagLimit"
              >
                <select
                  @change="nextPage($event)"
                  class="select-page-link"
                  :class="
                    pagination.current > pagination.pagLimit ? 'active' : ''
                  "
                >
                  <option value="">...</option>
                  <option
                    :value="item"
                    v-for="(item, index) in pagination.last -
                    pagination.pagLimit"
                    :key="index"
                  >
                    {{ item + pagination.pagLimit }}
                  </option>
                </select>
              </li>
              <li
                class="page-item"
                v-if="pagination.current != pagination.last"
              >
                <a
                  class="page-link"
                  @click="getDemo(pagination.current + 1)"
                  href="#"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
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
      pagination: {
        last: 2,
        current: 1,
        pagLimit: 6,
      },
    };
  },
  methods: {
    nextPage(no) {
      var cal = Number(no.target.value) + Number(this.pagination.pagLimit);
      this.getDemo(cal);
    },
    getDemo(page = 1) {
      this.$store
        .dispatch("get", `demos/all/${this.$store.state.user.id}?page=${page}`)
        .then((resp) => {
          this.loaded = true;
          this.demos = resp.data;
          this.pagination.current = page;
          this.pagination.last = Math.ceil(
            this.demos.total / this.demos.records_per_page
          );
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
