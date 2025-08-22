import { NextConfig } from "next/types";

const nextConfig: NextConfig = {
  env: {
    URL: process.env.URL,
    TOKEN_NAME: process.env.TOKEN_NAME,
    URL_PHOTO: process.env.SIMPLE_REST_URL_PHOTO,
  },

  // Оптимизация производительности
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Оптимизация изображений
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fishman-boy.ru",
      },
      {
        protocol: "https",
        hostname: "s3.timeweb.cloud",
      },
      {
        protocol: "https",
        hostname: "topframe.webtm.ru",
        pathname: "/api/uploads/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
  },

  // Оптимизация экспериментальных функций
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["swiper", "react-loading-skeleton"],
  },

  // Оптимизация заголовков
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icons/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack(config, { dev, isServer }) {
    // Оптимизация только для production
    if (!dev && !isServer) {
      // Разделение вендорных библиотек
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: "swiper",
            chunks: "all",
            priority: 10,
          },
        },
      };
    }

    // Grab the existing rule that handles SVG imports
    //@ts-ignore
    const fileLoaderRule = config.module.rules?.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              ext: "tsx",
            },
          },
        ],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
