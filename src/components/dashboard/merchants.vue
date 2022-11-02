<template>
  <div class="merchants-list row">
    <div class="col-sm-3 mer-logo-con">
      <button class="m-logo" @click="redirectToMerchantsPage('amazon')">
        <div class="img-con">
          <img src="@/assets/img/amazon.png" class="h-100 w-100" />
        </div>
        <span>amazon</span>
      </button>
    </div>
    <div class="col-sm-3 mer-logo-con">
      <button
        class="m-logo upcomng-con"
        disabled
        @click="redirectToMerchantsPage('aliexpress')"
      >
        <div class="img-con">
          <img src="@/assets/img/aliexpress.png" class="h-100 w-100" />
        </div>
        <span>Aliexpress</span>
      </button>
      <p class="upcoming">Coming soon</p>
    </div>
    <div class="col-sm-3 mer-logo-con">
      <button class="m-logo" @click="redirectToMerchantsPage('jumia')">
        <div class="img-con">
          <img src="@/assets/img/jumia.png" class="h-100 w-100" />
        </div>
        <span>jumia</span>
      </button>
    </div>
    <div class="col-sm-3 mer-logo-con">
      <button
        class="m-logo upcomng-con"
        disabled
        @click="redirectToMerchantsPage('konga')"
      >
        <div class="img-con">
          <img src="@/assets/img/konga.png" class="h-100 w-100" />
        </div>
        <span>konga</span>
      </button>
      <p class="upcoming">Coming soon</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async redirectToMerchantsPage(merchant) {
      window.$("#merchantsModal").modal("hide");
      var formdata = new FormData();
      if (merchant == "amazon") {
        this.$store.commit("setLoader", true);
        formdata.append("email", this.$store.state.user.email);
        this.$store
          .dispatch("post", {
            endpoint: "punchout/amazon/start/" + this.$store.state.user.email,
          })
          .then((resp) => {
            this.$store.commit("setLoader", false);
            window.open(resp.data);
          })
          .catch((err) => {
            this.$store.commit("setLoader", false);
            this.$store.dispatch("handleError", err);
          });
      } else if (merchant == "jumia") {
        window.location = "jumia";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.merchants-list {
  .upcomng-con {
    background: gray !important;

    opacity: 0.2;
  }
  .upcoming {
    // position: absolute;
    margin-top: -84px;
    text-align: center;
    background: #fff;
    padding: 11px 20px;
    width: 100%;
    // margin-right: 10px;
    // margin-bottom: 10px;
  }
  .m-logo {
    // border: 1px solid gray;
    margin-right: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    width: 100%;
    background-color: transparent;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 15px;
    .img-con {
      height: 60px;
      img {
        object-fit: contain;
      }
    }
    span {
      font-size: 13px;
    }
  }
}
</style>
