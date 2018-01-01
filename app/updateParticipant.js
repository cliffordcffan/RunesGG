module.exports = function(ourModel,participant,win){
	ourModel.findOne({id:participant.championId},function(err,champion){
		console.log("Updating rune stats for champion: "+champion.name);
		var numRunes = 3;
		var numTrees = 5;
		for(var j = 0; j < 5; j++){
			var pTree = participant.stats.perkPrimaryStyle;
			//console.log(champion.primaryTrees[j].id);
			if(champion.primaryTrees[j].id == pTree.toString()){
				champion.primaryTrees[j].games+=1;	
				var keystone = participant.stats.perk0;
				var perk1 = participant.stats.perk1;
				var perk2 = participant.stats.perk2;
				var perk3 = participant.stats.perk3;
				for(i = 0; i < numRunes; i++){
					if(champion.primaryTrees[j].runes.keystone[i].id == keystone.toString()){
						if(win){
							champion.primaryTrees[j].runes.keystone[i].wins +=1;
						}else{
							champion.primaryTrees[j].runes.keystone[i].losses +=1;
						}
						champion.primaryTrees[j].runes.keystone[i].stat1 += participant.stats.perk0Var1;
						champion.primaryTrees[j].runes.keystone[i].stat2 += participant.stats.perk0Var2;
						champion.primaryTrees[j].runes.keystone[i].stat3 += participant.stats.perk0Var3;
					}
					if(champion.primaryTrees[j].runes.perk1[i].id == perk1.toString()){
						if(win){
							champion.primaryTrees[j].runes.perk1[i].wins +=1;
						}else{
							champion.primaryTrees[j].runes.perk1[i].losses +=1;
						}
						champion.primaryTrees[j].runes.perk1[i].stat1 += participant.stats.perk1Var1;
						champion.primaryTrees[j].runes.perk1[i].stat2 += participant.stats.perk1Var2;
						champion.primaryTrees[j].runes.perk1[i].stat3 += participant.stats.perk1Var3;
					}
					if(champion.primaryTrees[j].runes.perk2[i].id == perk2.toString()){
						if(win){
							champion.primaryTrees[j].runes.perk2[i].wins +=1;
						}else{
							champion.primaryTrees[j].runes.perk2[i].losses +=1;
						}
						champion.primaryTrees[j].runes.perk2[i].stat1 += participant.stats.perk2Var1;
						champion.primaryTrees[j].runes.perk2[i].stat2 += participant.stats.perk2Var2;
						champion.primaryTrees[j].runes.perk2[i].stat3 += participant.stats.perk2Var3;
					}
					if(champion.primaryTrees[j].runes.perk3[i].id == perk3.toString()){
						if(win){
							champion.primaryTrees[j].runes.perk3[i].wins +=1;
						}else{
							champion.primaryTrees[j].runes.perk3[i].losses +=1;
						}
						champion.primaryTrees[j].runes.perk3[i].stat1 += participant.stats.perk3Var1;
						champion.primaryTrees[j].runes.perk3[i].stat2 += participant.stats.perk3Var2;
						champion.primaryTrees[j].runes.perk3[i].stat3 += participant.stats.perk3Var3;
					}	
				}
			}
			var sTree = participant.stats.perkSubStyle;
			if(champion.secondaryTrees[j].id == sTree.toString()){
				champion.secondaryTrees[j].games+=1;
				var perk4 = participant.stats.perk4;
				var perk5 = participant.stats.perk5
				for(i = 0; i< numRunes; i++){
					if(champion.secondaryTrees[j].runes.perk1[i].id == perk4.toString()){
						if(win){
							champion.secondaryTrees[j].runes.perk1[i].wins +=1;
						}else{
							champion.secondaryTrees[j].runes.perk1[i].losses +=1;
						}
						champion.secondaryTrees[j].runes.perk1[i].stat1 += participant.stats.perk4Var1;
						champion.secondaryTrees[j].runes.perk1[i].stat2 += participant.stats.perk4Var2;
						champion.secondaryTrees[j].runes.perk1[i].stat3 += participant.stats.perk4Var3;
					}else if(champion.secondaryTrees[j].runes.perk1[i].id == perk5.toString()){
						if(win){
							champion.secondaryTrees[j].runes.perk1[i].wins +=1;
						}else{
							champion.secondaryTrees[j].runes.perk1[i].losses +=1;
						}
						champion.secondaryTrees[j].runes.perk1[i].stat1 += participant.stats.perk5Var1;
						champion.secondaryTrees[j].runes.perk1[i].stat2 += participant.stats.perk5Var2;
						champion.secondaryTrees[j].runes.perk1[i].stat3 += participant.stats.perk5Var3;
					}
					if(champion.secondaryTrees[j].runes.perk2[i].id == perk4.toString()){
						if(win){
							champion.secondaryTrees[j].runes.perk2[i].wins +=1;
						}else{
							champion.secondaryTrees[j].runes.perk2[i].losses +=1;
						}
						champion.secondaryTrees[j].runes.perk2[i].stat1 += participant.stats.perk4Var1;
						champion.secondaryTrees[j].runes.perk2[i].stat2 += participant.stats.perk4Var2;
						champion.secondaryTrees[j].runes.perk2[i].stat3 += participant.stats.perk4Var3;
					}else if(champion.secondaryTrees[j].runes.perk2[i].id == perk5.toString()){
						if(win){
							champion.secondaryTrees[j].runes.perk2[i].wins +=1;
						}else{
							champion.secondaryTrees[j].runes.perk2[i].losses +=1;
						}
						champion.secondaryTrees[j].runes.perk2[i].stat1 += participant.stats.perk5Var1;
						champion.secondaryTrees[j].runes.perk2[i].stat2 += participant.stats.perk5Var2;
						champion.secondaryTrees[j].runes.perk2[i].stat3 += participant.stats.perk5Var3;
					}
					if(champion.secondaryTrees[j].runes.perk3[i].id == perk4.toString()){
						if(win){
							champion.secondaryTrees[j].runes.perk3[i].wins +=1;
						}else{
							champion.secondaryTrees[j].runes.perk3[i].losses +=1;
						}
						champion.secondaryTrees[j].runes.perk3[i].stat1 += participant.stats.perk4Var1;
						champion.secondaryTrees[j].runes.perk3[i].stat2 += participant.stats.perk4Var2;
						champion.secondaryTrees[j].runes.perk3[i].stat3 += participant.stats.perk4Var3;
					}else if(champion.secondaryTrees[j].runes.perk3[i].id == perk5.toString()){
						if(win){
							champion.secondaryTrees[j].runes.perk3[i].wins +=1;
						}else{
							champion.secondaryTrees[j].runes.perk3[i].losses +=1;
						}
						champion.secondaryTrees[j].runes.perk3[i].stat1 += participant.stats.perk5Var1;
						champion.secondaryTrees[j].runes.perk3[i].stat2 += participant.stats.perk5Var2;
						champion.secondaryTrees[j].runes.perk3[i].stat3 += participant.stats.perk5Var3;
					}
				}
			}	
		}
		champion.save();
	});
}
