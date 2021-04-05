const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        "/api",
        proxy.createProxyMiddleware({
            target: "https://bmes-aspnetcore-rest-api.azurewebsites.net/",
            changeOrigin: true
        })
    );
};
