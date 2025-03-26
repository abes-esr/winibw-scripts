 /*************************************************************************************************
 * 
 *	This file contains the script function calling dialog_changerContenusNotices
 *
 **************************************************************************************************
 */	 

function transfoPeriodImpPeriodElec()
{
	showDialog('BinDir\\Dialogs_Abes\\CAT_transfoPeriodImpPeriodElec.html', 250, 100, 400, 90); //showDialog(dialogName, dialogStartPointX, dialogStartPointY, dialogWidth, dialogHeight)
}

function __do_transfoPeriodImpPeriodElec() {
	//var bCodedData = application.activeWindow.codedData;
	//application.activeWindow.codedData = false;
	var ppn = __recupererPpn_transfoPeriod();	
	__picaCopyRecord_transfoPeriod();	
	__modifierNotice_transfoPeriod(ppn);
	//application.activeWindow.codedData = bCodedData;
	application.closeWindow();
}

function __recupererPpn_transfoPeriod() {
	//application.activeWindow.command("mod", false);
	//application.activeWindow.command("\\mut", false);
	if (application.activeWindow.title != null) {
		application.activeWindow.simulateIBWKey("FE");
	}
	application.activeWindow.command("\\too", false);
	var ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
	//application.activeWindow.simulateIBWKey("FE");
	return ppn;
}

/**
Fonction permettant de dupliquer une notice existante en conservant l'ensemble des données d'origine
*/
function __picaCopyRecord_transfoPeriod() {
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

/**
Modification de la notice
Param: ancienppn=ppn à modifier
*/
function __modifierNotice_transfoPeriod(ancienPpn) {
	application.activeWindow.title.startOfBuffer(false);
	__supprimer_transfoPeriod("000");	
	__supprimer_transfoPeriod("00A");
	__supprimer_transfoPeriod("002");
	__supprimer_transfoPeriod("003");
	if (__controlecontenusouszone_transfoPeriod("008", "$a", "Ab")) {
		__remplacementSousZone_transfoPeriod("008", "$aAb", "$aOb");
	}		
	__supprimer_transfoPeriod("010");
	__supprimer_transfoPeriod("011");
	__supprimer_transfoPeriod("035");
	
	__chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("100", "100 0#$a199X$d199X-...", false);	
	
	__supprimer_transfoPeriod("106");
	__chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("135", "135 $ad$br", false);
	__chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("181", "181 ##$P01$ctxt", false);
	__chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("182", "182 ##$P01$cc", false);
	__chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("183", "183 ##$P01$aceb", false);
	
	__remplacementSousZone_transfoPeriod("200", "$bTexte imprimé", "");	
	__supprimer_transfoPeriod("207");
	__ajouter_transfoPeriod("207 #.$aNumérotation : indication de date et de volume");
	__supprimerRemplacer210Par214_transfoPeriod(""); 
	__ajouter_transfoPeriod("214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication");
	__supprimer_transfoPeriod("215");
	__supprimer_transfoPeriod("225");
	__supprimer_transfoPeriod("230");
	
	//Suppression des zones 3XX sauf 304
	__supprimer_transfoPeriod("300");
	__supprimer_transfoPeriod("301");
	__supprimer_transfoPeriod("302");
	__supprimer_transfoPeriod("303");
	__supprimer_transfoPeriod("305");
	__supprimer_transfoPeriod("306");
	__supprimer_transfoPeriod("307");
	__supprimer_transfoPeriod("308");
	__supprimer_transfoPeriod("309");
	
	for (var i = 10; i < 100; i++) { __supprimer_transfoPeriod("3" + i); }
	
	__ajouter_transfoPeriod("371 .#$a");
	
	//Suppression des zones 4XX
	for (var i = 0; i < 10; i++) { __supprimer_transfoPeriod("40" + i); }
	
	for (var i = 10; i < 100; i++) { __supprimer_transfoPeriod("4" + i); }
	
	__ajouter_transfoPeriod("452 $0" + ancienPpn);
	__supprimer_transfoPeriod("530");
	__supprimer_transfoPeriod("531");
	__remplacementSousZone_transfoPeriod("606", "$302724640X", "");
	__ajouter_transfoPeriod("608 ##$302724640X$2rameau");
	__remplacerValeurZone700_transfoPeriod("7");
	
	if (__controlecontenusouszone_transfoPeriod("702", "$4", "651")) { __chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("702", "701" + __recuperationContenuDeLigneZoneNonInclusePourLaZone_transfoPeriod("702")); }
	if (__controlecontenusouszone_transfoPeriod("712", "$4", "651")) { __chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod("712", "711" + __recuperationContenuDeLigneZoneNonInclusePourLaZone_transfoPeriod("712")); }
	__supprimer_transfoPeriod("801");
	__supprimer_transfoPeriod("802");
	__supprimer_transfoPeriod("830");
	__ajouter_transfoPeriod("856 4#$uAdresse URL (si l'accès est réservé, créer une E856)");
}

function __supprimerRemplacer210Par214_transfoPeriod(zone) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag("210", 0, true, true, false);
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer(false);
		application.activeWindow.title.insertText(__renvoieNouvelle214_transfoPeriod(res) + "\n");
		res = application.activeWindow.title.findTag("210", 0, true, true, false);
	}
}
function __renvoieNouvelle214_transfoPeriod(chaine) {

	var tab_sz = new Array("$6", "$7", "$a", "$b", "$c", "$d");
	var i = 0;
	var pos$sz = 0;
	var indicateur = "";
	var result = "";
	var chaine$sz = "";
	var sousChaine; 
	var pos$suivant;
	var contenu$sz;

	chaine = chaine.substr(4, chaine.length);
	indicateur = chaine.substring(0, 2);
	result = "214" + " " + indicateur;

	//chaine = "210 ##$aAAAA$cfffff$cEEEEE$dTOTO$fddddachanger$zTexte imprimé$fqqqqq";


	for (i = 0; i < tab_sz.length; i++) {
		chaine$sz = chaine;
		pos$sz = chaine$sz.indexOf(tab_sz[i]);
		while (pos$sz != -1) {
			// si $sz est présent
			pos$sz += 2;// décallage de 2 pour ne pas inclure "$sz"
			sousChaine = chaine$sz.substring(pos$sz, chaine$sz.length);
			// recherche du prochain dollar
			pos$suivant = sousChaine.indexOf("$");
			if (pos$suivant == -1) {
				// cas où il n'y a pas de dollar après $d (fin de chaîne)
				pos$suivant = chaine$sz.length - pos$sz;
			}
			// récup. du texte entre $d et le dollar suivant
			contenu$sz = chaine$sz.substring(pos$sz, pos$sz + pos$suivant);
			// prompts.alert(null,"contenu$sz4--",contenu$sz + "--");

			result = result + tab_sz[i] + contenu$sz;
			chaine$sz = sousChaine;
			pos$sz = chaine$sz.indexOf(tab_sz[i]);
		} //while
	} //for	
	result = result + "[VERIFIER LES INDICATEURS DANS LE GM]";
	return result;
}

