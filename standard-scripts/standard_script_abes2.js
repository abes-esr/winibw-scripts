//Ce script transforme une notice d'imprime, en reproduction soit patrimoniale, soit commerciale.
//Auteur MTE 2014-06-26
//corrrection MTE le 2014-09-04, ajout initialisation de la variable "autorite" a false
// explication des pb avec la variable "autorité" : elle a parfois une majuscule, parfois non !
// insertion de 181 et 182 : mte le 2014-10-03, ainsi que suppression du $b dans 200
// MTE supprime 205 (assistance 30420)
// 2014-12-01 : mte : correction fonction recupererPpn : on utilise la variable p3, pas la zone
// 2015-03-18 : ian : suppression 200 $b, les modifications faites par mte étaient restées en commentaire.
// 2016-01-22 : SRY : ajout script transfoMonoElecEBookMonoImp : transformer une notice de monographie électronique en notice de monographie imprimée
// 2016-01-28 : SRY : CAT_TransfoImpElec (Patrim et EBook) : 337 supprimer le $a qui doublonne, remplacer l'étiquette 324 par 305, supprimer la zone 336, ajouter une 339 
// 2016-02-12 : SRY : CAT_TransfoImpElec (Patrim et EBook) : modification 181 et 182 
// 2016-02-18 : SRY : CAT_TransfoImpElec (PAtrim) : ajout zone 324 et remplacement zone 305
// 2017-03-16 : SRY : modification RDA FR 2017 sur tous les scripts TRANSFO//
// 2017-06-01 : SRY : correction suite mise en place RDA FR 2017
// 2018-01-04 : SRY : transfoMonoImpMonoElecEBook : ajout zone 183 et  suppression zone 579
// 2020-01-01 par SRY : TransfoMonoElecEBookMonoImp : remplacer 219 par 214, si elle contient $4340, remplacer la zone 702 par une 701, modifier zone 210 et 452, ajouter paramètre vide à modifier181bis,modifier200bis, modifier200bisEBook,recupererPpnbis
//                      CAT_transfoImpElec : transformer zones 219 en 214, modifier zones 210  si elle contient $4340 (ou $651 pour la 712), remplacer zone 7X2 par une 7X1
// 

function CAT_TransfoImpElec() 
 {
 var input = {value: "1"};
 var check= {value: false};
 var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
var flags = prompts.BUTTON_POS_0 * prompts.BUTTON_TITLE_IS_STRING  +  
            prompts.BUTTON_POS_1 * prompts.BUTTON_TITLE_CANCEL +
			prompts.BUTTON_POS_2 * prompts.BUTTON_TITLE_IS_STRING;  
// This value of flags will create 3 buttons. The first will be "Save", the  
// second will be the value of aButtonTitle1, and the third will be "Cancel"  
  
var button = prompts.confirmEx(null, "Transformer une notice d'imprimé en notice de document électronique", "Que voulez-vous faire ?",  
                               flags, "Reproduction patrimoniale", "", "Transformer en ebook", null, check);  
 if (button == 0) transfoMonoImpMonoElecPatrim();
 if (button == 2) transfoMonoImpMonoElecEBook();
 }
 var Autorite = false;
 var Res = "";
 var ancienPpn = "";
 function onLoad()
{
    // Ã  l'ouverture de la boîte de dialogue
   
    return true;
}         
function onCancel()
{
    // The Cancel button is pressed..
    //alert("Vous avez cliquÃ© sur Annuler, Rien ne sera modifiÃ©.");
    return true;
}

// 20170601 : correction suite mise en place RDA FR 2017
function modifier181bis(tag)
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag ("181", 0, true, true, false);
	
	if (res != "")
	{
		//on laisse la 181 telle quelle
	} 
	else
	{
		ajouterbis("181 ##$P01$ctxt");
	}
}

function modifier200bis(tag)
{
    application.activeWindow.title.startOfBuffer(false);
   var res = application.activeWindow.title.findTag ("200", 0, true, true, false);
if (res != "")
{
        application.activeWindow.title.deleteLine(1);
        application.activeWindow.title.endOfBuffer (false);
application.activeWindow.title.insertText (res.replace("$bTexte imprimé","") + "\n");
}
}

