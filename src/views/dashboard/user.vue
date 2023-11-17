<template>
  <div class="login-wrapper">
    <div class="row login-row">
      <div class="col-12 login-section-wrapper">
        <div class="login-section">
          <div class="login-body mt-3" style="background: #fff">
            <div class="w-100 d-flex justify-content-center">
              <!-- <div class="logo" style="">
                      <img src="@/assets/img/logo.png" class="w-100" />
                    </div> -->
            </div>
            <div class="">
              <div class="table-responsive">
                <table class="table">
                  <tr>
                    <td>First Name:</td>
                    <td>{{ user.first_name }}</td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>{{ user.last_name }}</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>{{ user.phone }}</td>
                  </tr>
                  <tr>
                    <td>NIN:</td>
                    <td>{{ user.nin }}</td>
                  </tr>
                  <tr>
                    <td>Card Number:</td>
                    <td>{{ user.card_number }}</td>
                  </tr>

                  <tr>
                    <td>Date Issued:</td>
                    <td>{{ formatDateTime(user.created_at) }}</td>
                  </tr>

                  <tr>
                    <td>Gender:</td>
                    <td>{{ user.gender }}</td>
                  </tr>
                  <tr>
                    <td>Passport:</td>
                    <td>{{ user.passport }}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth:</td>
                    <td>{{ formatDateTime(user.date_of_birth) }}</td>
                  </tr>
                </table>
                <div class="d-flex">
                  <div class="qrcode">
                    <qrcode-vue
                      :value="`${$store.state.frontend_baseurl}verify?code=${user.card_number}`"
                    ></qrcode-vue>
                  </div>
                  <div class="img-cov ms-2" style="height: 100px; width: 100px">
                    <img
                      :src="user.image"
                      class="w-100 h-100"
                      style="object-fit: contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QrcodeVue from "qrcode.vue";
  export default {
    data() {
      return {
        nin: "",
        loading: false,
        user: null,
      };
    },
    components: {
      QrcodeVue,
    },
    methods: {
      getUser() {
        this.$store.commit("setLoader", true);
        this.$store
          .dispatch("get", `get-user/${this.$route.params.id}`)
          .then((resp) => {
            this.loaded = true;
            this.$store.commit("setLoader", false);
            console.log(resp);
            this.user = resp.data;
          });
      },
    },
    created() {
      this.getUser();
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
        padding: 10px;
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
