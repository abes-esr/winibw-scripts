/**
Variables globales au fichier
*/
var Autorite = false;
var Res = "";
var ancienPpn = "";

/**SCRIPT
point de depart du script
Script de transformation d'une monographie imprimée en monographie electronique
*/
function CAT_TransfoImpElec() {
	var input = {value: "1"};
	var check= {value: false};
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
	var flags = prompts.BUTTON_POS_0 * prompts.BUTTON_TITLE_IS_STRING  +  prompts.BUTTON_POS_1 * prompts.BUTTON_TITLE_CANCEL + prompts.BUTTON_POS_2 * prompts.BUTTON_TITLE_IS_STRING;
	// La variable flags va créer. La première sera "Save", la seconde sera aButtonTitle1, et la troisième sera "Cancel"

	var button = prompts.confirmEx(null, "Transformer une notice d'imprimé en notice de document électronique", "Que voulez-vous faire ?",
                               flags, "Reproduction patrimoniale", "", "Transformer en ebook", null, check);
	if (button == 0) transfoMonoImpMonoElecPatrim();
	if (button == 2) transfoMonoImpMonoElecEBook();
}

/**SCRIPT
point de depart du script
Script de transformation d'une monographie electronique en monographie ebook
*/
function transfoMonoElecEBookMonoImp(){
    var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

	var bCodedData = application.activeWindow.codedData;
    application.activeWindow.codedData = false;

    var ppn = recupererPpnEnCours();
    xpicaCopyRecord();
    modifierNoticeElecEBook(ppn);

    application.activeWindow.codedData = bCodedData;
}

//FONCTIONS LANCEES PAR LES SCRIPTS

/**
Modification notice electronique
*/
function modifierNoticeElecEBook(ancienPpn){
	application.activeWindow.title.startOfBuffer (false);
    supprimerToutesLesZonesNumero("000");
    supprimerToutesLesZonesNumero("00A");
    supprimerToutesLesZonesNumero("002");
    supprimerToutesLesZonesNumero("003");
    suppressionDeLignePuisInsertionDeLigne("008", "008 $aAax3");
    supprimerToutesLesZonesNumero("010");
	supprimerToutesLesZonesNumero("020");
	supprimerToutesLesZonesNumero("021");
	supprimerToutesLesZonesNumero("033");
	supprimerToutesLesZonesNumero("034");
    supprimerToutesLesZonesNumero("035");
	supprimerToutesLesZonesNumero("073");
    suppressionDeLignePuisInsertionDeLigne("100","100 0#$a[Ann\u00e9e de l'\u00e9diton imprim\u00e9e]$e[Ann\u00e9e de publication de l'original]$f[Ann\u00e9e Copyright]");
	suppressionDeLignePuisInsertionDeLigne("102","102 ##$a[A compl\u00e9ter]");
	suppressionDeLignePuisInsertionDeLigne("106","106 ##$ar");
	supprimerToutesLesZonesNumero("135");
	suppressionDeLignePuisInsertionDeLigne("181","181 ##$P01$ctxt");
	suppressionDeLignePuisInsertionDeLigne("182","182 ##$P01$cn");
	suppressionDeLignePuisInsertionDeLigne("183","183 ##$P01$anga");
	supprimerToutesLesZonesNumero("205");
	modifierLeContenuDeLaZone("200","$bRessource \u00e9lectronique","");
	suppressionDeLignePuisInsertionDeLigne("210","210 ##[A TRANSFORMER EN 214]$a$c$d");
	ajouterLigne("215 ##$a[Type de pr\u00e9sentation mat\u00e9rielle et importance mat\u00e9rielle]$c[Autres caract\u00e9ristiques mat\u00e9rielles]$d[Dimensions]$eMat\u00e9riel d'accompagnement");
    suppressionDeLignePuisInsertionDeLigne("225","225 2#$a[Titre de la collection]");
    supprimerToutesLesZonesNumero("230");
    supprimerToutesLesZonesNumero("303");
    supprimerToutesLesZonesNumero("304");
	supprimerToutesLesZonesNumero("305");
    supprimerToutesLesZonesNumero("307");
	supprimerToutesLesZonesNumero("310");
    supprimerToutesLesZonesNumero("336");
    supprimerToutesLesZonesNumero("337");
    supprimerToutesLesZonesNumero("339");
	suppressionDeLignePuisInsertionDeLigne("410","410 ##$t@[Titre]");
	ajouterLigne("452 ##$0" + ancienPpn);
	modifierRemplacer("452","$bTexte imprim\u00e9","");
	supprimerToutesLesZonesNumero("579");
	remplacerValeurZone700("7");
	if(controlePresenceSousZone("702","\\$4340") || controlePresenceSousZone("702","\\$z1a2b")){
		remplacementZoneParAutreZoneEnConservantContenuDeLaLigne("702","701");
	}
	if(controlePresenceSousZone("702","\\$4340") || controlePresenceSousZone("702","\\$4340")){
		remplacementZoneParAutreZoneEnConservantContenuDeLaLigne("712","711");
	}
	supprimerToutesLesZonesNumero("801");
    supprimerToutesLesZonesNumero("802");
    supprimerToutesLesZonesNumero("856");
    supprimerToutesLesZonesNumero("859");
	ajouterLigne("une fois la notice valid\u00e9e, modifier le ppn " + ancienPpn + " et ajouter la zone 452 ##$0 + le nouveau ppn g\u00e9n\u00e9r\u00e9");
}