//OPERATIONS RELATIVES AUX ZONES ET SOUS ZONES DE LA NOTICE

/**
Ajout de zone
**/
function __ajouter_transfoPeriod(zone) {
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(zone + "\n");
}

/**
Supprime une zone donnée (également si elle repétée) et reboucle sur la notice pour s'assurer de la bonne suppression de la zone
**/
function __supprimer_transfoPeriod(zone) {
	//Placement du buffer en début de notice
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	//Tant que le resultat n'est pas vide, c'est qu'il existe encore dans la notice la zone xxx passée en paramètre
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	}
}

/**
Supprime une zone et la remplace par une autre zone
param: numeroDeZone=juste le numero de la zone a mettre, 
param: nouvelleLigneAInserer=numero de la zone + ses sous zones et le contenu des sous zones
param: booleenDeRecuperationDuContenuDorigineDeLaLigne= si true, on conserve la contenu d'origine de la ligne sans la sous zone
**/
function __chercherZoneEtSupprimerLigneAssocieePuisInsererLigne_transfoPeriod(numeroDeZone, nouvelleLigneAInserer) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	while (res != "") {
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(nouvelleLigneAInserer + "\n");
}

/**
Récupère le contenu d'une ligne avec la zone indiquée en paramètre, ligne complète sans la zone en début de ligne
*/
function __recuperationContenuDeLigneZoneNonInclusePourLaZone_transfoPeriod(numeroDeZone) {
	application.activeWindow.title.startOfBuffer(false);
	var contenu = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	if (contenu != "") {
		return contenu.substring(3, contenu.length);
	} else {
		return contenu;
	}
}

/**
Récupère le contenu d'une ligne avec la zone indiquée en paramètre, ligne complète zone incluse de debut de ligne
*/
function __recuperationContenuDeLigneZoneInclusePourLaZone_transfoPeriod(numeroDeZone) {
	application.activeWindow.title.startOfBuffer(false);
	var contenu = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	return contenu;
}

/**
Remplace valeurs de la zone 700
*/
function __remplacerValeurZone700_transfoPeriod(tag) {	
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

/**
Remplace l'ensemble du texte suivant une zone par un nouveau texte
param: zone=la zone ciblée
param: ancientexte=la sous zone + le contenu de la sous zone à remplacer
param: nouveautext=la sous zone + le contenu de la sous zone qui remplacera

cette fonction doit s'appeler remplacement de souszone
*/
function __remplacementSousZone_transfoPeriod(zone, ancientexte, nouveautexte) {
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

/**
Contrôle la présence d'un contenu dans une sous zone d'une zone
Param : zone, souszone, contenudelasouszone
Return : 1 si le contenu de la sous zone indiqué est présent, 0 si il ne l'est pas
**/
function __controlecontenusouszone_transfoPeriod(zone, souszone, contenudelasouszone) {
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(zone, 0, true, true, false);
	if (res.search("\\" + souszone + contenudelasouszone) != -1) {
		return 1;
	}
	return 0;
}