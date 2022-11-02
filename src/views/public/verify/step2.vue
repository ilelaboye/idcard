<template>
  <div class="step2">
    <div class="step2-header">
      <div class="bsmp-logo">
        <img src="@/assets/img/logo.png" class="w-100" />
      </div>
      <h1 class="mt-5 mb-3">
        Join <span class="uppercase">{{ user.company_name }}</span> on BuySimply
      </h1>
      <p>BuySimply is a procurement service system provider for your company</p>
    </div>
    <div class="step2-body mt-5">
      <p class="text-center">
        We suggest using <b>the email account you use for work</b>
      </p>
      <div class="register mt-4">
        <div class="form">
          <form @submit.prevent="submit()">
            <!-- <div class="form-group">
              <label for="">Full Name</label>
              <input type="text" class="form-control" />
            </div> -->
            <div class="form-group">
              <label for="">Email</label>
              <input
                type="email"
                class="form-control"
                :value="user.email"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
              />
            </div>
            <button
              class="btn btn-success w-100"
              type="submit"
              :disabled="loading"
            >
              <span v-if="!loading">Create Account</span>
              <span v-else>Loading</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {},
  },
  data() {
    return {
      register: false,
      loading: false,
    };
  },
  methods: {
    submit() {
      // console.log(this.user);
      if (this.user.password.length < 1) {
        window.SweetAlert("error", "Password field is required");
        return false;
      }
      this.loading = true;
      this.$store
        .dispatch("post", {
          endpoint: "users/signup",
          details: {
            company_slug: this.user.company_slug,
            email: this.user.email,
            role_id: this.user.role_id,
            password: this.user.password,
          },
        })
        .then((resp) => {
          this.loading = false;
          console.log(resp);
          this.$store.commit("setUser", resp.data);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.loading = false;
          this.$store.dispatch("handleError", error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.step2 {
  .step2-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ffa50063;
    padding: 40px 0;
    .bsmp-logo {
      width: 12em;
    }
    h1 {
      span {
        color: brown;
      }
    }
  }
  .step2-body {
    .continue {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .register {
      display: flex;
      justify-content: center;
      width: 100%;
      .form {
        width: 30em;
        label {
          font-weight: bold;
          font-size: 15px;
          margin-bottom: 5px;
        }
        .form-group {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
