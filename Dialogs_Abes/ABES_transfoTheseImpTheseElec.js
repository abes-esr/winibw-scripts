 /*************************************************************************************************
 * 
 *	This file contains the script function calling dialog_changerContenusNotices
 *
 **************************************************************************************************
 */	 
function transfoTheseImpTheseElec()
{
	showDialog('BinDir\\Dialogs_Abes\\CAT_transfoTheseImpTheseElec.html', 250, 100, 400, 90); //showDialog(dialogName, dialogStartPointX, dialogStartPointY, dialogWidth, dialogHeight)
}
function __picaCopyRecord_transfoThese() {
	//var bCodedData = application.activeWindow.codedData;

	//application.activeWindow.codedData = false;
	//application.activeWindow.noviceMode = false;

	application.activeWindow.command("\\too unm", false);
	application.activeWindow.copyTitle();

	var matCode = application.activeWindow.materialCode;
	var forceDocType = matCode.substr(0, 2);


	application.activeWindow.command("\\sys 1; \\bes 1", false);

	application.activeWindow.materialCode = forceDocType;

	// crée une notice vide (cre)
	application.activeWindow.command("\\inv 1", false);

	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		//if (bCodedData) {
		//	application.activeWindow.codedData = true;
		//}
		application.activeWindow.title.endOfBuffer(false);
	}
}

// 20170601 : correction suite mise en place RDA FR 2017
function __modifier181_transfoThese() {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag("181", 0, true, true, false);

	if (res != "") {
		//on laisse la 181 telle quelle
	}
	else {
		__ajouter_transfoThese("181 ##$P01$ctxt");
	}
}

// remplace la fonction modifier200()
function __modifierRemplacer_transfoThese(zone, ancientexte, nouveautexte) {
	var tabres = new Array;
	var i = 0;
	var res = "";

	do {
		application.activeWindow.title.startOfBuffer(false);
		res = application.activeWindow.title.findTag(zone, 0, true, true, false);
		if (res != "") {
			if (zone == ancientexte) {
				tabres[i] = nouveautexte + res.substring(3) + "\n";
			}
			else {
				tabres[i] = res.replace(ancientexte, nouveautexte) + "\n";
			}
			application.activeWindow.title.deleteLine(1);
			i++;
		}
	} while (res != "")

	for (i = 0; i < tabres.length; i++) {
		application.activeWindow.title.endOfBuffer(false);
		application.activeWindow.title.insertText(tabres[i]);
	}
}
function __modifier105_transfoThese() {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag("105", 0, true, true, false);
	if (res != "") {
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer(false);
		var res_search_m = res.search(/\$bm/);
		var res_search_7 = res.search(/\$b7/);
		if (res_search_m > 0 || res_search_7 > 0) {
			if (res_search_m > 0) {
				res = res.replace("$bm", "$bv");
				res = res.replace("$b7", "");
			} else {
				res = res.replace("$b7", "$bv");
			}
		}
		application.activeWindow.title.insertText(res + "\n");
	}
}
// SRY 20151207 : prise en compte de toutes les zones 328
function __modifier328_transfoThese() {
	var tabres = new Array;
	var indicateurs = "";
	var res = "";
	var i = 0;

	do {
		application.activeWindow.title.startOfBuffer(false);
		res = application.activeWindow.title.findTag("328", 0, true, true, false);
		if (res != "") {
			indicateurs = res.substring(4, 6);
			tabres[i] = res.replace("328 " + indicateurs, "328 #0$zReproduction de") + "\n";
			application.activeWindow.title.deleteLine(1);
			i++;
		}
	} while (res != "")

	for (i = 0; i < tabres.length; i++) {
		application.activeWindow.title.endOfBuffer(false);
		application.activeWindow.title.insertText(tabres[i]);
	}
}
function __supprimerRemplacer_transfoThese(ancienneZone, nouvelleZone) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(ancienneZone, 0, true, true, false);
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag(ancienneZone, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(nouvelleZone + "\n");
}
function __supprimer_transfoThese(zone) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	}
}
function __ajouter_transfoThese(zone) {
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(zone + "\n");
}
function __remplacerValeurZone700_transfoThese(tag) {
	var res = "x";
	application.activeWindow.title.startOfBuffer(false);
	var i = 0;
	while (res != "") {
		res = application.activeWindow.title.findTag(tag, i, true, true, false);
		//on récupère le contenu de la zone sans le libellé de la $4 :
		//l'index de fin est situé à la position de la $4 + 2 caractères de la sous zone + 3 caractères du code de fonction
		var sousZones = res.split("$4");
		var zone = res.substring(0, res.indexOf("$4"));
		//pour chaque $4
		for (var j = 1; j < sousZones.length; j++) {
			zone += "$4" + sousZones[j].substring(0, 3);
		}
		zone += "\n";
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.insertText(zone);
		i++;
	}
}

