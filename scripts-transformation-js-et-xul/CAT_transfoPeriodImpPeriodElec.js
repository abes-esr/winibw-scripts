// 2014-10-09 : mte : adaptation pour 181/182, enlève $b du 200
// charge l'objet d'accès à winIbw
// 2014-12-01 : mte : correction fonction recupererPpn : on utilise la variable p3, pas la zone
// 2015-12-02 : SRY : Suppression de la zone 301
// 2018-01-04 : SRY : remplacer zone 183
// 2020-01-01 par SRY : remplacer 210 par 214, suppression $302724640X en  606, ajout 608, suppression zone 215
//

var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
        .getService(Components.interfaces.IApplication);
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
		  
function onLoad()
{
	// à l'ouverture de la boîte de dialogue
	
	return true;
}		  
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez cliqué sur Annuler, Rien ne sera modifié.");
	return true;
}	  

function picaCopyRecord() {
	var bCodedData = application.activeWindow.codedData;
	
	application.activeWindow.codedData = false;
	application.activeWindow.noviceMode = false;
	
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
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}

// remplace la fonction modifier200()
function modifierRemplacer(zone,ancientexte,nouveautexte)
{
	var tabres = new Array;
	var i =0;
	var res = "" ; 
	
	do
	{
		application.activeWindow.title.startOfBuffer (false);	
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
		if (res != "")
        {
			if (zone == ancientexte) {
				tabres[i] = nouveautexte + res.substring(3) + "\n"; 
			}
			else {	
				tabres[i] = res.replace(ancientexte,nouveautexte) + "\n"; 
			}	
			application.activeWindow.title.deleteLine(1);
			i++;
		}	
	}	while (res != "")
		
	for (i=0;i<tabres.length;i++)
    {
        application.activeWindow.title.endOfBuffer (false);
        application.activeWindow.title.insertText (tabres[i]);
    }	
}
// supprimerRemplacer210Par214 : passer en paramètre la zone 210##actuelle, la zone 214##modifiée à partir de la zone 210 est renvoyée
function supprimerRemplacer210Par214(zone)
 {
 	application.activeWindow.title.startOfBuffer (false);
 	var res = application.activeWindow.title.findTag ("210", 0, true, true, false);
 	while (res != "")
 	{
 		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer (false);
 		application.activeWindow.title.insertText (renvoieNouvelle214(res) + "\n");
 		res = application.activeWindow.title.findTag ("210", 0, true, true, false);
 	}
}
function renvoieNouvelle214(chaine)
{
	
var tab_sz = new Array("$6","$7","$a","$b","$c","$d");
var i=0;
var pos$sz=0;
var indicateur = "";
var result = "";
var chaine$sz = "";

chaine=chaine.substr(4,chaine.length);
indicateur = chaine.substring(0, 2);
result = "214"+ " " + indicateur;
	
//chaine = "210 ##$aAAAA$cfffff$cEEEEE$dTOTO$fddddachanger$zTexte imprimé$fqqqqq";


for (i=0; i<tab_sz.length; i++) {
	chaine$sz = chaine ;
	pos$sz = chaine$sz.indexOf(tab_sz[i]);
 	while (pos$sz != -1)
 	{
 		// si $sz est présent
 		pos$sz += 2;// décallage de 2 pour ne pas inclure "$sz"
 		sousChaine = chaine$sz.substring(pos$sz, chaine$sz.length);
 		// recherche du prochain dollar
 		pos$suivant = sousChaine.indexOf("$");
 		if (pos$suivant == -1)
 		{
 			// cas où il n'y a pas de dollar après $d (fin de chaîne)
 			pos$suivant = chaine$sz.length - pos$sz;
 		}
 		// récup. du texte entre $d et le dollar suivant
 		contenu$sz = chaine$sz.substring(pos$sz, pos$sz + pos$suivant);
		// prompts.alert(null,"contenu$sz4--",contenu$sz + "--");
 		
 		result = result + tab_sz[i] + contenu$sz;
		chaine$sz = sousChaine ;
		pos$sz = chaine$sz.indexOf(tab_sz[i]);
  	} //while
} //for	
 	result = result + "[VERIFIER LES INDICATEURS DANS LE GM]";
 	return result;
 }

