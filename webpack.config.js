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
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};
