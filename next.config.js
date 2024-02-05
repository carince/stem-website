/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/stem-website",
  images: { unoptimized: true }
}

module.exports = nextConfig