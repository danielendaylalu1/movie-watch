/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: { domains: ["lemonsqueezy.imgix.net", "image.tmdb.org"] },
};

module.exports = nextConfig;