// SRY le 25-01-2016
function modifier200bisEBook(tag)
{
    application.activeWindow.title.startOfBuffer(false);
   var res = application.activeWindow.title.findTag ("200", 0, true, true, false);
if (res != "")
{
        application.activeWindow.title.deleteLine(1);
        application.activeWindow.title.endOfBuffer (false);
application.activeWindow.title.insertText (res.replace("$bRessource électronique","") + "\n");
}
}

function supprimerbis(zone)
{   
    application.activeWindow.title.startOfBuffer(false);
    var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
    while (res != "")
    {
        application.activeWindow.title.deleteLine(1);
        res = application.activeWindow.title.findTag (zone, 0, true, true, false);
    }
}
function ajouterbis(zone)
{
    application.activeWindow.title.endOfBuffer(false);
    application.activeWindow.title.insertText (zone + "\n");
}

// 20170316 : modification RDA FR 2017
function modifierNoticePatrim(ancienPpn)
{
	var res = "";
	var presence702 = presencesouszone("702","\\$4340","\\$z1a2b");
	var presence712 = presencesouszone("712","\\$4340","\\$4651");
	
    application.activeWindow.title.startOfBuffer(false);
   
    supprimerbis("000");
    supprimerbis("00A");
    supprimerbis("002");
    supprimerbis("003");
    supprimerRemplacer("008", "008 $aOax3");
    supprimerbis("010");
	supprimerbis("020");
	supprimerbis("021");
	supprimerbis("033");
	supprimerbis("034");
    supprimerbis("035");
	supprimerbis("073");
    supprimerRemplacer("100","100 0#$a[Année de mise en ligne]$e[Année de publication de l'original]");
	supprimerRemplacer("102","102 ##$a[A compléter]");
    supprimerbis("106");
    ajouterbis("135 ##$av$br$cm$e#$gm$ia$ja");
	supprimerbis("181");
	supprimerbis("182");
	supprimerbis("183");
	ajouterbis("181 ##$P01$ctxt");
	ajouterbis("182 ##$P01$cc");
	ajouterbis("183 ##$P01$aceb");
    modifier200bis("");
//	ajouterbis("205 ##$a[Reproduction en fac-similé]");
    supprimerbis("215");
	supprimerbis("225");
     // traitement 210 : si 210, ajouter une 214
	application.activeWindow.title.startOfBuffer(false);
    res = application.activeWindow.title.findTag ("210", 0, true, true, false);
	if (res != "")
	{
        supprimerRemplacer("210","214 #X [VERIFIER LES INDICATEURS] $a $c $d");
	}
	else 
	{
		supprimerRemplacer("214","214 #X$a[A compléter par la mention d'édition ou de diffusion]$c$d");
	}
	ajouterbis("230 ##$aDonnées textuelles (1 fichier : X vues)");
    ajouterbis("307 ##$aLa pagination de l'édition imprimée correspondante est de : X pages");
	ajouterbis("303 ##$aNotice rédigée d'après la consultation, AAAA-MM-JJ");
    ajouterbis("304 ##$aTitre provenant de la page de titre du document numérisé");
	ajouterbis("305 ##$aNote sur l'édition et l'histoire bibliographique");
	ajouterbis("324 ##$aReproduction numérique de l'édition de LIEU : EDITEUR, DATE");
	ajouterbis("337 ##$aNécessite un logiciel capable de lire un fichier au(x) format(s)..., ... ou ...");
	ajouterbis("339 ##$aFormat de la ressource$ddate de publication");
	supprimerbis("410");	
    ajouterbis("455 ##$0" + ancienPpn);
	supprimerbis("579");
	// traitement zone 702 (si $4340, alors 702 devient 701)
	modifierRemplacerbis("702","702","701",presence702);
	modifierRemplacerbis("712","712","711",presence712);
	supprimerbis("801");
    supprimerbis("802");
    supprimerbis("830");
    ajouterbis("856 4#$qFormat$uURL$2Texte du lien$zAccès au texte intégral");
   
   
}
function recupererPpnbis(tag)
{
    application.activeWindow.command("mod", false);
    //var zone003 = application.activeWindow.title.findTag ("003", 0, true, true, false);
    //var ppn = zone003.substring(4, zone003.length);
    //var ppn = Application.ActiveWindow.Variable("P3GPP")
	ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
    application.activeWindow.simulateIBWKey("FE");
    return ppn;
   
}
function transfoMonoImpMonoElecPatrim()
{
    var bCodedData = application.activeWindow.codedData;
    application.activeWindow.codedData = false;
   
    var ppn = recupererPpnbis("");
    xpicaCopyRecord();
    modifierNoticePatrim(ppn);
   
    application.activeWindow.codedData = bCodedData;
}
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

