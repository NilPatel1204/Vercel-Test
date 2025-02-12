// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";

// const isFrappeBuild = process.env.BUILD_TARGET === "frappe";

// export default defineConfig({
//   integrations: [tailwind()],
//   build: {
//     format: isFrappeBuild ? "file" : undefined, // Conditional format
//     // outDir: isFrappeBuild
//     //   ? "dist/assets/support_simprosys/support_simprosys/assets"
//     //   : "dist", // Conditional output directory
//   },
//   base: isFrappeBuild
//     ? "/assets/support_simprosys/support_simprosys/assets"
//     : undefined,
// });

// For Frappe Build
// BUILD_TARGET=frappe npm run build:frappe

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Set the default build target to 'production' if not set
const buildTarget = process.env.BUILD_TARGET || "production";
const isFrappeBuild = buildTarget === "frappe";
const isStagingBuild = buildTarget === "staging";

export default defineConfig({
  integrations: [tailwind()],
  build: {
    format: isFrappeBuild ? "file" : undefined, // Use 'file' format for Frappe builds
    outDir: isFrappeBuild
      ? "dist/assets/support_simprosys/support_simprosys/assets"
      : isStagingBuild
      ? "dist/staging"
      : "dist/production", // Output directories based on target
  },
  base: isFrappeBuild
    ? "/assets/support_simprosys/support_simprosys/assets"
    : undefined,
});
