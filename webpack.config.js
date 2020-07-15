const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        // __dirname gives the location to the current folder
        path: path.resolve(__dirname, 'dist')
    }
}