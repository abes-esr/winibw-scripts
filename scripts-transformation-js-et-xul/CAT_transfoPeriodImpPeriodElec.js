var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
        .getService(Components.interfaces.IApplication);
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

/**SCRIPT
Transformation d'un periodique imprime en periodique electronique
*/
function transfoPeriodImpPeriodElec()
{
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;
	var ppn = recupererPpn();
	picaCopyRecord();
	modifierNotice(ppn);
	application.activeWindow.codedData = bCodedData;
}

/**
Fonction liee a l'ouverture des boîtes de dialogue (gerees par les fichiers xul)
*/
function onLoad()
{
	return true;
}

/**
Fonction d'annulation liee au bouton annuler des boites de dialogue
The Cancel button is pressed..
alert("Vous avez clique sur Annuler, Rien ne sera modifie.");
*/
function onCancel()
{
	return true;
}

/**
Fonction permettant de dupliquer une notice existante en conservant l'ensemble des donnees d'origine
*/
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

	// cree une notice vide (cre)
	application.activeWindow.command("\\inv 1", false);

	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}

/**
Modification de la notice
Param: ancienppn=ppn a modifier
*/
function modifierNotice(ancienPpn)
{
	application.activeWindow.title.startOfBuffer (false);
	supprimer("000");
	supprimer("00A");
	supprimer("002");
	supprimer("003");
	if(controlecontenusouszone("008","$a","Ab")){
		remplacementSousZone("008","$aAb","$aOb");
	}
	supprimer("010");
	supprimer("011");
	supprimer("035");
	chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("100","100 0#$a199X$d199X-...",false);
	supprimer("106");
	chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("135","135 $ad$br",false);
	chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("181","181 ##$P01$ctxt",false);
	chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("182","182 ##$P01$cc",false);
	chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("183","183 ##$P01$aceb",false);
	remplacementSousZone("200","$bTexte imprim\u00e9","");
	supprimer("207");
	supprimerRemplacer210Par214("");
	ajouter("214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication");
	supprimer("215");
	supprimer("225");
	supprimer("230");

	//Suppression des zones 3XX sauf 304
	supprimer("300");
	supprimer("301");
	supprimer("302");
	supprimer("303");
	supprimer("305");
	supprimer("306");
	supprimer("307");
	supprimer("308");
	supprimer("309");
	for (var i = 10; i < 100; i++){supprimer("3" + i);}
	ajouter("371 .#$a");

	//Suppression des zones 4XX
	for (var i = 0; i < 10; i++){supprimer("40" + i);}
	for (var i = 10; i < 100; i++){supprimer("4" + i);}
	ajouter("452 $0" + ancienPpn);
	supprimer("530");
	supprimer("531");
	remplacementSousZone("606","$302724640X","");
	ajouter("608 ##$302724640X$2rameau");
	remplacerValeurZone700("7");
	if(controlecontenusouszone("702","$4","651")){chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("702","701"+recuperationContenuDeLigneZoneNonInclusePourLaZone("702"));}
	if(controlecontenusouszone("712","$4","651")){chercherZoneEtSupprimerLigneAssocieePuisInsererLigne("712","711"+recuperationContenuDeLigneZoneNonInclusePourLaZone("712"));}
	supprimer("801");
	supprimer("802");
	supprimer("830");
	ajouter("856 4#$uAdresse URL (si l'acc\u00e8s est r\u00e9serv\u00e9, cr\u00e9er une E856)");
}

//FONCTIONS SPECIFIQUES A CE SCRIPT

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

//chaine = "210 ##$aAAAA$cfffff$cEEEEE$dTOTO$fddddachanger$zTexte imprime$fqqqqq";


