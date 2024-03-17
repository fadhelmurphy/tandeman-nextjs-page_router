/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  assetPrefix: process.env.NEXT_PUBLIC_PREFIX,
  basePath: process.env.NEXT_PUBLIC_PREFIX,
  async redirects(){
    return [
      {
        source: "/",
        destination: process.env.NEXT_PUBLIC_PREFIX,
        basePath: false,
        permanent: false
      }
    ]
  }
};

export default nextConfig;
