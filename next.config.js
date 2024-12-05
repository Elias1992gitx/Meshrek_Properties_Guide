/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      unoptimized: true,
      remotePatterns: [
   
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        },
       
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
      ],
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      domains: ['images.unsplash.com'],
    },
  };
  
  module.exports = nextConfig;
  