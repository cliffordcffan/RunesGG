
module.exports = {
	//replaces inputted champion name with it's respective name in our database
	//if failed, return "invalid"
	normalizeChampionName: function(name){
		var trimmed = name.toLowerCase().replace(/\s/g, '');
		var dbName;
		switch(trimmed){
			case "jax":
				dbName = "Jax";
				break;
			case "sona":
				dbName = "Sona";
				break;
			case "tristana":
				dbName = "Tristana";
				break;
			case "varus":
				dbName = "Varus";
				break;
			case "fiora":
				dbName = "Fiora";
				break;
			case "singed":
				dbName = "Singed";
				break;
			case "karma":
				dbName = "Karma";
				break;
			case "thresh":
				dbName = "Thresh";
				break;
			case "leblanc":
				dbName = "LeBlanc";
				break;
			case "tahmkench":
				dbName = "Tahm Kench";
				break;
			case "jhin":
				dbName = "Jhin";
				break;
			case "ornn":
				dbName = "Ornn";
				break;
			case "draven":
				dbName = "Draven";
				break;
			case "hecarim":
				dbName = "Hecarim";
				break;
			case "jinx":
				dbName = "Jinx";
				break;
			case "talon":
				dbName = "Talon";
				break;
			case "annie":
				dbName = "Annie";
				break;
			case "cho'gath":
				dbName = "Cho'Gath";
				break;
			////////////////////////////////chogath is special :^) ///////////////////////////////////
			case "chogath":
				dbName = "Cho'Gath";
				break;
			case "heimerdinger":
				dbName = "Heimerdinger";
				break;
			case "sejuani":
				dbName = "Sejuani";
				break;
			case "blitzcrank":
				dbName = "Blitzcrank";
				break;
			case "kindred":
				dbName = "Kindred";
				break;
			case "taric":
				dbName = "Taric";
				break;
			case "veigar":
				dbName = "Veigar";
				break;
			case "jayce":
				dbName = "Jayce";
				break;
			case "vayne":
				dbName = "Vayne";
				break;
			case "xayah":
				dbName = "Xayah";
				break;
			case "shyvana":
				dbName = "Shyvana";
				break;
			case "olaf":
				dbName = "Olaf";
				break;
			case "irelia":
				dbName = "Irelia";
				break;
			case "akali":
				dbName = "Akali";
				break;
			case "nocturne":
				dbName = "Nocturne";
				break;
			case "cassiopeia":
				dbName = "Cassiopeia";
				break;
			case "evelynn":
				dbName = "Evelynn";
				break;
			case "masteryi":
				dbName = "Master Yi";
				break;
			case "rumble":
				dbName = "Rumble";
				break;
			case "jarvaniv":
				dbName = "Jarvan IV";
				break;
			////////////////////////jarvan is also special /////////////////////////////////////
			case "jarvan4":
				dbName = "Jarvan IV";
				break;
			case "kayn":
				dbName = "Kayn";
				break;
			case "yasuo":
				dbName = "Yasuo";
				break;
			case "fizz":
				dbName = "Fizz";
				break;
			case "urgot":
				dbName = "Urgot";
				break;
			case "gangplank":
				dbName = "Gangplank";
				break;
			case "mordekaiser":
				dbName = "Mordekaiser";
				break;
			case "aatrox":
				dbName = "Aatrox";
				break;
			case "alistar":
				dbName = "Alistar";
				break;
			case "nidalee":
				dbName = "Nidalee";
				break;
			case "rammus":
				dbName = "Rammus";
				break;
			case "quinn":
				dbName = "Quinn";
				break;
			case "syndra":
				dbName = "Syndra";
				break;
			case "xerath":
				dbName = "Xerath";
				break;
			case "darius":
				dbName = "Darius";
				break;
			case "brand":
				dbName = "Brand";
				break;
			case "karthus":
				dbName = "Karthus";
				break;
			case "warwick":
				dbName = "Warwick";
				break;
			case "twistedfate":
				dbName = "Twisted Fate";
				break;
			case "ivern":
				dbName = "Ivern";
				break;
			case "vi":
				dbName = "Vi";
				break;
			case "diana":
				dbName = "Diana";
				break;
			case "nasus":
				dbName = "Nasus";
				break;
			case "rek'sai":
				dbName = "Rek'Sai";
				break;
			//////////////////////////////reksai also special i guess ////////////////////////
			case "reksai":
				dbName = "Rek'Sai";
				break;
			case "ryze":
				dbName = "Ryze";
				break;
			case "malzahar":
				dbName = "Malzahar";
				break;
			case "udyr":
				dbName = "Udyr";
				break;
			case "missfortune":
				dbName = "Miss Fortune";
				break;
			case "renekton":
				dbName = "Renekton";
				break;
			case "lissandra":
				dbName = "Lissandra";
				break;
			case "pantheon":
				dbName = "Pantheon";
				break;
			case "teemo":
				dbName = "Teemo";
				break;
			case "riven":
				dbName = "Riven";
				break;
			case "illaoi":
				dbName = "Illaoi";
				break;
			case "volibear":
				dbName = "Volibear";
				break;
			case "zed":
				dbName = "Zed";
				break;
			case "trundle":
				dbName = "Trundle";
				break;
			case "swain":
				dbName = "Swain";
				break;
			case "braum":
				dbName = "Braum";
				break;
			case "ahri":
				dbName = "Ahri";
				break;
			case "elise":
				dbName = "Elise";
				break;
			case "soraka":
				dbName = "Soraka";
				break;
			case "leesin":
				dbName = "Lee Sin";
				break;
			case "katarina":
				dbName = "Katarina";
				break;
			case "sivir":
				dbName = "Sivir";
				break;
			case "kha'zix":
				dbName = "Kha'Zix";
				break;
			/////////////////////////////////these void names... ///////////////////////////////////
			case "khazix":
				dbName = "Kha'Zix";
				break;
			case "shaco":
				dbName = "Shaco";
				break;
			case "bard":
				dbName = "Bard";
				break;
			case "maokai":
				dbName = "Maokai";
				break;
			case "kalista":
				dbName = "Kalista";
				break;
			case "galio":
				dbName = "Galio";
				break;
			case "morgana":
				dbName = "Morgana";
				break;
			case "viktor":
				dbName = "Viktor";
				break;
			case "orianna":
				dbName = "Orianna";
				break;
			case "camille":
				dbName = "Camille";
				break;
			case "shen":
				dbName = "Shen";
				break;
			case "gnar":
				dbName = "Gnar";
				break;
			case "kennen":
				dbName = "Kennen";
				break;
			case "taliyah":
				dbName = "Taliyah";
				break;
			case "lucian":
				dbName = "Lucian";
				break;
			case "leona":
				dbName = "Leona";
				break;
			case "caitlyn":
				dbName = "Caitlyn";
				break;
			case "nami":
				dbName = "Nami";
				break;
			case "skarner":
				dbName = "Skarner";
				break;
			case "nautilus":
				dbName = "Nautilus";
				break;
			case "janna":
				dbName = "Janna";
				break;
			case "graves":
				dbName = "Graves";
				break;
			case "zilean":
				dbName = "Zilean";
				break;
			case "kled":
				dbName = "Kled";
				break;
			case "rengar":
				dbName = "Rengar";
				break;
			case "ashe":
				dbName = "Ashe";
				break;
			case "lulu":
				dbName = "Lulu";
				break;
			case "yorick":
				dbName = "Yorick";
				break;
			case "zyra":
				dbName = "Zyra";
				break;
			case "dr.mundo":
				dbName = "Dr. Mundo";
				break;
			////////////////////////////////////////cuz mundo ////////////////////////////////////
			case "drmundo":
				dbName = "Dr. Mundo";
				break;
			case "doctormundo":
				dbName = "Dr. Mundo";
				break;
			case "mundo":
				dbName = "Dr. Mundo";
				break;
			/////////////////////////////////////much mundo wow ///////////////////////////////////
			case "kassadin":
				dbName = "Kassadin";
				break;
			case "sion":
				dbName = "Sion";
				break;
			case "kayle":
				dbName = "Kayle";
				break;
			case "anivia":
				dbName = "Anivia";
				break;
			case "kog'maw":
				dbName = "Kog'Maw";
				break;
			//////////////////////////////////////////// hey its a dog ///////////////////////////
			case "kogmaw":
				dbName = "Kog'Maw";
				break;
			case "gragas":
				dbName = "Gragas";
				break;
			case "fiddlesticks":
				dbName = "Fiddlesticks";
				break;
			case "ezreal":
				dbName = "Ezreal";
				break;
			case "azir":
				dbName = "Azir";
				break;
			case "poppy":
				dbName = "Poppy";
				break;
			case "xinzhao":
				dbName = "Xin Zhao";
				break;
			case "garen":
				dbName = "Garen";
				break;
			case "vel'koz":
				dbName = "Vel'Koz";
				break;
			///////////////////////////////////////TENTACLES//////////////////////////
			case "velkoz":
				dbName = "Vel'Koz";
				break;
			case "ekko":
				dbName = "Ekko";
				break;
			case "rakan":
				dbName = "Rakan";
				break;
			case "corki":
				dbName = "Corki";
				break;
			case "tryndamere":
				dbName = "Tryndamere";
				break;
			case "zoe":
				dbName = "Zoe";
				break;
			case "vladimir":
				dbName = "Vladimir";
				break;
			case "ziggs":
				dbName = "Ziggs";
				break;
			case "nunu":
				dbName = "Nunu";
				break;
			case "wukong":
				dbName = "Wukong";
				break;
			case "amumu":
				dbName = "Amumu";
				break;
			case "aurelionsol":
				dbName = "Aurelion Sol";
				break;
			case "twitch":
				dbName = "Twitch";
				break;
			case "lux":
				dbName = "Lux";
				break;
			case "malphite":
				dbName = "Malphite";
				break;
			case "zac":
				dbName = "Zac";
				break;
			default:
				dbName = "invalid";
		}
		return dbName;
	}
};