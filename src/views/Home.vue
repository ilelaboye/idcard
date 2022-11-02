<template>
  <div class="home-wrapper">
    <div class="header-wrapper">
      <Navbar />
      <div class="header p-all">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="header-content">
              <div class="hc-second">
                <h1>Simplify Buying,</h1>
                <h1>Control Spending,</h1>
                <h1>Boost Savings</h1>
                <p class="mt-4">
                  Reimagine the business buying experience; Save time and money
                  while enhancing your controls.
                </p>
                <p>Join the revolution.</p>
                <form @submit.prevent="getStarted" class="get-started">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      v-model="email"
                      class="form-control"
                      placeholder="Enter your email address"
                      aria-label="Enter your email address"
                      aria-describedby="basic-addon2"
                    />
                    <button
                      class="input-group-text"
                      type="submit"
                      id="basic-addon2"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="header-img">
              <img src="@/assets/img/11.png" class="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partners p-all my-5">
      <div class="p-img-wrapper">
        <img src="@/assets/img/8.png" class="w-100" />
      </div>
      <div class="p-img-wrapper">
        <img src="@/assets/img/3.png" class="w-100" />
      </div>
      <div class="p-img-wrapper">
        <img src="@/assets/img/3.png" class="w-100" />
      </div>
      <div class="p-img-wrapper">
        <img src="@/assets/img/3.png" class="w-100" />
      </div>
      <div class="p-img-wrapper">
        <img src="@/assets/img/3.png" class="w-100" />
      </div>
      <div class="p-img-wrapper">
        <img src="@/assets/img/3.png" class="w-100" />
      </div>
    </div>
    <div class="schedule p-all my-5" id="about">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="schedule-img">
            <img src="@/assets/img/10.jpg" class="w-100" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="schedule-content">
            <h2 class="mb-5">Why BuySimply?</h2>
            <p>
              Have you experienced the frustration of buying things online
              within a Business.
            </p>
            <p>
              Sometimes, you buy with your sparse funds only to endure a long
              wait for the refunds after getting through endless paperwork and
              lengthy approvals. If you’re lucky, you have a Company Credit
              card. But that is fraught with its own problems: receipts,
              retirement process, and “calls from Finance three months later”.
              Other times, you ask Procurement to buy it; but they buy the wrong
              thing – and the supplier won’t take it back. Have you ever
              wondered why Business Buying is not as simple as when you shop
              online? That’s why we created BuySimply.
            </p>
            <p>
              We believe that buying within a business should be as easy as when
              you buy online. Join the revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="achieve p-all py-5">
      <div class="achieve-wrapper">
        <div class="aw-con">
          <div class="achieve-more">
            <span>ACHIEVE MORE</span>
            <h2>Purpose of a convoy is to keep your team</h2>
          </div>
        </div>
        <div class="aw-con">
          <div class="impact d-flex">
            <div class="b-icon me-3">
              <i class="fa fa-signal"></i>
            </div>
            <div class="imp-header">
              <h4>Built or impact</h4>
              <p>
                We identify and nurture a truly diverse team of designers,
                developers and marketers
              </p>
            </div>
          </div>
        </div>
        <div class="aw-con">
          <div class="impact d-flex sync">
            <div class="b-icon me-3">
              <i class="fas fa-recycle"></i>
            </div>
            <div class="imp-header">
              <h4>In sync with you</h4>
              <p>
                We identify and nurture a truly diverse team of designers,
                developers and marketers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="help p-all">
      <div class="help-header">
        <h1>How can we help your business?</h1>
        <p>When you resell besnik, you increase trust and increase sales</p>
      </div>
      <div class="help-body mt-4">
        <div class="hb-flex">
          <div class="help-item">
            <div class="hi-icon purplish">
              <i class="fa fa-search"></i>
            </div>
            <h6>Simplify Buying</h6>
            <p>We present you a proposal and discuss the nitty-gritty like</p>
          </div>
          <div class="help-item hi-centered">
            <div class="hi-icon redish">
              <i class="fa fa-cog"></i>
            </div>
            <h6>Control Spending</h6>
            <p>We present you a proposal and discuss the nitty-gritty like</p>
          </div>
          <div class="help-item">
            <div class="hi-icon yellowish">
              <i class="fas fa-rocket"></i>
            </div>
            <h6>Boost Savings</h6>
            <p>We present you a proposal and discuss the nitty-gritty like</p>
          </div>
        </div>
        <div class="helo-footer text-center">
          <a href="" class="btn btn-primary hi-partner">Become a Partner</a>
        </div>
      </div>
    </div>
    <div class="newsletter p-all">
      <div class="subscribe">
        <div class="ns-content">
          <h3>Subscribe newsletter</h3>
          <p class="mt-3">
            Best cooks and best delivery guys all at your service. Hot tasty
            food
          </p>
        </div>
        <div class="ns-form">
          <form action="">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">Discover</span>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