for (i=0; i<tab_sz.length; i++) {
	chaine$sz = chaine ;
	pos$sz = chaine$sz.indexOf(tab_sz[i]);
 	while (pos$sz != -1)
 	{
 		// si $sz est present
 		pos$sz += 2;// decallage de 2 pour ne pas inclure "$sz"
 		sousChaine = chaine$sz.substring(pos$sz, chaine$sz.length);
 		// recherche du prochain dollar
 		pos$suivant = sousChaine.indexOf("$");
 		if (pos$suivant == -1)
 		{
 			// cas où il n'y a pas de dollar apres $d (fin de chaîne)
 			pos$suivant = chaine$sz.length - pos$sz;
 		}
 		// recup. du texte entre $d et le dollar suivant
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

//OPERATIONS RELATIVES AUX ZONES ET SOUS ZONES DE LA NOTICE

/**
Ajout de zone
**/
function ajouter(zone)
{
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (zone + "\n");
}

/**
Supprime une zone donnee (egalement si elle repetee) et reboucle sur la notice pour s'assurer de la bonne suppression de la zone
**/
function supprimer(zone)
{
	//Placement du buffer en debut de notice
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	//Tant que le resultat n'est pas vide, c'est qu'il existe encore dans la notice la zone xxx passee en parametre
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	}
}

/**
Supprime une zone et la remplace par une autre zone
param: numeroDeZone=juste le numero de la zone a mettre,
param: nouvelleLigneAInserer=numero de la zone + ses sous zones et le contenu des sous zones
param: booleenDeRecuperationDuContenuDorigineDeLaLigne= si true, on conserve la contenu d'origine de la ligne sans la sous zone
**/
function chercherZoneEtSupprimerLigneAssocieePuisInsererLigne(numeroDeZone, nouvelleLigneAInserer)
{
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag (numeroDeZone, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (numeroDeZone, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText(nouvelleLigneAInserer + "\n");
}

/**
Recupere le contenu d'une ligne avec la zone indiquee en parametre, ligne complete sans la zone en debut de ligne
*/
function recuperationContenuDeLigneZoneNonInclusePourLaZone(numeroDeZone){
	application.activeWindow.title.startOfBuffer(false);
	var contenu = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	if(contenu != ""){
		return contenu.substring(3,contenu.length);
	}else{
		return contenu;
	}
}

/**
Recupere le contenu d'une ligne avec la zone indiquee en parametre, ligne complete zone incluse de debut de ligne
*/
function recuperationContenuDeLigneZoneInclusePourLaZone(numeroDeZone){
	application.activeWindow.title.startOfBuffer(false);
	var contenu = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	return contenu;
}

/**
Remplace valeurs de la zone 700
*/
function remplacerValeurZone700(tag) {
	var res="x";
	application.activeWindow.title.startOfBuffer (false);
	var i=0;
	while (res != "") {
		res = application.activeWindow.title.findTag(tag, i, true, true, false);
		//on recupere le contenu de la zone sans le libelle de la $4 :
		//l'index de fin est situe a la position de la $4 + 2 caracteres de la sous zone + 3 caracteres du code de fonction
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
Remplace l'ensemble du texte suivant une zone par un nouveau texte
param: zone=la zone ciblee
param: ancientexte=la sous zone + le contenu de la sous zone a remplacer
param: nouveautext=la sous zone + le contenu de la sous zone qui remplacera

cette fonction doit s'appeler remplacement de souszone
*/
function remplacementSousZone(zone,ancientexte,nouveautexte)
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

/**
Contrôle la presence d'un contenu dans une sous zone d'une zone
Param : zone, souszone, contenudelasouszone
Return : 1 si le contenu de la sous zone indique est present, 0 si il ne l'est pas
**/
function controlecontenusouszone(zone, souszone, contenudelasouszone) {
	application.activeWindow.title.startOfBuffer (false);
 	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
		if (res.search("\\"+souszone+contenudelasouszone)!= -1) {
			return 1;
		}
 	return 0;
}

/**
Fonction permettant de retourner le ppn en cours
*/
function recupererPpn()
{
	application.activeWindow.command("mod", false);
	ppn = application.activeWindow.getVariable("P3GPP"); // recupere le ppn
	application.activeWindow.simulateIBWKey("FE");
	return ppn;

}
