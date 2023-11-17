<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid px-sm-0">
      <button
        class="btn btn-default d-flex align-items-center"
        id="sidebarToggle"
      >
        <!-- <i class="fas fa-bars"></i> -->
        <img src="@/assets/img/left.svg" alt="" srcset="" />
        <!-- <div class="logo">
          <img src="@/assets/img/logo.png" class="w-100" />
        </div> -->
      </button>
      <div class="nav-user pe-1">
        <div class="nav-user-con">
          <!-- <div class="nav-user-details">
            <p class="mb-0">{{ $store.state.user.email }}</p>
            <span class=""
              >{{ $store.state.user.first_name }}
              {{ $store.state.user.last_name }}</span
            >
          </div> -->

          <div class="nav-user-icon">
            <img class="w-100" src="@/assets/img/user.png" alt="" />
          </div>
          <!-- <div class="nav-user-icon dropdown">
            <img
              class="dropdown-toggle w-100"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              src="@/assets/img/user.png"
              alt=""
            />
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="name-pri">
                <div class="np-img">
                  <img src="@/assets/img/user.png" class="w-100" />
                </div>
                <div class="np-info">
                  <p class="mb-0">{{ user.last_name }} {{ user.first_name }}</p>
                  <div
                    class="role"
                    v-for="(role, index) in user.role_id"
                    :key="index"
                  >
                    <span class="text-muted" v-if="role == 4">Requester </span>
                    <span class="text-muted" v-if="role == 14">Approver </span>
                    <span class="text-muted" v-if="role == 24">Finance </span>
                    <span class="text-muted" v-if="role == 34">Tech </span>
                    <span class="text-muted" v-if="role == 44">Admin </span>
                  </div>
                </div>
              </div>
              <div class="dp-menu mt-3">
                <router-link class="dp-link" to="/profile">
                  <i class="fa fa-cog"></i>Profile
                </router-link>
                <router-link class="dp-link" to="/notifications">
                  <i class="fas fa-bell"></i>Notifications</router-link
                >
                <a
                  class="dp-link"
                  href="javascript:void()"
                  @click.prevent="logout()"
                >
                  <i class="fas fa-power-off"></i>Logout
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState({
        user: (context) => context.user,
      }),
    },
    methods: {
      logout() {
        this.$store.commit("logout");
      },
    },
    mounted() {
      // console.log(this.user);
    },
  };
</script>

<style scoped lang="scss">
  .navbar {
    box-shadow: 0 2px 30px #9299b810;
    z-index: 999;
    background: #fff;
    .logo {
      width: 100px;
      margin-left: 20px;
    }
    .nav-user {
      .nav-user-con {
        display: flex;
        align-items: center;
        .icon-tp {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 15px;
          .icon-dot {
            background: green;
            border-radius: 50%;
            width: 6px;
            height: 6px;
          }
        }

        svg {
          width: 20px;
        }
        .nav-user-icon {
          margin-left: 8px;
          width: 35px;
          .dropdown-menu {
            right: 0;
            margin-top: 10px;
            left: auto;
            border: none;
            padding: 15px 10px;
            min-width: 17rem;
            box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
            .name-pri {
              display: flex;
              align-items: center;
              background: #f4f5f7;
              border-radius: 5px;
              padding: 10px;

              .np-img {
                width: 39px;
              }
              .np-info {
                margin-left: 6px;
                p {
                  font-size: 13px;
                  text-transform: capitalize;
                  line-height: 1;
                  font-weight: 500;
                }
                .role {
                  line-height: 1;
                }
                span {
                  font-size: 12px;
                }
              }
            }
            .dp-menu {
              padding: 0 10px;
              .dp-link {
                display: block;
                color: #9299b8;
                margin-top: 15px;
                font-size: 14px;
                i {
                  margin-right: 7px;
                  width: 20px;
                }
              }
            }
          }
        }
        .nav-user-details {
          p {
            line-height: 8px;
            font-size: 15px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  .navbar #sidebarToggle {
    outline: none;
    box-shadow: none;
    i {
      font-size: 22px;
    }
  }
  @media (max-width: 767px) {
    .navbar #sidebarToggle {
      padding: 0;
    }
  }
</style>
