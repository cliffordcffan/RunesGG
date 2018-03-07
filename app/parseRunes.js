//parse runes to our champion model 

module.exports = function(ourModel, runeModel, treeModel, perkModel){
	runeModel.find().exec(function(err,runeJSON){
		var runes = JSON.parse(JSON.stringify(runeJSON));
		for (var y in runes){
			var rune = runes[y];
			var tree = new treeModel({
				name:rune.name,
				id:rune.id,
				runes:{keystone:[],perk1:[],perk2:[],perk3:[]}
			});
			var numPerks = 3;
			for (i = 0; i < numPerks;i++){

				////////////////////KEYSTONE///////////////////
				var keyRune = new perkModel({
					name:rune.slots[0].runes[i].name,
					id:rune.slots[0].runes[i].id,
				});
				//add rune stat descriptions for keystone
				//PRECISION
				if(keyRune.name == "Press the Attack"){
					keyRune.stat1_name = "Total Damage";
					keyRune.stat2_name = "Bonus Damage";
					keyRune.stat3_name = "Expose Damage";
				}else if(keyRune.name == "Lethal Tempo"){
					keyRune.stat1_name = "Total Active Time";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Fleet Footwork"){
					keyRune.stat1_name = "Total Healing";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}
				//RESOLVE
				else if(keyRune.name == "Grasp of the Undying"){
					keyRune.stat1_name = "Total Damage";
					keyRune.stat2_name = "Total Healing";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Aftershock"){
					keyRune.stat1_name = "Total Damage Dealt";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Guardian"){
					keyRune.stat1_name = "Total Shield Strength";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}
				//INSPIRATION
				else if(keyRune.name == "Unsealed Spellbook"){
					keyRune.stat1_name = "Summoners Swapped";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Glacial Augment"){
					keyRune.stat1_name = "Bonus Time Enemy Slowed";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Kleptomancy"){
					keyRune.stat1_name = "Gold Granted";
					keyRune.stat2_name = "Items Looted";
					keyRune.stat3_name = "none";
				}
				//DOMINATION
				else if(keyRune.name == "Electrocute"){
					keyRune.stat1_name = "Total Damage Dealt";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Predator"){
					keyRune.stat1_name = "Total Damage to Champions";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Dark Harvest"){
					keyRune.stat1_name = "Total Damage Dealt";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}
				//SORCERY
				else if(keyRune.name == "Summon Aery"){
					keyRune.stat1_name = "Total Damage Dealt";
					keyRune.stat2_name = "Total Damage Shielded";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Arcane Comet"){
					keyRune.stat1_name = "Total Damage Dealt";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}else if(keyRune.name == "Phase Rush"){
					keyRune.stat1_name = "Total Activations";
					keyRune.stat2_name = "none";
					keyRune.stat3_name = "none";
				}






				///////////////////RUNE 1///////////////////////
				var rune1 = new perkModel({
					name:rune.slots[1].runes[i].name,
					id:rune.slots[1].runes[i].id
				});
				//PRECISION
				if(rune1.name == "Overheal"){
					rune1.stat1_name = "Total Shielding";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Triumph"){
					rune1.stat1_name = "Total Health Restored";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Presence of Mind"){
					rune1.stat1_name = "Total Mana Restored";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}
				//RESOLVE
				else if(rune1.name == "Unflinching"){
					rune1.stat1_name = "Bonus Tenacity Per Activation";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Demolish"){
					rune1.stat1_name = "Total Bonus Damage";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Font of Life"){
					rune1.stat1_name = "Total Ally Healing";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}
				//INSPIRATION
				else if(rune1.name == "Hextech Flashtraption"){
					rune1.stat1_name = "Times Hexflashed";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Biscuit Delivery"){
					rune1.stat1_name = "Biscuits Receieved";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Perfect Timing"){
					rune1.stat1_name = "none";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}
				//DOMINATION
				else if(rune1.name == "Cheap Shot"){
					rune1.stat1_name = "Total Damage";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Taste of Blood"){
					rune1.stat1_name = "Total Healing";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Sudden Impact"){
					rune1.stat1_name = "Bonus Damage";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}
				//SORCERY
				else if(rune1.name == "Nullifying Orb"){
					rune1.stat1_name = "Total Shield Granted";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "Manaflow Band"){
					rune1.stat1_name = "Total Resource Refunded";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}else if(rune1.name == "The Ultimate Hat"){
					rune1.stat1_name = "Total Bonus CDR";
					rune1.stat2_name = "none";
					rune1.stat3_name = "none";
				}






				//////////////////////////RUNE 2/////////////////////
				var rune2 = new perkModel({
					name:rune.slots[2].runes[i].name,
					id:rune.slots[2].runes[i].id
				});
				//PRECISION
				if(rune2.name == "Legend: Alacrity"){
					rune2.stat1_name = "Time Completed";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Legend: Tenacity"){
					rune2.stat1_name = "Time Completed";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Legend: Bloodline"){
					rune2.stat1_name = "Time Completed";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}
				//RESOLVE
				else if(rune2.name == "Iron Skin"){
					rune2.stat1_name = "Percent of Game Active";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Mirror Shell"){
					rune2.stat1_name = "Percent of Game Active";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Conditioning"){
					rune2.stat1_name = "Percent of Game Active";
					rune2.stat2_name = "Total Bonus Armor";
					rune2.stat3_name = "Total Bonus Magic Resist";
				}
				//INSPIRATION
				else if(rune2.name == "Magical Footwear"){
					rune2.stat1_name = "Boots Arrival Time";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Future\'s Market"){
					rune2.stat1_name = "Future Purchases";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Minion Dematerializer"){
					rune2.stat1_name = "Bonus Minion Damage Dealt";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}
				//DOMINATION
				else if(rune2.name == "Zombie Ward"){
					rune2.stat1_name = "Wards Corrupted";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Ghost Poro"){
					rune2.stat1_name = "Poros Spawned";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Eyeball Collection"){
					rune2.stat1_name = "Total Bonus AD/AP";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}
				//SORCERY
				else if(rune2.name == "Transcendence"){
					rune2.stat1_name = "Total Adaptive Stat Gained";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Celerity"){
					rune2.stat1_name = "Total Bonus AD/AP";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}else if(rune2.name == "Absolute Focus"){
					rune2.stat1_name = "Total Time Active";
					rune2.stat2_name = "none";
					rune2.stat3_name = "none";
				}




				/////////////////////////RUNE 3////////////////////
				var rune3 = new perkModel({
					name:rune.slots[3].runes[i].name,
					id:rune.slots[3].runes[i].id
				});
				//PRECISION
				if(rune3.name == "Coup de Grace"){
					rune3.stat1_name = "Total Bonus Damage";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Cut Down"){
					rune3.stat1_name = "Total Bonus Damage";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Last Stand"){
					rune3.stat1_name = "Total Bonus Damage";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}
				//RESOLVE
				else if(rune3.name == "Overgrowth"){
					rune3.stat1_name = "Total Bonus Max Health";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Revitalize"){
					rune3.stat1_name = "Bonus Healing";
					rune3.stat2_name = "Bonus Shielding";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Second Wind"){
					rune3.stat1_name = "Total Healing";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}
				//INSPIRATION
				else if(rune3.name == "Cosmic Insight"){
					rune3.stat1_name = "none";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Approach Velocity"){
					rune3.stat1_name = "Time Spent Hasted";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Celestial Body"){
					rune3.stat1_name = "none";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}
				//DOMINATION
				else if(rune3.name == "Ravenous Hunter"){
					rune3.stat1_name = "Total Stacks";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Ingenious Hunter"){
					rune3.stat1_name = "Total Stacks";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Relentless Hunter"){
					rune3.stat1_name = "Total Stacks";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}
				//SORCERY
				else if(rune3.name == "Scorch"){
					rune3.stat1_name = "Total Bonus Damage";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Waterwalking"){
					rune3.stat1_name = "Total Time Active";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}else if(rune3.name == "Gathering Storm"){
					rune3.stat1_name = "Total Bonus AD/AP";
					rune3.stat2_name = "none";
					rune3.stat3_name = "none";
				}

				//add runes to tree
				tree.runes.keystone.push(keyRune);
				tree.runes.perk1.push(rune1);
				tree.runes.perk2.push(rune2);
				tree.runes.perk3.push(rune3);
			}
			ourModel.update({},{ "$push": { "primaryTrees":tree, 
				"secondaryTrees":tree }},{multi:true},function(err,numUpdated){
					if(err) return handleError(err);
					//console.log(numUpdated);			
				}
			);
		}
	});		
}
