import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Старые домены (оставляем, чтобы ничего не сломать)
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'hgrobotics.pl' },
      { protocol: 'https', hostname: 'p-zm.com' },
      { protocol: 'https', hostname: 'd2yvmenv39glx3.cloudfront.net' },
      { protocol: 'https', hostname: 'eshield.pl' },
      { protocol: 'https', hostname: 'www.datocms-assets.com' },
      
      // 👇 ВАЖНО: Добавляем твой WordPress
      { protocol: 'https', hostname: 'cms.s4industry.pl' },
    ],
  },
};

export default nextConfig;