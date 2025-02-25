import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // experimental: {
  //   nextScriptWorkers: true,
  // },
};

export default withNextIntl(nextConfig);


// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
