export default {
  methods: {
    parsePermissions(value) {
      return value.split(",");
    },
    checkPermissions(value, roles) {
      return roles.some((item) => item == value);
    },

    formatPrice(value) {
      return new Intl.NumberFormat().format(value);
    },
    formatDateTime(value) {
      return new Date(value).toDateString();
    },
    formatDateToLocalDate(value) {
      return new Date(value).toLocaleDateString();
    },
    formatDateTimeSecond(value) {
      let m = new Date(value);
      return m.toUTCString().replace("GMT", "");
    },
    roundUpAmount(value, fixed = 2) {
      return value ? parseFloat(value.toString()).toFixed(fixed) : 0;
    },
  },
};
