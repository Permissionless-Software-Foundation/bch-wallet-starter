const path = require('path')
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, plugins }) => {
  // console.log('stage', stage)
  // console.log('actions', actions)
  // console.log('getConfig', getConfig)

  // https://webpack.js.org/configuration/resolve/
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'adminlte-2-react': path.resolve('./node_modules/adminlte-2-react')
      }
    }
  })
}
