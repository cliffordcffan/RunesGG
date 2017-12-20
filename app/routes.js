//get request on home page

module.exports = function (app) {
    app.get('/', function (req,res) {
		
    })

    app.get('*', function (req,res) {
        res.sendFile(__dirname + '/../public/index.html');
    });
}
