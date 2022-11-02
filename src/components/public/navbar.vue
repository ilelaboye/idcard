<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo.png" alt="logo" class="w-100" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/#about">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contact Us</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/privacy"
              >Privacy Policy</router-link
            >
          </li>
          <!-- <li class="nav-item" v-if="$route.name != 'coming'"> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link btn btn-primary" to="/login"
              >Login</router-link
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar-brand {
  width: 127px;
}
.navbar {
  padding: 20px 32px;
}
.nav-link {
  margin-right: 4rem;
  font-size: 15px;
  &.btn {
    background-color: #0a0a0a;
    color: #fff;
    padding: 7px 34px 10px;
    border-radius: 20px;
    border-color: transparent;
  }
  &.btn:hover {
    color: white;
  }
}
.navbar-light .navbar-toggler {
  border: none;
  box-shadow: none;
  padding: 0;
}
@media (max-width: 576px) {
  .navbar {
    padding: 0 3px;
  }
  .nav-link {
    margin-top: 10px;
  }
  .nav-link.btn {
    width: fit-content;
  }
}
</style>
