const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        "/api",
        proxy({
            target: "https://bmes-aspnetcore-rest-api.azurewebsites.net/",
            changeOrigin: true
        })
    );
};