// 20170316 : modification RDA FR 2017
// 20170601 : correction suite mise en place RDA FR 2017
// 20180104 : 
function modifierNoticeEBook(ancienPpn)
{
	var presence702 = presencesouszone("702","\\$4340","\\$z1a2b");
	var presence712 = presencesouszone("712","\\$4340","\\$4651");
	
    application.activeWindow.title.startOfBuffer (false);
   
    supprimerbis("000");
    supprimerbis("00A");
    supprimerbis("002");
    supprimerbis("003");
    supprimerRemplacer("008", "008 $aOax3");
    supprimerbis("010");
	supprimerbis("020");
	supprimerbis("021");
	supprimerbis("033");
	supprimerbis("034");
    supprimerbis("035");
	supprimerbis("073");
    supprimerRemplacer("100","100 0#$a[Année de mise en ligne]$e[Année de publication de l'original]");
	supprimerRemplacer("102","102 ##$a[A compléter]");
    supprimerbis("106");
	supprimerbis("205");
    ajouterbis("135 ##$av$br$cm$e#$gm$ia$ja");
	modifier200bis("");
    supprimerbis("210");
	supprimerbis("215");
	supprimerbis("225");
	modifier181bis("");
	supprimerRemplacer("182","182 ##$P01$cc");
	supprimerRemplacer("183","183 ##$P01$aceb");
	//on ajoute la $219 ou bien on la remplace si elle existe déjà
	supprimerRemplacer("214","214 #0$aLieu de publication$cNom de l'éditeur$dDate de publication");
    ajouterbis("230 ##$aDonnées textuelles (1 fichier : X vues)");
    ajouterbis("307 ##$aLa pagination de l'édition imprimée correspondante est de : X pages");
	ajouterbis("303 ##$aNotice rédigée d'après la consultation, AAAA-MM-JJ");
    ajouterbis("304 ##$aTitre provenant de la page de titre du document numérisé");
	ajouterbis("305 ##$aReproduction numérique de l'édition de LIEU : EDITEUR, DATE");
	ajouterbis("337 ##$aNécessite un logiciel capable de lire un fichier au(x) format(s)..., ... ou ...");
	ajouterbis("339 ##$aFormat de la ressource$ddate de publication");
	supprimerbis("410");
    ajouterbis("452 ##$0" + ancienPpn);
	supprimerbis("579");
	// traitement zone 702 (si $4340, alors 702 devient 701)
	modifierRemplacerbis("702","702","701",presence702);
	modifierRemplacerbis("712","712","711",presence712);
	supprimerbis("801");
    supprimerbis("802");
    supprimerbis("830");
    ajouterbis("856 4#$qFormat$uURL$2Texte du lien$zAccès au texte intégral");
   
   
}
 
 // SRY le 25-01-2015
 // 20170316 : modification RDA FR 2017
 // 20180104 : ajout zone 183 et suppression zone 579
function modifierNoticeElecEBook(ancienPpn)
{
	var res = "";
	var presence702 = presencesouszone("702","\\$4340","\\$z1a2b");
	var presence712 = presencesouszone("712","\\$4340","\\$4651");
	
    application.activeWindow.title.startOfBuffer (false);
   
    supprimerbis("000");
    supprimerbis("00A");
    supprimerbis("002");
    supprimerbis("003");
    supprimerRemplacer("008", "008 $aAax3");
    supprimerbis("010");
	supprimerbis("020");
	supprimerbis("021");
	supprimerbis("033");
	supprimerbis("034");
    supprimerbis("035");
	supprimerbis("073");
    supprimerRemplacer("100","100 0#$a[Année de l'éditon imprimée]$e[Année de publication de l'original]$f[Année Copyright]");
	supprimerRemplacer("102","102 ##$a[A compléter]");
	supprimerRemplacer("106","106 ##$ar");
	supprimerbis("135");
	supprimerRemplacer("181","181 ##$P01$ctxt");
	supprimerRemplacer("182","182 ##$P01$cn");
	supprimerRemplacer("183","183 ##$P01$anga");
	supprimerbis("205");
	modifier200bisEBook("");
	supprimerRemplacer("210","210 ##[A TRANSFORMER EN 214]$a$c$d");
	ajouterbis("215 ##$a[Type de présentation matérielle et importance matérielle]$c[Autres caractéristiques matérielles]$d[Dimensions]$eMatériel d'accompagnement");
	// modifierRemplacer("219","219","214");
    supprimerRemplacer("225","225 2#$a[Titre de la collection]");
    supprimerbis("230");
    supprimerbis("303");
    supprimerbis("304");
	supprimerbis("305");
    supprimerbis("307");
	supprimerbis("310");
    supprimerbis("336");
    supprimerbis("337");
    supprimerbis("339");
	supprimerRemplacer("410","410 ##$t@[Titre]");
	ajouterbis("452 ##$0" + ancienPpn);
	modifierRemplacer("452","$bTexte imprimé","");
	supprimerbis("579");
	// traitement zone 702 (si $4340, alors 702 devient 701)
	modifierRemplacerbis("702","702","701",presence702);
	supprimerbis("801");
    supprimerbis("802");
    supprimerbis("856");
    supprimerbis("859");
	ajouterbis("une fois la notice validée, modifier le ppn " + ancienPpn + " et ajouter la zone 452 ##$0 + le nouveau ppn généré");
   
}

