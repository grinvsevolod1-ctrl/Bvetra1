/** @type {import('next').NextConfig} */

import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ["images.unsplash.com", "bvetra.ru", "cdn.bvetra.ru"],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
  sentry: {
    hideSourceMaps: false,
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  release: process.env.SENTRY_RELEASE,
});