export default {
  name: "Home",
  components: { Navbar, Footer },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    getStarted() {
      this.$router.push(`/register?email=${this.email}`);
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  margin-top: 60px;
  .header-content {
    .hc-first {
      font-size: 20px;
      color: blue;
      span {
        margin-left: 20px;
      }
    }
    .hc-second {
      margin-top: 17px;
      h1 {
        margin: 0;
        font-weight: bold;
        font-size: 67px;
        color: black;
        max-width: 10em;
        span {
          color: blue;
        }
      }
      p {
        font-size: 22px;
        max-width: 24em;
        color: #41464b;
      }
    }
    .get-started {
      input {
        width: 21vw;
        height: 60px;
        // border-top-left-radius: 20px;
        // border-bottom-left-radius: 20px;
        // border: none;
        padding: 0 26px;
        font-size: 14px;
        outline: none;
        box-shadow: none;
      }
      .input-group .input-group-text {
        background-color: #4d53e4;
        color: #fff;
        // border-top-right-radius: 20px;
        // border-bottom-right-radius: 20px;
        border: none;
        padding: 0 30px;
      }
    }
  }
}
.partners {
  display: flex;
  justify-content: space-between;
  .p-img-wrapper {
    width: 8em;
    margin-top: 10px;
  }
}
.achieve {
  background: #f3f5fb;
  .achieve-wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .achieve-more {
    max-width: 17em;
    span {
      color: gray;
      font-size: 14px;
    }
    h2 {
      margin-top: 10px;
      font-weight: bold;
      font-size: 30px;
    }
  }
  .sync .b-icon {
    background-color: #ef2a52 !important;
  }
  .impact {
    .b-icon {
      background-color: #7c4fcf;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      border-radius: 50px;
      width: 50px;
      padding: 0 12px;
      i {
        color: #fff;
        font-size: 20px;
      }
    }
    .imp-header {
      p {
        max-width: 15em;
        color: gray;
      }
    }
  }
}
.help {
  margin-top: 6em;
  .help-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      max-width: 10em;
      font-weight: bold;
      font-size: 47px;
      text-align: center;
      color: #22211f;
    }
    p {
      color: gray;
      font-size: 15px;
      text-align: center;
    }
  }
  .help-body {
    .hb-flex {
      display: flex;
      justify-content: space-around;
    }
    .help-item {
      border: 1px solid #8080802b;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 30px;
      margin-bottom: 20px;
      &.hi-centered {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border: none;
      }
      .hi-icon {
        height: 80px;
        width: 80px;
        background-color: #dcd9f4;
        border-radius: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 30px;
        }
        &.purplish {
          i {
            color: #7c4fcf;
          }
        }
        &.redish {
          background-color: #fcd3dc;
          i {
            color: #ef2a52;
          }
        }
        &.yellowish {
          background-color: #fef0d8;
          i {
            color: #fdc004;
          }
        }
      }
      h6 {
        font-size: 20px;

        margin: 16px 0;
        margin-top: 30px;
      }
      p {
        font-size: 14px;
        max-width: 18em;
        text-align: center;
        color: #808080a1;
      }
    }
  }
  .hi-partner {
    margin-top: 50px;
    background-color: blue;
    border-radius: 30px;
    padding: 13px 25px;
  }
}
.newsletter {
  display: flex;
  justify-content: center;
  margin: 8em 0;
  .subscribe {
    background-color: #4d53e4;
    padding: 50px 60px;
    border-radius: 20px;
    min-width: 74vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ns-content {
      color: #fff;
      p {
        max-width: 20em;
        font-size: 15px;
        color: #eee8e8d1;
      }
    }
    .ns-form {
      input {
        width: 21vw;
        height: 60px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border: none;
        padding: 0 26px;
        font-size: 14px;
      }
      .input-group .input-group-text {
        background-color: #30b652;
        color: #fff;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border: none;
        padding: 0 30px;
      }
    }
  }
}
@media (max-width: 576px) {
  .header .header-content .hc-second h1 {
    font-size: 43px;
  }
  .header .header-content .hc-second p {
    font-size: 17px;
  }
  .partners {
    flex-direction: column;
    align-items: center;
    .p-img-wrapper {
      width: 50%;
    }
  }
  .achieve .achieve-wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .achieve .aw-con {
    margin-bottom: 28px;
  }
  .help .help-header h1 {
    margin-top: 0;
    font-size: 30px;
  }
  .help .help-body .hb-flex {
    flex-direction: column;
  }
  .newsletter .subscribe {
    padding: 33px 20px;
    flex-direction: column;
  }
  .newsletter .subscribe .ns-content p {
    font-size: 14px;
  }
  .newsletter .subscribe .ns-form .input-group .input-group-text {
    padding: 0 15px;
  }
}
</style>
