<template>
  <div class="footer py-3 p-all" id="footer">
    <div class="row">
      <div class="col-sm-4">
        <div class="footer-img footer-head">
          <img src="@/assets/img/logo.png" class="w-100" />
        </div>
        <p class="footer-descp">
          Reimagine the business buying experience; Save time and money while
          enhancing your controls.
        </p>
        <!-- <div class="footer-icon">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
        </div> -->
      </div>
      <div class="col-sm-4">
        <h5 class="footer-head">Company</h5>
        <div class="footer-links-wrapper">
          <a href="/#about">About</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div class="col-sm-4">
        <h5 class="footer-head">Contact</h5>
        <p class="footer-descp">
          <span class="d-block">Victoria Island. NG</span>
          <span class="d-block mt-1">help@buysimply.app</span>
          <span class="d-block mt-2">+234 818 414 6387</span>
          <span class="d-block mt-2">
            Plot 1038b, Ologun Agbaje, Victoria Island, Lagos, Nigeria
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  background: #f8f8f8;
  .footer-head {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
  }
  .footer-links-wrapper {
    a {
      display: block;
      font-size: 15px;
      margin-top: 15px;
      color: gray;
    }
  }
  .footer-descp {
    margin-top: 20px;
    max-width: 17em;
    color: gray;
  }
  .footer-img {
    width: 200px;
  }
  .footer-icon {
    display: flex;
    i {
      margin-right: 10px;
      font-size: 27px;
    }
  }
}
@media (max-width: 576px) {
  .footer .footer-head {
    height: fit-content;
  }
  .footer .col-sm-4 {
    margin-bottom: 20px;
  }
}
</style>
