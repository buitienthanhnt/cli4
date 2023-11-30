module.exports = {
    dependencies: {
      'react-native-vector-icons': {
        platforms: {
          ios: null,
        },
      },
    },
    project: {
      ios: {
      unstable_reactLegacyComponentNames: [
        'react-native-fast-image',
        'CellContainer',
        'AutoLayoutView'
      ]},
      android: {},
    },
    assets: ['./src/assets/fonts'],
  };