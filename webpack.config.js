const { NamedModulesPlugin } = require("webpack");

module.exports = {
    mode: "development",
    entry: 'src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
}