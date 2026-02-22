/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  experimental: {
    appDir: true,     
    typedRoutes: true    
  },
}

module.exports = nextConfig