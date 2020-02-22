module.exports = {
    devServer: {
        proxy: {
            '/v1': {
                target: 'http://localhost:3000/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        }
    },
    outputDir: '../backend/public',
}