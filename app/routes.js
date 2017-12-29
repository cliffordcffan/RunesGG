//get request on home page
module.exports = function (app,path) {
    app.get('/',function(req,res){
		console.log("getting homepage");
        res.sendFile(path.join(__dirname+'/../public/index.html'));
        //__dirname : It will resolve to your project folder.
    });
    app.post('/',function(req,res){
        console.log("searching for ");
		console.log(req.body.Champion);
		currChampion = req.body.Champion;
		let champion = req.body.Champion;
		res.render(path.join(__dirname+'/../public/template'),{championName: champion, pageName: 'primary', error:null});
    });
	app.post('/template',function(req,res){
        console.log("searching for ");
		console.log(req.body.Champion);
		let champion = req.body.Champion;
        res.render(path.join(__dirname+'/../public/template'),{championName: champion, pageName: 'primary', error:null});
        //__dirname : It will resolve to your project folder.
    });
	app.post('/template2',function(req,res){
        console.log("searching for ");
		console.log(req.body.Champion);
		let champion = req.body.Champion;
        res.render(path.join(__dirname+'/../public/template2'),{championName: champion, pageName: 'secondary', error:null});
        //__dirname : It will resolve to your project folder.
    });
}