/**
Fonction de transformation de monographie imprimée en monographie électronique (patrimoniale)
*/
function transfoMonoImpMonoElecPatrim(){
    var bCodedData = application.activeWindow.codedData;
    application.activeWindow.codedData = false;

    var ppn = recupererPpnEnCours();
    xpicaCopyRecord();
    modifierNoticePatrim(ppn);

    application.activeWindow.codedData = bCodedData;
}

/**
Fonction de transformation de monographie imprimée en monographie électronique (ebook)
*/
function transfoMonoImpMonoElecEBook(){
	  var bCodedData = application.activeWindow.codedData;
    application.activeWindow.codedData = false;

    var ppn = recupererPpnEnCours();
    xpicaCopyRecord();
    modifierNoticeEBook(ppn);

    application.activeWindow.codedData = bCodedData;
}

/**
xpicaCopyRecord : rôle de la fonction à approfondir
*/
function xpicaCopyRecord(){
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
	if (Autorite) application.activeWindow.command("\\inv 2", false);
	if (Autorite == false) application.activeWindow.command("\\inv 1", false);
	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}

/**
Fonction de modification de notice patrimoniale
*/
function modifierNoticePatrim(ancienPpn){
    application.activeWindow.title.startOfBuffer(false);
    supprimerToutesLesZonesNumero("000");
    supprimerToutesLesZonesNumero("00A");
    supprimerToutesLesZonesNumero("002");
    supprimerToutesLesZonesNumero("003");
    suppressionDeLignePuisInsertionDeLigne("008", "008 $aOax3");
    supprimerToutesLesZonesNumero("010");
	ajouterLigne("010 ##$AISBN électronique");
	ajouterLigne("017 70$aDOI$2DOI");
	supprimerToutesLesZonesNumero("020");
	supprimerToutesLesZonesNumero("021");
	supprimerToutesLesZonesNumero("033");
	supprimerToutesLesZonesNumero("034");
    supprimerToutesLesZonesNumero("035");
	supprimerToutesLesZonesNumero("073");
    suppressionDeLignePuisInsertionDeLigne("100","100 0#$a[Année de mise en ligne]");
	suppressionDeLignePuisInsertionDeLigne("102","102 ##$a[A compléter]");
    supprimerToutesLesZonesNumero("106");
    ajouterLigne("135 ##$av$br$cm$e#$gm$ia$ja");
	supprimerToutesLesZonesNumero("181");
	supprimerToutesLesZonesNumero("182");
	supprimerToutesLesZonesNumero("183");
	ajouterLigne("181 ##$P01$ctxt");
	ajouterLigne("182 ##$P01$cc");
	ajouterLigne("183 ##$P01$aceb");
    modifierLeContenuDeLaZone("200","$bTexte imprimé","");
    supprimerToutesLesZonesNumero("215");
	supprimerToutesLesZonesNumero("225");
	application.activeWindow.title.startOfBuffer(false);
	if(controlePresenceZone("210")){
        suppressionDeLignePuisInsertionDeLigne("210","214 #0$a $c");
	}else{
		ajouterLigne("214 #0$a $c $d");
		suppressionDeLignePuisInsertionDeLigne("214","214 #X$a[A compléter par la mention d'édition ou de diffusion]$c$d");
	}
	ajouterLigne("305 ##$aNote sur l'édition et l'histoire bibliographique");
	ajouterLigne("324 ##$aReproduction numérique de l'édition de LIEU : EDITEUR, DATE");
	ajouterLigne("337 ##$aNécessite un logiciel capable de lire un fichier au(x) format(s)..., ... ou ...");
	ajouterLigne("339 ##$aFormat de la ressource$ddate de publication");
	ajouterLigne("371 .#$a");
	supprimerToutesLesZonesNumero("410");
    ajouterLigne("455 ##$0" + ancienPpn);
	supprimerToutesLesZonesNumero("579");
	remplacerValeurZone700("7");
	if(controlePresenceSousZone("702","\\$4340") || controlePresenceSousZone("702","\\$z1a2b")){
		remplacementZoneParAutreZoneEnConservantContenuDeLaLigne("702","701");
	}
	if(controlePresenceSousZone("712","\\$4340") || controlePresenceSousZone("712","\\$4651")){
		remplacementZoneParAutreZoneEnConservantContenuDeLaLigne("712","711");
	}
	supprimerToutesLesZonesNumero("801");
    supprimerToutesLesZonesNumero("802");
    supprimerToutesLesZonesNumero("830");
	suppressionDeLignePuisInsertionDeLigne("856","856 $q$u");
}