// 20170316 : modification RDA FR 2017
// 20170601 : correction suite mise en place RDA FR 2017
// 20180104 : SRY : suppression zone 579
// 20200101 : mise à jour TB 2020
function __modifierNotice_transfoThese(ancienPpn) {
	application.activeWindow.title.startOfBuffer(false);

	__supprimer_transfoThese("000");
	__supprimer_transfoThese("00A");
	__supprimer_transfoThese("002");
	__supprimer_transfoThese("003");
	__supprimerRemplacer_transfoThese("008", "008 $aOax3");
	__supprimer_transfoThese("010");
	__supprimer_transfoThese("033");
	__supprimer_transfoThese("035");
	__supprimerRemplacer_transfoThese("100", "100 0#$aAnnée de mise en ligne");
	__modifier105_transfoThese();
	__supprimer_transfoThese("106");
	__ajouter_transfoThese("135 ##$ad$br");
	__modifier181_transfoThese();
	__supprimerRemplacer_transfoThese("182", "182 ##$P01$cc");
	__supprimerRemplacer_transfoThese("183", "183 ##$P01$aceb");
	__modifierRemplacer_transfoThese("200", "$bTexte imprimé", "");
	__supprimer_transfoThese("210");
	__supprimer_transfoThese("215");
	//on ajoute la $219 ou bien on la remplace si elle existe déjà
	// on remplace la 219 par la 214
	__supprimerRemplacer_transfoThese("214", "214 #2$aLieu de diffusion$cNom du diffuseur$dDate de diffusion");
	__modifier328_transfoThese();
	__ajouter_transfoThese("455 ##$0" + ancienPpn);
	__supprimer_transfoThese("579");
	__modifierRemplacer_transfoThese("600", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("601", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("602", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("602", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("604", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("605", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("606", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoThese("607", "$3027253139$2rameau", "$2rameau");
	__remplacerValeurZone700_transfoThese("7");
	__modifierRemplacer_transfoThese("702", "702", "701");
	__modifierRemplacer_transfoThese("712", "712", "711");
	__supprimer_transfoThese("801");
	__supprimer_transfoThese("802");
	__supprimer_transfoThese("830");
	__supprimer_transfoThese("839");
	__ajouter_transfoThese("856 4#$qPDF$uAdresse URL (si l'accès est réservé, créer une E856)$zAccès au texte intégral");
}

function __recupererPpn_transfoThese() {
	//application.activeWindow.command("mod", false);
	//application.activeWindow.command("\\mut", false);
	//var zone001 = application.activeWindow.title.findTag ("001", 0, true, true, false);
	//var ppn = zone001.substring(4, zone001.length);
	if (application.activeWindow.title != null) {
		application.activeWindow.simulateIBWKey("FE");
	}
	application.activeWindow.command("\\too", false);
	var ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
	//application.activeWindow.simulateIBWKey("FE");
	return ppn;
}

function __do_transfoTheseImpTheseElec() {	
	//var bCodedData = application.activeWindow.codedData;
	//application.activeWindow.codedData = false;
	var prompts = utility.newPrompter();
	var ppn = __recupererPpn_transfoThese();
	__picaCopyRecord_transfoThese();
	__modifierNotice_transfoThese(ppn);

	// SRY le 22/01/2016
	prompts.alert("CAT_transfoTheseImpTheseElec : ", "une fois la notice validée, modifier le ppn " + ppn + " et ajouter la zone 456 ##$0 + le nouveau ppn généré");
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText("une fois la notice validée, modifier le ppn " + ppn + " et ajouter la zone 456 ##$0 + le nouveau ppn généré\n");

	//application.activeWindow.codedData = bCodedData;
}