function transfoMonoImpMonoElecEBook()
{
	  var bCodedData = application.activeWindow.codedData;
    application.activeWindow.codedData = false;
   
    var ppn = recupererPpnbis("");
    xpicaCopyRecord();
    modifierNoticeEBook(ppn);
   
    application.activeWindow.codedData = bCodedData;
}
 
 // SRY le 25-01-2015
 // SRY le 04-01-2018 : ajout zone 183 et  suppression zone 579
 function transfoMonoElecEBookMonoImp()
{
    var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
						
	var bCodedData = application.activeWindow.codedData;
    application.activeWindow.codedData = false;
   
    var ppn = recupererPpnbis("");
    xpicaCopyRecord();
    modifierNoticeElecEBook(ppn);

	prompts.alert(null,"transfoMonoElecEBookMonoImp : " , "une fois la notice validée, modifier le ppn " + ppn + " et ajouter la zone 452 ##$0 + le nouveau ppn généré");
	
    application.activeWindow.codedData = bCodedData;
}
 

function xpicaCopyRecord() {
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

function modifierRemplacerbis(zone,ancientexte,nouveautexte,presenceszone)
{
	var tabres = new Array;
	var i =0;
	var res = "" ; 
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
	
	do
	{
		application.activeWindow.title.startOfBuffer (false);	
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
		if (res != "")
        {
			if (zone == ancientexte) {
				if (zone == "702" || zone == "712")
				{
					if (res.search("\\$4340") != -1 )
					{
						// prompts.alert(null,"7[0|1]2 : ","avec $4340");
						tabres[i] = nouveautexte + res.substring(3) + "\n"; 
					}
					else {
						if (res.search("\\$4651") != -1 && zone == "712")
						{
							// 	prompts.alert(null,"712 : ","avec $4651");
							tabres[i] = nouveautexte + res.substring(3) + "\n"; 
						}
						else {
							// prompts.alert(null,"7[0|1]2 : ","sans $4340");
							if (zone == "702" && presenceszone == 1) {
								tabres[i] = nouveautexte + res.substring(3) + "\n";
							}
							else {
								if (zone == "712" && presenceszone ==1) {
									tabres[i] = nouveautexte + res.substring(3) + "\n";
								}
								else {
									tabres[i] = zone + res.substring(3) + "\n";
								}
							}
						}
					}
				}		
				else {
					// prompts.alert(null,"pas 7[0|1]2 : ",zone);
					tabres[i] = nouveautexte + res.substring(3) + "\n"; 
				}
			}
			else {	
				// prompts.alert(null,"Autre : ",zone);
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

function presencesouszone(zone,souszone1,souszone2)
{
	var result = 0;
	var n = 0 ;
	var res = "" ; 
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
	
	for (n=0; n<30; n+=1)
	{
		application.activeWindow.title.startOfBuffer (false);	
		res = application.activeWindow.title.findTag (zone, n, true, true, false);
		if (res != "" ) {
			if (res.search(souszone1) != -1 || res.search(souszone2) != -1) {
				// prompts.alert(null,"702 : ","avec $4340");
				result = 1; 
			}
		}	
	}
return result;	
}