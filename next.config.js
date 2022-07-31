const nextTranslate = require('next-translate')

module.exports = nextTranslate({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.discordapp.com']
	},
  webpack: (config) => config
})