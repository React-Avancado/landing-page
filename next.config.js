import withPlugins from 'next-compose-plugins'
import withPWA from 'next-pwa'
import optimizedImages from 'next-optimized-images'

const isProd = process.env.NODE_ENV === 'production'

export default withPlugins([
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
