import { loadEnvConfig } from "@next/env"
import { defineConfig } from "cypress"

const { combinedEnv: env } = loadEnvConfig(process.cwd())

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  experimentalStudio: true,
  screenshotOnRunFailure: false,
  env,
  e2e: { baseUrl: env.CYPRESS_BASE_URL },
})
