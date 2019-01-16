var path = require('path');

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
    }
};