const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const optimizedImages = require('next-optimized-images')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: !isProd
      }
    }
  ],
  optimizedImages
])