/**
Fonction de modification de notice ebook
*/
function modifierNoticeEBook(ancienPpn){
	application.activeWindow.title.startOfBuffer (false);
    supprimerToutesLesZonesNumero("000");
    supprimerToutesLesZonesNumero("00A");
    supprimerToutesLesZonesNumero("002");
    supprimerToutesLesZonesNumero("003");
    suppressionDeLignePuisInsertionDeLigne("008", "008 $aOax3");
    supprimerToutesLesZonesNumero("010");
	ajouterLigne("010 ##$AISBN électronique");
	ajouterLigne("017 70$aDOI$2DOI");
	supprimerToutesLesZonesNumero("020");
	supprimerToutesLesZonesNumero("021");
	supprimerToutesLesZonesNumero("033");
	supprimerToutesLesZonesNumero("034");
    supprimerToutesLesZonesNumero("035");
	supprimerToutesLesZonesNumero("073");
    suppressionDeLignePuisInsertionDeLigne("100","100 0#$a[Année de mise en ligne]");
	suppressionDeLignePuisInsertionDeLigne("102","102 ##$a[A compléter]");
    supprimerToutesLesZonesNumero("106");
	supprimerToutesLesZonesNumero("205");
    ajouterLigne("135 ##$av$br$cm$e#$gm$ia$ja");
	modifierLeContenuDeLaZone("200","$bTexte imprimé","");
    supprimerToutesLesZonesNumero("210");
	supprimerToutesLesZonesNumero("215");
	supprimerToutesLesZonesNumero("225");
	ajouterLigneSiZoneInexistante("181", "181 ##$P01$ctxt");
	suppressionDeLignePuisInsertionDeLigne("182","182 ##$P01$cc");
	suppressionDeLignePuisInsertionDeLigne("183","183 ##$P01$aceb");
	suppressionDeLignePuisInsertionDeLigne("214","214 #0$a $c");
	ajouterLigne("214 #2$a $c $d");
	ajouterLigne("337 ##$aNécessite un logiciel capable de lire un fichier au(x) format(s)..., ... ou ...");
	ajouterLigne("339 ##$aFormat de la ressource$ddate de publication");
	ajouterLigne("371 .#$a");
	supprimerToutesLesZonesNumero("410");
    ajouterLigne("452 ##$0" + ancienPpn);
	supprimerToutesLesZonesNumero("579");
	remplacerValeurZone700("7");
	if(controlePresenceSousZone("702","\\$4340") || controlePresenceSousZone("702","\\$4651") || controlePresenceSousZone("702","\\$z1a2b")){
		remplacementZoneParAutreZoneEnConservantContenuDeLaLigne("702","701");
	}
	if(controlePresenceSousZone("712","\\$4340") || controlePresenceSousZone("712","\\$4651") || controlePresenceSousZone("712","\\$z1a2b")){
		remplacementZoneParAutreZoneEnConservantContenuDeLaLigne("712","711");
	}
	supprimerToutesLesZonesNumero("801");
    supprimerToutesLesZonesNumero("802");
    supprimerToutesLesZonesNumero("830");
    ajouterLigne("856 4#$qFormat$uURL");
}

