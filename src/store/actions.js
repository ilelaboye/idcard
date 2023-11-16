import axios from "axios";
// import router from "@/router";

export default {
  handleError(context, error) {
    console.log(error);

    if (error.request.status == 422) {
      var resp = JSON.parse(error.request.response);

      var err = resp.errors;
      console.log("fff");
      console.log(err);
      var msg = "";
      for (var item in err) {
        msg = err[item][0];
        break;
      }
      console.log(msg);
      window.ToasterAlert("error", msg);
      return msg;
    } else if (error.request.status == 303) {
      resp = JSON.parse(error.request.response);
      window.ToasterAlert("error", resp.error);
    } else if (error.request.status == 404) {
      resp = JSON.parse(error.request.response);
      msg = "Request not found";
      window.ToasterAlert("error", msg);
    } else if (error.request.status == 400) {
      resp = JSON.parse(error.request.response);
      msg = resp.message;
      window.ToasterAlert("error", msg);
    } else if (error.request.status == 401) {
      resp = JSON.parse(error.request.response);
      msg = resp.message;
      window.ToasterAlert("error", msg);
      // context.commit("logout");
    } else {
      msg = "Oops! server error, Please try again";
      window.ToasterAlert("error", msg);
    }
  },
  post(context, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(context.state.endpoint + data.endpoint, data.details, {
          headers: {
            Authorization: "Bearer " + context.state.token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          context.commit("setLoader", false);
          resolve(data);
        })
        .catch((error) => {
          context.commit("setLoader", false);
          context.dispatch("handleError", error);
          reject(error);
        });
    });
  },
  get(context, endpoint) {
    return new Promise((resolve, reject) => {
      axios
        .get(context.state.endpoint + endpoint, {
          headers: {
            Authorization: "Bearer " + context.state.token,
            Accept: "application/json",
          },
        })
        .then((data) => {
          // console.log(data)
          resolve(data);
        })
        .catch((error) => {
          context.commit("setLoader", false);
          context.dispatch("handleError", error);
          reject(error);
        });
    });
  },
  getUser(context) {
    // console.log(context.state);
    return new Promise((resolve, reject) => {
      axios
        .post(
          context.state.endpoint + "users/verify",
          { token: context.state.token },
          {
            headers: {
              Authorization: "Bearer " + context.state.token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          context.dispatch("handleError", error);
          reject(error);
        });
    });
  },
};
