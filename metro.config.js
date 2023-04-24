const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer')
    },
    resolver: {
      assetExts: [
        ...assetExts,
        'png',
        'jpg',
        'jpeg',
        'gif',
        'svg',
        'ttf',
        'otf',
        'woff',
        'woff2',
      ],
      sourceExts: [
        ...sourceExts,
        'cjs',
        'jsx',
        'tsx',
        'ts',
        'json',
        'scss',
        'sass'
      ]
    }
  }
})()
