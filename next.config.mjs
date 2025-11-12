/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'sai-yugandhar-portfolio'; // your GitHub repo name

const nextConfig = {
  output: 'export',               // required for static export
  images: { unoptimized: true },  // required for GH Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,            // ensures all paths end with /
  distDir: '.next',               // default build folder
};

export default nextConfig;
