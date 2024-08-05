/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false, // true인 경우 HTTP Status Code 308, false인 경우 307
      },
    ];
  },
};

export default nextConfig;
