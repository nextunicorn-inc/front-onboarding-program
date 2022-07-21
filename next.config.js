/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'contents.nextunicorn.kr',
      'contents-beta.nextunicorn.kr',
      'contents-alpha.nextunicorn.kr',
    ],
  },
};

module.exports = nextConfig;
