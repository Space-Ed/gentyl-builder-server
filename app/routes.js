module.exports = function(app) {
    app.get('*', function(req, res) {
        res.sendfile('./www/index.html'); // load our public/index.html file
    });
};
