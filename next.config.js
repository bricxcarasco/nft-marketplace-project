/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'drive.google.com', 'storage.googleapis.com']
  },
  i18n: {
		locales: ['ja', 'en'],
		defaultLocale: 'ja'
	},
}

module.exports = nextConfig
