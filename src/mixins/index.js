export default {
  methods: {
    parsePermissions(value) {
      return value.split(",");
    },
    checkPermissions(value, roles) {
      return roles.some((item) => item == value);
    },

    parsePrice(value) {
      var hold = value.toString();
      hold = hold.replace("₦", "");
      hold = hold.replace(",", "");
      return parseFloat(hold).toFixed(2);
    },
    formatPrice(value) {
      return new Intl.NumberFormat().format(value);
    },
    formatDateTime(value) {
      return new Date(value).toDateString();
    },
    formatDateTimeSecond(value) {
      let m = new Date(value);
      return m.toUTCString().replace("GMT", "");
    },
  },
};
