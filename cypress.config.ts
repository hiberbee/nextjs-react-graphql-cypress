import { defineConfig } from "cypress";

export default defineConfig({
  experimentalStudio: true,
  experimentalFetchPolyfill: true,
  experimentalWebKitSupport: true,
  env: {
    API_URL: "http://localhost:4000/graphql",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
