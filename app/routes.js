//get request on home page
module.exports = function (app,path, ourModel) {
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
		//runes Data
		ourModel.findOne({name:champion}, function(err, champ){
			var precisionTTT = [];
			var sorceryTTT = [];
			var dominationTTT = [];
			var inspirationTTT = [];
			var resolveTTT = [];
			var primaryTrees = champ.primaryTrees;
			var precisionTree = primaryTrees[0];
			var inspirationTree = primaryTrees[1];
			var resolveTree = primaryTrees[2];
			var dominationTree = primaryTrees[3];
			var sorceryTree = primaryTrees[4];
			//total games variables
			var precisionKey, precisionPerk1, precisionPerk2, precisionPerk3;
			var sorceryKey, sorceryPerk1, sorceryPerk2, sorceryPerk3;
			var dominationKey, dominationPerk1, dominationPerk2, dominationPerk3;
			var resolveKey, resolvePerk1, resolvePerk2, resolvePerk3;
			var inspirationKey, inspirationPerk1, inspirationPerk2, inspirationPerk3;
					
			for(i=0;i<3;i++){
				var tmp = precisionTree.runes.keystone[i];
				precisionKey += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk1[i];
				precisionPerk1 += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk2[i];
				precisionPerk2 += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk3[i];
				precisionPerk3 += (tmp.wins+tmp.loses);
				
				tmp = sorceryTree.runes.keystone[i];
				sorceryKey += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk1[i];
				sorceryPerk1 += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk2[i];
				sorceryPerk2 += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk3[i];
				sorceryPerk3 += (tmp.wins+tmp.loses);
				
				tmp = dominationTree.runes.keystone[i];
				dominationKey += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk1[i];
				dominationPerk1 += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk2[i];
				dominationPerk2 += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk3[i];
				dominationPerk3 += (tmp.wins+tmp.loses);
				
				tmp = resolveTree.runes.keystone[i];
				resolveKey += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk1[i];
				resolvePerk1 += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk2[i];
				resolvePerk2 += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk3[i];
				resolvePerk3 += (tmp.wins+tmp.loses);
				
				tmp = inspirationTree.runes.keystone[i];
				inspirationKey += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk1[i];
				inspirationPerk1 += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk2[i];
				inspirationPerk2 += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk3[i];
				inspirationPerk3 += (tmp.wins+tmp.loses);
			}
			for(i =0; i < 3; i++){
				var keystone = precisionTree.runes.keystone[i];
			    //here you can pull keystone.wins, keystone.losses, keystone.stat1,stat2,stat3, id
				var perk1 = precisionTree.runes.perk1[i];
				var perk2 = precisionTree.runes.perk2[i];
				var perk3 = precisionTree.runes.perk3[i];

				precisionTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
				
				keystone = sorceryTree.runes.keystone[i];
				perk1 = sorceryTree.runes.perk1[i];
				perk2 = sorceryTree.runes.perk2[i];
				perk3 = sorceryTree.runes.perk3[i];

				sorceryTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
									
				keystone = dominationTree.runes.keystone[i];
				perk1 = dominationTree.runes.perk1[i];
				perk2 = dominationTree.runes.perk2[i];
				perk3 = dominationTree.runes.perk3[i];

				dominationTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
					
				keystone = inspirationTree.runes.keystone[i];
				perk1 = inspirationTree.runes.perk1[i];
				perk2 = inspirationTree.runes.perk2[i];
				perk3 = inspirationTree.runes.perk3[i];

				inspirationTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
									
				keystone = resolveTree.runes.keystone[i];
				perk1 = resolveTree.runes.perk1[i];
				perk2 = resolveTree.runes.perk2[i];
				perk3 = resolveTree.runes.perk3[i];

				resolveTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
			}
			var pRank =[];
			var	sRank =[];
			var rRank=[];
			var dRank=[];
			var iRank=[];
			for(i=0;i<3;i++){
				keystone = precisionTree.runes.keystone;
				perk1 = precisionTree.runes.perk1;
				perk2 = precisionTree.runes.perk2;
				perk3 = precisionTree.runes.perk3;
				var max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				var max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				var max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				var max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					pRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				keystone = sorceryTree.runes.keystone;
				perk1 = sorceryTree.runes.perk1;
				perk2 = sorceryTree.runes.perk2;
				perk3 = sorceryTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					sRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					sRank.push('t2Opacity');
				}
				else{ //if(perk1[1].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					sRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					sRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				keystone = dominationTree.runes.keystone;
				perk1 = dominationTree.runes.perk1;
				perk2 = dominationTree.runes.perk2;
				perk3 = dominationTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					dRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				keystone = inspirationTree.runes.keystone;
				perk1 = inspirationTree.runes.perk1;
				perk2 = inspirationTree.runes.perk2;
				perk3 = inspirationTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					iRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				keystone = resolveTree.runes.keystone;
				perk1 = resolveTree.runes.perk1;
				perk2 = resolveTree.runes.perk2;
				perk3 = resolveTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					rRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
			}
			//array precisionTTT. precisionTTT[0] = 'Win Rate \n PLayrate \n, etc' for precision rune 1
			res.render(path.join(__dirname+'/../public/template'),{championName: champion, pageName: 'primary',
				pTTT: precisionTTT,
				sTTT: sorceryTTT,
				rTTT: resolveTTT,
				dTTT: dominationTTT,
				iTTT: inspirationTTT,
				pGames: 'Games Played: ' + precisionTree.games,
				sGames: 'Games Played: ' + sorceryTree.games,
				rGames: 'Games Played: ' + resolveTree.games,
				dGames: 'Games Played: ' + dominationTree.games,
				iGames: 'Games Played: ' + inspirationTree.games,
				pRank: pRank,
				sRank: sRank,
				dRank: dRank,
				iRank: iRank,
				rRank: rRank,
				error:null});
		});
    });
	app.post('/template',function(req,res){
        console.log("searching for ");
		console.log(req.body.Champion);
		currChampion = req.body.Champion;
		let champion = req.body.Champion;
		//runes Data
		ourModel.findOne({name:champion}, function(err, champ){
			var precisionTTT = [];
			var sorceryTTT = [];
			var dominationTTT = [];
			var inspirationTTT = [];
			var resolveTTT = [];
			var primaryTrees = champ.primaryTrees;
			var precisionTree = primaryTrees[0];
			var inspirationTree = primaryTrees[1];
			var resolveTree = primaryTrees[2];
			var dominationTree = primaryTrees[3];
			var sorceryTree = primaryTrees[4];
			//total games variables
			var precisionKey, precisionPerk1, precisionPerk2, precisionPerk3;
			var sorceryKey, sorceryPerk1, sorceryPerk2, sorceryPerk3;
			var dominationKey, dominationPerk1, dominationPerk2, dominationPerk3;
			var resolveKey, resolvePerk1, resolvePerk2, resolvePerk3;
			var inspirationKey, inspirationPerk1, inspirationPerk2, inspirationPerk3;
					
			for(i=0;i<3;i++){
				var tmp = precisionTree.runes.keystone[i];
				precisionKey += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk1[i];
				precisionPerk1 += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk2[i];
				precisionPerk2 += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk3[i];
				precisionPerk3 += (tmp.wins+tmp.loses);
				
				tmp = sorceryTree.runes.keystone[i];
				sorceryKey += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk1[i];
				sorceryPerk1 += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk2[i];
				sorceryPerk2 += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk3[i];
				sorceryPerk3 += (tmp.wins+tmp.loses);
				
				tmp = dominationTree.runes.keystone[i];
				dominationKey += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk1[i];
				dominationPerk1 += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk2[i];
				dominationPerk2 += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk3[i];
				dominationPerk3 += (tmp.wins+tmp.loses);
				
				tmp = resolveTree.runes.keystone[i];
				resolveKey += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk1[i];
				resolvePerk1 += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk2[i];
				resolvePerk2 += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk3[i];
				resolvePerk3 += (tmp.wins+tmp.loses);
				
				tmp = inspirationTree.runes.keystone[i];
				inspirationKey += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk1[i];
				inspirationPerk1 += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk2[i];
				inspirationPerk2 += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk3[i];
				inspirationPerk3 += (tmp.wins+tmp.loses);
			}
			for(i =0; i < 3; i++){
				var keystone = precisionTree.runes.keystone[i];
			    //here you can pull keystone.wins, keystone.losses, keystone.stat1,stat2,stat3, id
				var perk1 = precisionTree.runes.perk1[i];
				var perk2 = precisionTree.runes.perk2[i];
				var perk3 = precisionTree.runes.perk3[i];

				precisionTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
				
				keystone = sorceryTree.runes.keystone[i];
				perk1 = sorceryTree.runes.perk1[i];
				perk2 = sorceryTree.runes.perk2[i];
				perk3 = sorceryTree.runes.perk3[i];

				sorceryTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
									
				keystone = dominationTree.runes.keystone[i];
				perk1 = dominationTree.runes.perk1[i];
				perk2 = dominationTree.runes.perk2[i];
				perk3 = dominationTree.runes.perk3[i];

				dominationTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
					
				keystone = inspirationTree.runes.keystone[i];
				perk1 = inspirationTree.runes.perk1[i];
				perk2 = inspirationTree.runes.perk2[i];
				perk3 = inspirationTree.runes.perk3[i];

				inspirationTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
									
				keystone = resolveTree.runes.keystone[i];
				perk1 = resolveTree.runes.perk1[i];
				perk2 = resolveTree.runes.perk2[i];
				perk3 = resolveTree.runes.perk3[i];

				resolveTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
			}
			var pRank =[];
			var	sRank =[];
			var rRank=[];
			var dRank=[];
			var iRank=[];
			for(i=0;i<3;i++){
				keystone = precisionTree.runes.keystone;
				perk1 = precisionTree.runes.perk1;
				perk2 = precisionTree.runes.perk2;
				perk3 = precisionTree.runes.perk3;
				var max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				var max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				var max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				var max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					pRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				keystone = sorceryTree.runes.keystone;
				perk1 = sorceryTree.runes.perk1;
				perk2 = sorceryTree.runes.perk2;
				perk3 = sorceryTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					sRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					sRank.push('t2Opacity');
				}
				else{ //if(perk1[1].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					sRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					sRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				keystone = dominationTree.runes.keystone;
				perk1 = dominationTree.runes.perk1;
				perk2 = dominationTree.runes.perk2;
				perk3 = dominationTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					dRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				keystone = inspirationTree.runes.keystone;
				perk1 = inspirationTree.runes.perk1;
				perk2 = inspirationTree.runes.perk2;
				perk3 = inspirationTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					iRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				keystone = resolveTree.runes.keystone;
				perk1 = resolveTree.runes.perk1;
				perk2 = resolveTree.runes.perk2;
				perk3 = resolveTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					rRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
			}
			//array precisionTTT. precisionTTT[0] = 'Win Rate \n PLayrate \n, etc' for precision rune 1
			res.render(path.join(__dirname+'/../public/template'),{championName: champion, pageName: 'primary',
				pTTT: precisionTTT,
				sTTT: sorceryTTT,
				rTTT: resolveTTT,
				dTTT: dominationTTT,
				iTTT: inspirationTTT,
				pGames: 'Games Played: ' + precisionTree.games,
				sGames: 'Games Played: ' + sorceryTree.games,
				rGames: 'Games Played: ' + resolveTree.games,
				dGames: 'Games Played: ' + dominationTree.games,
				iGames: 'Games Played: ' + inspirationTree.games,
				pRank: pRank,
				sRank: sRank,
				dRank: dRank,
				iRank: iRank,
				rRank: rRank,
				error:null});
		});
    });
	app.post('/template2',function(req,res){
        console.log("searching for ");
		console.log(req.body.Champion);
		currChampion = req.body.Champion;
		let champion = req.body.Champion;
		//runes Data
		ourModel.findOne({name:champion}, function(err, champ){
			var precisionTTT = [];
			var sorceryTTT = [];
			var dominationTTT = [];
			var inspirationTTT = [];
			var resolveTTT = [];
			/////////////////////////////////////////////PRIMARY TREE BEGIN SECONDARY in THIS CASE!!!!///////////////////////////////////////
			var primaryTrees = champ.secondaryTrees;
			var precisionTree = primaryTrees[0];
			var inspirationTree = primaryTrees[1];
			var resolveTree = primaryTrees[2];
			var dominationTree = primaryTrees[3];
			var sorceryTree = primaryTrees[4];
			//total games variables
			var precisionKey, precisionPerk1, precisionPerk2, precisionPerk3;
			var sorceryKey, sorceryPerk1, sorceryPerk2, sorceryPerk3;
			var dominationKey, dominationPerk1, dominationPerk2, dominationPerk3;
			var resolveKey, resolvePerk1, resolvePerk2, resolvePerk3;
			var inspirationKey, inspirationPerk1, inspirationPerk2, inspirationPerk3;
					
			for(i=0;i<3;i++){
				var tmp = precisionTree.runes.keystone[i];
				precisionKey += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk1[i];
				precisionPerk1 += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk2[i];
				precisionPerk2 += (tmp.wins+tmp.loses);
				tmp = precisionTree.runes.perk3[i];
				precisionPerk3 += (tmp.wins+tmp.loses);
				
				tmp = sorceryTree.runes.keystone[i];
				sorceryKey += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk1[i];
				sorceryPerk1 += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk2[i];
				sorceryPerk2 += (tmp.wins+tmp.loses);
				tmp = sorceryTree.runes.perk3[i];
				sorceryPerk3 += (tmp.wins+tmp.loses);
				
				tmp = dominationTree.runes.keystone[i];
				dominationKey += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk1[i];
				dominationPerk1 += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk2[i];
				dominationPerk2 += (tmp.wins+tmp.loses);
				tmp = dominationTree.runes.perk3[i];
				dominationPerk3 += (tmp.wins+tmp.loses);
				
				tmp = resolveTree.runes.keystone[i];
				resolveKey += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk1[i];
				resolvePerk1 += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk2[i];
				resolvePerk2 += (tmp.wins+tmp.loses);
				tmp = resolveTree.runes.perk3[i];
				resolvePerk3 += (tmp.wins+tmp.loses);
				
				tmp = inspirationTree.runes.keystone[i];
				inspirationKey += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk1[i];
				inspirationPerk1 += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk2[i];
				inspirationPerk2 += (tmp.wins+tmp.loses);
				tmp = inspirationTree.runes.perk3[i];
				inspirationPerk3 += (tmp.wins+tmp.loses);
			}
			for(i =0; i < 3; i++){
				var keystone = precisionTree.runes.keystone[i];
			    //here you can pull keystone.wins, keystone.losses, keystone.stat1,stat2,stat3, id
				var perk1 = precisionTree.runes.perk1[i];
				var perk2 = precisionTree.runes.perk2[i];
				var perk3 = precisionTree.runes.perk3[i];

				precisionTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				precisionTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
				
				keystone = sorceryTree.runes.keystone[i];
				perk1 = sorceryTree.runes.perk1[i];
				perk2 = sorceryTree.runes.perk2[i];
				perk3 = sorceryTree.runes.perk3[i];

				sorceryTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				sorceryTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
									
				keystone = dominationTree.runes.keystone[i];
				perk1 = dominationTree.runes.perk1[i];
				perk2 = dominationTree.runes.perk2[i];
				perk3 = dominationTree.runes.perk3[i];

				dominationTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				dominationTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
					
				keystone = inspirationTree.runes.keystone[i];
				perk1 = inspirationTree.runes.perk1[i];
				perk2 = inspirationTree.runes.perk2[i];
				perk3 = inspirationTree.runes.perk3[i];

				inspirationTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				inspirationTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
									
				keystone = resolveTree.runes.keystone[i];
				perk1 = resolveTree.runes.perk1[i];
				perk2 = resolveTree.runes.perk2[i];
				perk3 = resolveTree.runes.perk3[i];

				resolveTTT.push('Win Rate: '+((keystone.wins / (keystone.wins+keystone.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((keystone.wins+keystone.losses)).toString() + '\n'
									+ 'stat1: ' + (keystone.stat1/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat2: ' + (keystone.stat2/((keystone.wins+keystone.losses))).toString() + '\n'
									+ 'stat3: ' + (keystone.stat3/((keystone.wins+keystone.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk1.wins / (perk1.wins+perk1.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk1.wins+perk1.losses)).toString() + '\n'
									+ 'stat1: ' + (perk1.stat1/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat2: ' + (perk1.stat2/((perk1.wins+perk1.losses))).toString() + '\n'
									+ 'stat3: ' + (perk1.stat3/((perk1.wins+perk1.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk2.wins / (perk2.wins+perk2.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk2.wins+perk2.losses)).toString() + '\n'
									+ 'stat1: ' + (perk2.stat1/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat2: ' + (perk2.stat2/((perk2.wins+perk2.losses))).toString() + '\n'
									+ 'stat3: ' + (perk2.stat3/((perk2.wins+perk2.losses))).toString() + '\n');
				resolveTTT.push('Win Rate: '+((perk3.wins / (perk3.wins+perk3.losses))*100).toPrecision(4).toString()+ '%\n'
									+ 'Games Played: ' + ((perk3.wins+perk3.losses)).toString() + '\n'
									+ 'stat1: ' + (perk3.stat1/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat2: ' + (perk3.stat2/((perk3.wins+perk3.losses))).toString() + '\n'
									+ 'stat3: ' + (perk3.stat3/((perk3.wins+perk3.losses))).toString() + '\n');
			}
			var pRank =[];
			var	sRank =[];
			var rRank=[];
			var dRank=[];
			var iRank=[];
			for(i=0;i<3;i++){
				keystone = precisionTree.runes.keystone;
				perk1 = precisionTree.runes.perk1;
				perk2 = precisionTree.runes.perk2;
				perk3 = precisionTree.runes.perk3;
				var max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				var max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				var max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				var max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					pRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					pRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					pRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					pRank.push('t3Opacity');
				}
				
				keystone = sorceryTree.runes.keystone;
				perk1 = sorceryTree.runes.perk1;
				perk2 = sorceryTree.runes.perk2;
				perk3 = sorceryTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					sRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					sRank.push('t2Opacity');
				}
				else{ //if(perk1[1].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					sRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					sRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					sRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					sRank.push('t3Opacity');
				}
				
				keystone = dominationTree.runes.keystone;
				perk1 = dominationTree.runes.perk1;
				perk2 = dominationTree.runes.perk2;
				perk3 = dominationTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					dRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					dRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					dRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					dRank.push('t3Opacity');
				}
				
				keystone = inspirationTree.runes.keystone;
				perk1 = inspirationTree.runes.perk1;
				perk2 = inspirationTree.runes.perk2;
				perk3 = inspirationTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					iRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					iRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					iRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					iRank.push('t3Opacity');
				}
				
				keystone = resolveTree.runes.keystone;
				perk1 = resolveTree.runes.perk1;
				perk2 = resolveTree.runes.perk2;
				perk3 = resolveTree.runes.perk3;
				max0 = Math.max(keystone[0].wins + keystone[0].losses,keystone[1].wins + keystone[1].losses, keystone[2].wins + keystone[2].losses, 1);
				max1 =Math.max(perk1[0].wins + perk1[0].losses,perk1[1].wins + perk1[1].losses, perk1[2].wins + perk1[2].losses, 1);
				max2 =Math.max(perk2[0].wins + perk2[0].losses,perk2[1].wins + perk2[1].losses, perk2[2].wins + perk2[2].losses, 1);
				max3 =Math.max(perk3[0].wins + perk3[0].losses,perk3[1].wins + perk3[1].losses, perk3[2].wins + perk3[2].losses, 1);
				if((keystone[i].wins+keystone[i].losses)/max0 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((keystone[i].wins+keystone[i].losses)/max0 < 0.75 && (keystone[i].wins+keystone[i].losses)/max0 >= 0.25){
					rRank.push('t2Opacity');
				}
				
				else{//	if(keystone[0].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				if((perk1[i].wins+perk1[i].losses)/max1 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk1[i].wins+perk1[i].losses)/max1 >=0.75 && (perk1[i].wins+perk1[i].losses)/max1 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk1[1].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
				if((perk2[i].wins+perk2[i].losses)/max2 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk2[i].wins+perk2[i].losses)/max2 >=0.75 && (perk2[i].wins+perk2[i].losses)/max2 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk2[2].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
				if((perk3[i].wins+perk3[i].losses)/max3 >=0.75){
					rRank.push('t1Opacity');
				}
				else if((perk3[i].wins+perk3[i].losses)/max3 >=0.75 && (perk3[i].wins+perk3[i].losses)/max3 >= 0.25){
					rRank.push('t2Opacity');
				}
				else {//if(perk3[2].games/max < 0.25){
					rRank.push('t3Opacity');
				}
				
			}
			//array precisionTTT. precisionTTT[0] = 'Win Rate \n PLayrate \n, etc' for precision rune 1
			res.render(path.join(__dirname+'/../public/template2'),{championName: champion, pageName: 'primary',
				pTTT: precisionTTT,
				sTTT: sorceryTTT,
				rTTT: resolveTTT,
				dTTT: dominationTTT,
				iTTT: inspirationTTT,
				pGames: 'Games Played: ' + precisionTree.games,
				sGames: 'Games Played: ' + sorceryTree.games,
				rGames: 'Games Played: ' + resolveTree.games,
				dGames: 'Games Played: ' + dominationTree.games,
				iGames: 'Games Played: ' + inspirationTree.games,
				pRank: pRank,
				sRank: sRank,
				dRank: dRank,
				iRank: iRank,
				rRank: rRank,
				error:null});
		});
    });
}
