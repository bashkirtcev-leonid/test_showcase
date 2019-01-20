var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    "mode": "development",
    "entry": "./main.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": "[name].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.vue$/,
                "exclude": /node_modules/,
                "use": "vue-loader"
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};
