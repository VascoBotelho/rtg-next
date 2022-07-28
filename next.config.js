/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.discordapp.com', 'stripe.com']
	}
}

module.exports = nextConfig
