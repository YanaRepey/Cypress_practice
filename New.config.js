const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://qauto2.forstudy.space",
    retries: {
      runMode: 0,
      openMode: 0,
    },
    video: true,
  
    },
  });