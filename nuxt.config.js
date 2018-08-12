module.exports = {
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clientConfigs: {
      default: "@/plugins/apollo.js"
    }
  },
  router: {
    middleware: ["change-message"]
  }
};
