import { defineConfig } from "cypress"

module.exports = defineConfig({
  "video": false,
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  viewportWidth: 1280,
  viewportHeight: 720,
})
