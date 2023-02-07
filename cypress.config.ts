import { loadEnvConfig } from "@next/env"
import { defineConfig } from "cypress"

const loadEnv = () => loadEnvConfig(process.cwd()).combinedEnv

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  port: 5000,
  screenshotOnRunFailure: false,
  env: loadEnv(),
  e2e: { baseUrl: loadEnv().CYPRESS_BASE_URL },
})
