/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "userpic.codeforces.org",
      },
    ],
  },
};

module.exports = nextConfig;
