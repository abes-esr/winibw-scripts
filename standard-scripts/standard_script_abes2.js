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
function modifier181bis()
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

function modifier200bis()
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
function modifier200bisEBook()
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
    modifier200bis();
//	ajouterbis("205 ##$a[Reproduction en fac-similé]");
    supprimerbis("210");
    supprimerbis("215");
	supprimerbis("225");
	supprimerRemplacer("219","219 #X$a[A compléter par la mention d’édition ou de diffusion]$c$d");
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
    supprimerbis("801");
    supprimerbis("802");
    supprimerbis("830");
    ajouterbis("856 4#$qFormat$uURL$2Texte du lien$zAccès au texte intégral");
   
   
}
function recupererPpnbis()
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
   
    var ppn = recupererPpnbis();
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
	modifier200bis();
    supprimerbis("210");
	supprimerbis("215");
	supprimerbis("225");
	modifier181bis();
	supprimerRemplacer("182","182 ##$P01$cc");
	supprimerRemplacer("183","183 ##$P01$aceb");
	//on ajoute la $219 ou bien on la remplace si elle existe déjà
	supprimerRemplacer("219","219 #0$aLieu de publication$cNom de l'éditeur$dDate de publication");
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
	modifier200bisEBook();
	supprimerRemplacer("210","210 ##[A TRANSFORMER EN 219]$a$c$d");
	ajouterbis("215 ##$a[Type de présentation matérielle et importance matérielle]$c[Autres caractéristiques matérielles]$d[Dimensions]$eMatériel d'accompagnement");
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
	supprimerbis("579");
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
   
    var ppn = recupererPpnbis();
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
   
    var ppn = recupererPpnbis();
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