//FONCTIONS INTERNES

/**
Fonction liée à l'ouverture de la boite de dialogue
*/
function onLoad(){
    return true;
}

/**
Fonction d'annulation
alert("Vous avez cliqué sur Annuler, Rien ne sera modifié.");
*/
function onCancel(){
    return true;
}

//OPERATIONS RELATIVES AUX ZONES ET SOUS ZONES DE LA NOTICE

/**
Fonction de récupération du PPN
*/
function recupererPpnEnCours(){
    application.activeWindow.command("mod", false);
	ppn = application.activeWindow.getVariable("P3GPP");
    application.activeWindow.simulateIBWKey("FE");
    return ppn;
}

/**
Fonction ajoutant une ligne complète
*/
function ajouterLigne(ligneAAjouterIncluantLeNumeroDeZone){
    application.activeWindow.title.endOfBuffer(false);
    application.activeWindow.title.insertText(ligneAAjouterIncluantLeNumeroDeZone + "\n");
}

/**
Ajoute une ligne si la zone n'existe pas déjà dans la notice initiale
Si la zone existe, la fonction ne fait rien
param: numeroDeZone=numero de la zone entre guillemets "" à chercher
param: ligneAAjouter=ligne à ajouter contenant le numero de zone
*/
function ajouterLigneSiZoneInexistante(numeroDeZone,ligneAAjouter){
	application.activeWindow.title.startOfBuffer(false);
	var res = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);

	if (res != ""){} //Si on trouve une ligne commençant par le numero de zone mis en paramètre, c'est qu'il existe une zone, donc le résultat n'est pas vide On laisse la zone telle qu'elle
	else{
		//sinon on ajoute la ligne
		ajouterLigne(ligneAAjouter);
	}
}

/**
Modifier le contenu d'une zone
Modifie la zone en la supprimant puis en la réinsérant autrement,
en remplaçant un contenu par un autre (ce contenu peut être une sous zone ou plusieurs sous zones)
param: numeroDeZone=numero de la zone entre guillemets "" dont il faut modifier un contenu
param: chaineDeContenuARemplacer=la chaine de contenu à remplacer
param: chaineDeContenuQuiRemplacera=la chaine de contenu qui remplacera (peut être vide pour supprimer du contenu)
*/
function modifierLeContenuDeLaZone(numeroDeZone,chaineDeContenuARemplacer,chaineDeContenuQuiRemplacera){
    application.activeWindow.title.startOfBuffer(false);
	//On stocke dans res l'ensemble de la ligne qui commence par numeroDeZone
	var res = application.activeWindow.title.findTag(numeroDeZone, 0, true, true, false);
	if (res != "")
	{
		//On supprime la ligne
        application.activeWindow.title.deleteLine(1);
        application.activeWindow.title.endOfBuffer (false);
		//On réinsère la ligne en remplaçant un contenu par un autre avec un replace sur l'ensemble de la ligne
		application.activeWindow.title.insertText (res.replace(chaineDeContenuARemplacer,chaineDeContenuQuiRemplacera) + "\n");
	}
}

