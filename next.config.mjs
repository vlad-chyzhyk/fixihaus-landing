/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: "@import '@/styles/toolkit.scss';",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
