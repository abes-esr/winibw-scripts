 /*************************************************************************************************
 * 
 *	This file contains the script function calling dialog_changerContenusNotices
 *
 **************************************************************************************************
 */	 
function transfoTheseImpTheseMicr()
{
	showDialog('BinDir\\Dialogs_Abes\\CAT_transfoTheseImpTheseMicr.html', 250, 100, 400, 90); //showDialog(dialogName, dialogStartPointX, dialogStartPointY, dialogWidth, dialogHeight)
}

function __picaCopyRecord_transfoTheseMicr() {
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
function __modifier181_transfoTheseMicr() {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag("181", 0, true, true, false);

	if (res != "") {
		//on laisse la 181 telle quelle
	}
	else {
		__ajouter_transfoTheseMicr("181 ##$P01$ctxt");
	}
}
// remplace la fonction modifier200() et modifier105()
function __modifierRemplacer_transfoTheseMicr(zone, ancientexte, nouveautexte) {
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
function __modifier328_transfoTheseMicr() {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag("328", 0, true, true, false);
	var indicateurs = res.substring(4, 6);
	if (res != "") {
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer(false);
		application.activeWindow.title.insertText(res.replace("328 " + indicateurs, "328 #0$zReproduction de") + "\n");

	}
}
function __supprimerRemplacer_transfoTheseMicr(ancienneZone, nouvelleZone) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(ancienneZone, 0, true, true, false);
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag(ancienneZone, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(nouvelleZone + "\n");
}
function __supprimer_transfoTheseMicr(zone) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	}
}
function __ajouter_transfoTheseMicr(zone) {
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(zone + "\n");
}

function __remplacerValeurZone700_transfoTheseMicr(tag) {
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
// 20180104 : suppression zone 579
function __modifierNotice_transfoTheseMicr(ancienPpn) {
	application.activeWindow.title.startOfBuffer(false);

	__supprimer_transfoTheseMicr("000");
	__supprimer_transfoTheseMicr("00A");
	__supprimer_transfoTheseMicr("002");
	__supprimer_transfoTheseMicr("003");
	__supprimer_transfoTheseMicr("010");
	__supprimer_transfoTheseMicr("035");
	__supprimerRemplacer_transfoTheseMicr("100", "100 0#$aAnnée d'édition");
	__modifierRemplacer_transfoTheseMicr("105", "$bm", "$bv");
	__supprimer_transfoTheseMicr("106");
	__ajouter_transfoTheseMicr("130 ##$ae$bb$cm$fa$gb$hb$ib");
	__modifier181_transfoTheseMicr();
	__supprimerRemplacer_transfoTheseMicr("182", "182 ##$P01$ch");
	__supprimerRemplacer_transfoTheseMicr("183", "183 ##$P01$ahad");
	__modifierRemplacer_transfoTheseMicr("200", "$bTexte imprimé", "");
	__supprimer_transfoTheseMicr("210");
	__supprimerRemplacer_transfoTheseMicr("215", "215 ##$aNombre de microfiches");
	//on ajoute la $219 ou bien on la remplace si elle existe déjà
	// on remplace la 219 par la 214
	__supprimerRemplacer_transfoTheseMicr("214", "214 #2$aLille$cAtelier national de reproduction des thèses$dAnnée de diffusion");
	__modifier328_transfoTheseMicr();
	//__ajouter_transfoTheseMicr("455 ##$t@Lien vers la thèse imprimé, document originel");
	__ajouter_transfoTheseMicr("455 ##$0" + ancienPpn);
	__supprimer_transfoTheseMicr("579");
	__modifierRemplacer_transfoTheseMicr("600", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("601", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("602", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("602", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("604", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("605", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("606", "$3027253139$2rameau", "$2rameau");
	__modifierRemplacer_transfoTheseMicr("607", "$3027253139$2rameau", "$2rameau");
	__remplacerValeurZone700_transfoTheseMicr("7");
	__modifierRemplacer_transfoTheseMicr("702", "702", "701");
	__modifierRemplacer_transfoTheseMicr("712", "712", "711");
	__supprimer_transfoTheseMicr("801");
	__supprimer_transfoTheseMicr("802");
	__supprimer_transfoTheseMicr("830");
}
function __recupererPpn_transfoTheseMicr() {
	//application.activeWindow.command("mod", false);
	//application.activeWindow.command("\\mut", false);
	if (application.activeWindow.title != null) {
		application.activeWindow.simulateIBWKey("FE");
	}
	application.activeWindow.command("\\too", false);
	var ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
	//var zone001 = application.activeWindow.title.findTag ("001", 0, true, true, false);
	//var ppn = zone001.substring(4, zone001.length);
	//application.activeWindow.simulateIBWKey("FE");
	return ppn;

}
function __do_transfoTheseImpTheseMicr() {
	//var bCodedData = application.activeWindow.codedData;
	//application.activeWindow.codedData = false;

	var ppn = __recupererPpn_transfoTheseMicr();
	__picaCopyRecord_transfoTheseMicr();
	__modifierNotice_transfoTheseMicr(ppn);

	//application.activeWindow.codedData = bCodedData;
}