/**
Fonction supprimant l'ensemble des lignes qui commence par la zone portant le numéro passé en paramètre
param: numeroDeLaZone=numero des zones à supprimer (ex: si il y a 3 zones 035 dans la notice d'origine les 3 zones seront supprimées)
*/
function supprimerToutesLesZonesNumero(numeroDeLaZone){
    application.activeWindow.title.startOfBuffer(false);
    var res = application.activeWindow.title.findTag (numeroDeLaZone, 0, true, true, false);
    while (res != "")
    {
        application.activeWindow.title.deleteLine(1);
        res = application.activeWindow.title.findTag (numeroDeLaZone, 0, true, true, false);
    }
}

/**
Fonction permettant de supprimer une ligne entière à partir du numéro de zone
param: numeroDeZoneDeLaLigneASupprimer=numero de la zone a supprimer, supprimera la ligne entiere
param: ligneAInserer=nouvelle ligne à insérer à la place
*/
function suppressionDeLignePuisInsertionDeLigne(numeroDeZoneDeLaLigneASupprimer,ligneAInsererALaPlace){
	application.activeWindow.title.startOfBuffer (false);
	//recherche à partir de la position 0 du début de ligne
	var res = application.activeWindow.title.findTag(numeroDeZoneDeLaLigneASupprimer, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (numeroDeZoneDeLaLigneASupprimer, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (ligneAInsererALaPlace + "\n");
}

/**
Fonction controlant la présence d'une zone
param:zone = la zone à controler
*/
function controlePresenceZone(zone){
	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	if(res != ""){
		return 1;
	}else{
		return 0;
	}
}

/**
Controle de la presence d'une sous-zone
param: zone=la zone à controler, entre guillemets
param: souszone=la sous zone qui doit être présente, entre guillements avec deux antislashs au debut des guillemets "\\"
*/
function controlePresenceSousZone(zone,souszone){
	var result = 0;
	var n = 0 ;
	var res = "" ;
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);

	for (n=0; n<30; n+=1)
	{
		application.activeWindow.title.startOfBuffer(false);
		res = application.activeWindow.title.findTag(zone, n, true, true, false);
		if (res != "" ) {

			if (res.search(souszone) != -1) {
				result = 1;
			}
		}
	}
return result;
}

/**
Fonction contrôlant la présence d'une chaine de caractère sur une ligne
*/
function controlePresenceContenuSurLigne(zone,contenuPresentDansLaLigneAVerifier){
	var result = 0;
	var n = 0;
	var res = "";
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
						.getService(Components.interfaces.nsIPromptService);

	for (n=0; n<30; n+=1)
	{
		application.activeWindow.title.startOfBuffer (false);
		res = application.activeWindow.title.findTag (zone, n, true, true, false);
		if (res != "" ) {
			if (res.contains(contenuPresentDansLaLigneAVerifier)) {
				result = 1;
			}
		}
	}
return result;
}

/**
Fonction permettant de remplacer une zone par une autre zone en conservant le contenu de la zone d'origine
*/
function remplacementZoneParAutreZoneEnConservantContenuDeLaLigne(ancienneZone,nouvelleZone){
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);

	application.activeWindow.title.startOfBuffer(false);
	res = application.activeWindow.title.findTag(ancienneZone, 0, true, true, false);
	if (res != "") {
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer(false);
		application.activeWindow.title.insertText(nouvelleZone + res.substring(3,res.length) + "\n");
	}
}

/**
Remplacement valeur zone 700
*/
function remplacerValeurZone700(tag){
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
