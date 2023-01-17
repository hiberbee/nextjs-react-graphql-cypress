import { loadEnvConfig } from "@next/env"
import { defineConfig } from "cypress"

const { combinedEnv } = loadEnvConfig(process.cwd())

export default defineConfig({
  experimentalStudio: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  nodeVersion: "system",
  screenshotOnRunFailure: false,
  experimentalFetchPolyfill: true,
  experimentalWebKitSupport: true,
  env: combinedEnv,
  e2e: {
    baseUrl: "http://localhost:3000"
  }
})
