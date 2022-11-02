<template>
  <div v-if="loaded">
    <div class="step1" v-if="!next_step">
      <div class="step1-content">
        <h6 class="title">Accept an invitation</h6>
        <div class="card">
          <div class="card-header">
            <p class="card-title mb-0 py-2">Invitation for {{ user.email }}</p>
          </div>
          <div class="card-body">
            <p class="invitee">
              <i class="fas fa-user-plus"></i> Invited by
              {{ user.creator_email }}
              <span class="badge bg-info">Admin</span>
            </p>
            <div class="cb-content">
              <div class="brand">
                <div class="b-logo">{{ user.company_name[0] }}</div>
                <div class="b-member ms-2">
                  <h6 class="mb-0">{{ user.company_name }}</h6>
                  <div class="member-icon">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <i class="fas fa-user"></i>
                    <span>members</span>
                  </div>
                </div>
              </div>
              <button @click="next()" class="btn btn-outline-success px-3">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <step2 :user="user" v-else />
  </div>
</template>

<script>
import step2 from "./step2.vue";
export default {
  components: { step2 },
  data() {
    return {
      user: {},
      loaded: false,
      next_step: false,
    };
  },
  methods: {
    next() {
      this.next_step = true;
    },
    getUser() {
      // if (this.$route.params.token) {
      this.$store
        .dispatch("post", {
          endpoint: "users/created/one",
          details: {
            token: this.$route.params.token,
          },
        })
        .then((resp) => {
          if (resp.data) {
            console.log(resp.data);
            this.user = resp.data;
            this.loaded = true;
          } else {
            window.SweetAlert("error", "User not found, incorrect url token");
          }
        });
      // }
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style scoped lang="scss">
.step1 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .step1-content {
    width: 40em;
    margin: 20px;
    .invitee {
      font-size: 14px;
    }
  }
}
.cb-content {
  display: flex;
  justify-content: space-between;
  .brand {
    display: flex;
    .b-logo {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      padding: 0 15px;
      border-radius: 5px;
      background: #808080e0;
      font-weight: bold;
      font-size: 25px;
    }
    .member-icon {
      i {
        font-size: 12px;
      }
      span {
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
