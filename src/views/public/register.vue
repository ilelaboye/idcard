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
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="first_name"
                      v-model="user.first_name"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="last_name"
                      v-model="user.last_name"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      v-model="user.phone"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="" v-model="user.gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <!-- <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="phone">Place of Issurance</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      v-model="user.phone"
                    />
                  </div>
                </div> -->
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="date_of_birth">Date of Birth</label>
                    <input
                      type="date"
                      class="form-control"
                      id="date_of_birth"
                      v-model="user.date_of_birth"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="height">Height</label>
                    <div class="input-group mb-3">
                      <input
                        type="number"
                        id="height"
                        class="form-control"
                        placeholder="Height"
                        aria-label="Height"
                        aria-describedby="basic-addon2"
                        v-model="user.height"
                      />
                      <span class="input-group-text" id="basic-addon2">ft</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="place_of_birth">Place of Birth</label>
                    <input
                      type="text"
                      class="form-control"
                      id="place_of_birth"
                      v-model="user.place_of_birth"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="nin">NIN</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nin"
                      v-model="user.nin"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="passport">International Passport</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="user.passport"
                      id="passport"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-12">
                  <div class="form-group">
                    <label for="">Image</label>
                    <input
                      type="file"
                      class="form-control"
                      id="image"
                      accept="image/*"
                      capture
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
                  <span v-if="!loading">Register</span>
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
          email: "",
          nin: "",
          first_name: "",
          last_name: "",
          phone: "",
          gender: "",
          date_of_birth: "",
          height: "",
          place_of_birth: "",
          passport: "",
        },
        loading: false,
      };
    },
    methods: {
      register() {
        this.loading = true;
        var form = new FormData();
        form.append("email", this.user.email);
        form.append("nin", this.user.nin);
        form.append("first_name", this.user.first_name);
        form.append("last_name", this.user.last_name);
        form.append("phone", this.user.phone);
        form.append("gender", this.user.gender);
        form.append("date_of_birth", this.user.date_of_birth);
        form.append("height", this.user.height);
        form.append("place_of_birth", this.user.place_of_birth);
        form.append("passport", this.user.passport);

        var image = document.getElementById("image").files[0];
        form.append("image", image);

        this.$store
          .dispatch("post", { endpoint: "register", details: form })
          .then((resp) => {
            this.loading = false;
            this.user.email = "";
            this.user.password = "";
            this.user.nin = "";
            this.user.first_name = "";
            this.user.last_name = "";
            this.user.phone = "";
            this.user.gender = "";
            this.user.date_of_birth = "";
            this.user.height = "";
            this.user.place_of_birth = "";
            console.log(resp);
            window.ToasterAlert("success", "Details submitted successfully");
            window.location.href = `/verify?code=${resp.data.card_number}`;
          })
          .catch(() => {
            this.loading = false;
          });
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
