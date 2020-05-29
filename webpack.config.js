
const path = require('path');

module.exports = {
    entry: "./app.js", //引入的檔案

    output: {
        path: path.resolve(__dirname, './dist'), //輸出的路徑
        filename: "build.js" //輸出的檔名
    }
}