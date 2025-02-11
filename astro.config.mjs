import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isFrappeBuild = process.env.BUILD_TARGET === "frappe";

export default defineConfig({
  integrations: [tailwind()],
  build: {
    format: isFrappeBuild ? "file" : undefined, // Conditional format
    outDir: isFrappeBuild
      ? "dist/assets/support_simprosys/support_simprosys/assets"
      : "dist", // Conditional output directory
  },
  base: isFrappeBuild
    ? "/assets/support_simprosys/support_simprosys/assets"
    : undefined,
});

// For Frappe Build
// BUILD_TARGET=frappe npm run build:frappe
