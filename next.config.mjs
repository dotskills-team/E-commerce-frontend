/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Add remote hosts here if you later load product images from a CMS/CDN.
      // Example:
      // { protocol: "https", hostname: "admin.yourdomain.com" },
    ],
  },
};

export default nextConfig;
