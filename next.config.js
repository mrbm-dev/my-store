/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  fallbackLng: {
    default: ["fa"],
  },
};

module.exports = nextConfig;
