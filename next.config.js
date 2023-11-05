/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["image.tmdb.org",'localhost', 'avatars.githubusercontent.com', 'raw.githubusercontent.com', 'expressmagazine.net'],
  },
  // experimental: {
  //   appDir: true,
  //   fontLoaders: [
  //     { loader: "@next/font/google", options: { subsets: ["latin"] } },
  //   ],
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/movie',
  //       permanent: true
  //     }
  //   ];
  // }
}

module.exports = nextConfig