/**
Supprime une zone et la remplace par une autre zone
param: ancienneZone=juste le numero de la zone a mettre, nouvelleZone=numero de la zone + ses sous zones et le contenu des sous zones)
**/
function supprimerRemplacer(ancienneZone, nouvelleZone)
{	
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (ancienneZone, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (ancienneZone, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (nouvelleZone + "\n");
}

/**
Supprime une zone donnée (également si elle repétée) et reboucle sur la notice pour s'assurer de la bonne suppression de la zone
**/
function supprimer(zone)
{	
	//Placement du buffer en début de notice
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	//Tant que le resultat n'est pas vide, c'est qu'il existe encore dans la notice la zone xxx passée en paramètre
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	}
}

/**
Ajout de zone
**/
function ajouter(zone)
{
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (zone + "\n");
}

function remplacerValeurZone700(tag) {	
	var res="x";
	application.activeWindow.title.startOfBuffer (false);
	var i=0;
	while (res != "") {
		res = application.activeWindow.title.findTag(tag, i, true, true, false);
		//on récupère le contenu de la zone sans le libellé de la $4 : 
		//l'index de fin est situé à la position de la $4 + 2 caractères de la sous zone + 3 caractères du code de fonction
		var sousZones = res.split("$4");
		var zone = res.substring(0, res.indexOf("$4"));
		//pour chaque $4
		for (var j=1;j<sousZones.length;j++) {
			zone += "$4" + sousZones[j].substring(0, 3);
		}
		zone += "\n";
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.insertText(zone);
		i++;
	}
}

/**
Contrôle la présence d'un contenu dans une sous zone d'une zone
Param : zone, souszone, contenudelasouszone
Return : 1 si le contenu de la sous zone indiqué est présent, 0 si il ne l'est pas
**/
function controlecontenusouszone(zone, souszone, contenudelasouszone) {
	application.activeWindow.title.startOfBuffer (false);
	//Contrôle de la présence de la zone XXX
 	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
		//Contrôle de la présence de la sous-zone $x avec en contenu xxxxx
		if (res.search("\\"+souszone+contenudelasouszone)!= -1) { //"\\$4651"
			return 1;
		}
 	return 0;
}

//20180104 : remplacer zone 183
//20200101 : remplacer 210 par 214, modifier 606, ajouter 608
function modifierNotice(ancienPpn)
{
	application.activeWindow.title.startOfBuffer (false);
	
	supprimer("000");
	supprimer("00A");
	supprimer("002");
	supprimer("003");
	supprimerRemplacer("008", "008 $aObx3");
	supprimer("010");
	supprimer("011");
	supprimer("035");
	supprimerRemplacer("100", "100 0#$a199X$d199X-...");
	supprimer("106");
	supprimerRemplacer("135", "135 $ad$br");
	supprimerRemplacer("181","181 ##$P01$ctxt");
	supprimerRemplacer("182","182 ##$P01$cc");
	supprimerRemplacer("183","183 ##$P01$aceb");
	modifierRemplacer("200","$bTexte imprimé","");
	supprimer("207");
	supprimerRemplacer210Par214("");
	//supprimer("210");
	ajouter("214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication");
	supprimer("215");
	supprimer("225");
	supprimer("230");
	//supprimerRemplacer("230", "230 $aDonnées textuelles");
	supprimer("301");
	ajouter("303 $anombre de pages générées par l'impression du document, lorsque ce document est paginé");
	ajouter("304");
	supprimerRemplacer("304", "304 $aTitre provenant de l'écran-titre");
	//  supprimer les 4XX
	for (var i = 0; i < 10; i++)
	{
		supprimer("40" + i);
	}
	for (var i = 10; i < 100; i++)
	{
		supprimer("4" + i);
	}
	// supprimer les 3XX
	for (var i = 0; i < 10; i++)
	{
		if (i != 1 && i != 4)// conserver les nouvelles 301 et 304 créées plus haut...
		{
			supprimer("30" + i);
		}
	}
	for (var i = 10; i < 100; i++)
	{
		supprimer("3" + i);
	}
	supprimer("337");
	//ajouter("337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)");
	ajouter("371 .#$a");
	ajouter("452 $0" + ancienPpn);
	modifierRemplacer("606","$302724640X","");
	ajouter("608 ##$302724640X$2rameau");
	supprimer("530");
	supprimer("531");
	remplacerValeurZone700("7");
	var presencecontenu702 = controlecontenusouszone("702","$4","651");
	if(presencecontenu702 == 1){
		supprimerRemplacer("702","701 $4651");
	}
	var presencecontenu712 = controlecontenusouszone("712","$4","651");
	if(presencecontenu712 == 1){
		supprimerRemplacer("712","711 $4651");
	}
	supprimer("801");
	supprimer("802");
	supprimer("830");
	ajouter("856 4#$uAdresse URL (si l'accès est réservé, créer une E856)");
}
function recupererPpn()
{
	application.activeWindow.command("mod", false);
	//var zone001 = application.activeWindow.title.findTag ("001", 0, true, true, false);
	//var ppn = zone001.substring(4, zone001.length);
	ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
	application.activeWindow.simulateIBWKey("FE");
	return ppn;
	
}

function transfoPeriodImpPeriodElec()
{
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;
	
	var ppn = recupererPpn();
	picaCopyRecord();
	modifierNotice(ppn);
	
	application.activeWindow.codedData = bCodedData;
}