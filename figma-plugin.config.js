module.exports = function (config) {
  for (const rule of config.module.rules) {
    for (const loader of rule.use) {
      if (loader.loader !== 'babel-loader' || typeof loader.plugins === 'undefined') {
        continue
      }
      for (const plugin of loader.plugins) {
        if (Array.isArray(plugin) && plugin[0] === '@babel/plugin-transform-react-jsx') {
          plugin.splice(1, 1) // remove `{ pragma: 'h', pragmaFrag: 'Fragment' }`
        }
      }
    }
  }
  return config
}
