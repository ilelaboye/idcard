export default {
  logout(state) {
    window.localStorage.removeItem("bsmpSuper");
    state.user = {};
    state.token = null;
    window.location.href = "/";
  },
  setLoader(state, data) {
    state.loader = data;
  },
  setUser(state, data) {
    state.user = { ...data.admin };
    state.token = data.token;
    var saved = {
      user: state.user,
      token: state.token,
    };
    var result = encodeURIComponent(JSON.stringify(saved));
    localStorage.setItem("bsmpSuper", result);
  },
  getUser(state) {
    var data = localStorage.getItem("bsmpSuper");
    data = JSON.parse(decodeURIComponent(data));
    if (data) {
      state.user = data.user;
      state.token = data.token;
    } else {
      window.location = "login";
    }
  },
  setJumiaSearchText(state, text) {
    state.jumiaSearch = text;
  },
  getCart(state) {
    var stg = window.localStorage.getItem("bsmpSuperCart");
    stg = JSON.parse(decodeURIComponent(stg));
    state.cart = stg ? stg : [];
  },
  addToCart(state, data) {
    var stg = window.localStorage.getItem("bsmpSuperCart");
    stg = JSON.parse(decodeURIComponent(stg));
    data.quantity = 1;
    var exist = false;
    var msg = "Product added to cart successfully";
    if (!stg) {
      state.cart.push(data);
    } else {
      state.cart = stg;
      state.cart.forEach((element) => {
        if (element.data_id == data.data_id) {
          exist = true;
          element.quantity += 1;
          // if (data.update) {
          //   element.city = data.city;
          //   element.delivery_date = data.delivery_date;
          //   element.delivery_fee = data.delivery_fee;
          //   element.delivery_location = data.delivery_location;
          //   element.state = data.state;
          // } else {
          //   element.quantity += 1;
          // }

          msg = "Cart updated successfully";
        }
      });

      if (!exist) {
        state.cart.push(data);
      }
      // console.log(state.cart);
    }
    var result = encodeURIComponent(JSON.stringify(state.cart));
    localStorage.setItem("bsmpSuperCart", result);
    window.ToasterAlert("success", msg);
  },
  removeFromCart(state, data) {
    state.cart.splice(
      state.cart.findIndex((item) => item.data_id == data.data_id),
      1
    );
    var result = encodeURIComponent(JSON.stringify(state.cart));
    localStorage.setItem("bsmpSuperCart", result);
    window.ToasterAlert("success", "Product removed from cart successfully");
  },
  reduceOrRemoveFromCart(state, data) {
    var msg = "";
    if (data.quantity == 1) {
      state.cart.splice(
        state.cart.findIndex((item) => item.data_id == data.data_id),
        1
      );
      console.log(state.cart);
      msg = "Product removed from cart successfully";
    } else {
      state.cart.forEach((element) => {
        if (element.data_id == data.data_id) {
          element.quantity -= 1;
          msg = "Cart updated successfully";
        }
      });
    }

    var result = encodeURIComponent(JSON.stringify(state.cart));
    localStorage.setItem("bsmpSuperCart", result);
    window.ToasterAlert("success", msg);
  },
  setStateCart(state, data) {
    state.cart = data;
    var result = encodeURIComponent(JSON.stringify(state.cart));
    localStorage.setItem("bsmpSuperCart", result);
    // console.log(state.cart);
  },
};
