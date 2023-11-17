<template>
  <div class="login-wrapper">
    <div class="row login-row">
      <div class="col-12 login-section-wrapper">
        <div class="login-section">
          <div class="login-header">
            <h3 class="text-center">REGISTER</h3>
          </div>
          <div class="login-body mt-3">
            <div class="w-100 d-flex justify-content-center">
              <!-- <div class="logo" style="">
                    <img src="@/assets/img/logo.png" class="w-100" />
                  </div> -->
            </div>

            <form class="" @submit.prevent="register()">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="place_of_birth">NIN</label>
                    <input
                      type="text"
                      class="form-control"
                      id="place_of_birth"
                      v-model="user.nin"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mt-5">
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn btn-primary w-100 submit"
                >
                  <span v-if="!loading">Check</span>
                  <span v-else>Loading...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          nin: "",
        },
        loading: false,
      };
    },
    methods: {
      register() {
        if (
          this.user.email == "development@admin.com" &&
          this.user.password == "123456"
        ) {
          window.location.href = "/dashboard";
        } else {
          window.ToasterAlert("error", "Invalid login credentials");
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .login-row {
    min-height: 100vh;
    .logo {
      width: 8em;
      height: 8em;
      border-radius: 50%;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .login-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .login-header {
      .lh-descp {
        max-width: 25em;
        text-align: center;
        color: grey;
        font-size: 14px;
      }
    }
    .login-body {
      min-width: 28em;
      max-width: 50em;
      padding: 30px;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
      .form-group {
        margin-bottom: 20px;
        label {
          font-size: 14px;
        }
        .form-control {
          height: 38px;
          font-size: 14px;
        }
      }
      .submit {
        padding: 13px;
        background-color: #0a0a0a;
        border: none;
        &:hover {
          background-color: #676464;
        }
      }
    }
    .signup {
      font-size: 14px;
      color: #808080ab;
      a {
        font-weight: bold;
        color: #0a0a0a;
      }
    }
  }
  @media (max-width: 576px) {
    .login-section .login-body {
      min-width: 22em;
    }
    .login-section-wrapper {
      padding-right: 0;
      min-height: 97vh;
    }
  }
</style>
