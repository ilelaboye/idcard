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
      var hold = new Date(value).toDateString().split(" ");
      return `${hold[2]} ${hold[1]} '${hold[3][2]}${hold[3][3]}`;
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
