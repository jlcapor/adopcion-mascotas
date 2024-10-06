import MillionLint from "@million/lint";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
          },
        ],
        unoptimized: true,
      },
};

export default MillionLint.next({
  rsc: true,
  filter: {
    include: "**/components/*.{mtsx,mjsx,tsx,jsx}",
  },
})(config);
