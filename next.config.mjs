/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agenko-nextjs.vercel.app",
      },
    ],
  },
};

export default nextConfig;
