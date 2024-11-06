// charge l'objet d'accès à winIbw
//var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
//          .getService(Components.interfaces.IApplication);
// renvoie un objet 'fichier en sortie'
// modif mte le 2012/06/08 le message et espacement entre blocs
// ligne 116, modif IAN pour trouver et exporter ppn zone 003 et pas 001, remis sur serveur le 20120723
// 2014-10-09 verifie MTE pour mettre ? jour la date du fichier + coded data off
// 2015-03-19 verifie IAN pour mettre enlever l'espace en trop entre certaines adresses mails (ligne 194 espace en trop entre les "" en bout de ligne
// 2015-11-16 SRY : ajout dialogbox pour choix s?parateur entre le adresses mails et r?solution du probl?me d'adresse undefined

const fabriqueFichier =
{
	nouvFichier : function()
	{
		return Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	},
    nouvFichierSortie: function()
    {
    	return Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
    },
    nouvFichierEntree : function()
    {
    	return Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
    }
};
// renvoie un objet 'fichier en sortie'

function Correspondants()
{
var jour = new Date();

var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
var nomFichierEntreeSaisi;
var choix = "";
var PPN = "";
var reste = 0;
var fichier = fabriqueFichier.nouvFichier();
var nsIFilePicker = Components.interfaces.nsIFilePicker;
var fileChooser = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
// modeSave
	fileChooser.init(null, "**** SELECTIONNEZ LE FICHIER EN SORTIE POUR LES CORRESPONDANTS ****",nsIFilePicker.modeSave);
	fileChooser.appendFilter("Fichiers Textes","*.txt");
var chaine = "";
var tabcorcat = new Array;
var tabcorcat2 = new Array;
var tabadresse = new Array;
var tabtitre = new Array;
var cpt = 0;
var i=0;
var j=0;
var out = "";
var interval1 = 0;
var interval2 = 0;
var NbRes = 0;
var courrant = 0;
var input = {value: "non"};
var check= {value: false};
var sepreturn = true;

var ppnv = "";
	var resultat = fileChooser.show();
	// 0 correspond ? cliquer sur 'ok'
	if (resultat == 2) resultat = 0;
	if (resultat == 0)
	{
		choix = fileChooser.file.path ;
		nomFichierEntreeSaisi = fileChooser.file.leafName;
		//alert(fileChooser.file.isFile());
	}
	if (choix == "") {
	      prompts.alert(null,"fichier sortie : " , "aucune action n'est faite");
		  return;
		  }
		fichier.initWithPath( choix );
		//prompts.alert(null,"fichier sortie : " , choix);
		fichierSortie = fabriqueFichier.nouvFichierSortie();
		// 0x02 nouveaux 0x10 appending
		fichierSortie.init(fichier, 0x02 | 0x08 | 0x10, 0664, 0);
		// fichierSortie.init(fichier, 0x02 | 0x08 | 0x20, 0666, 0);
		NbRes = application.activeWindow.getVariable("P3GSZ");
		status = application.activeWindow.getVariable("P3GSE");
		ppnv = application.activeWindow.getVariable("P3GTI");
		affichage = application.activeWindow.getVariable("P3GPR");
		// prompts.alert(null,"ppn: " , "ppn = " + ppnv);
		//prompts.alert(null,"status = : " , status);

// SRY le 16-11-2015
// choix du separateur entre les adresses email
 do {
	var sepinput = {value: ";"};
	sepreturn = prompts.prompt(null, "Correspondants", "Choix du s?parateur entre les adresses mails : ';' ou ','", sepinput,"", check);
}
while (sepreturn == true && sepinput.value != ";" && sepinput.value != ",")
if (sepreturn == false) {
	prompts.alert(null,"fichier sortie : " , "aucune action n'est faite, s?parateur entre les adresses mails non saisi");
	return;
}


//si lot
if (affichage == "K") ppnv = "";
if (ppnv != "") NbRes = 1;
if (NbRes>1) result = prompts.prompt(null, "Correspondants", "Attention vous êtes sur un lot de notices, voulez vous le parcourir entièrement ? (oui/non)", input,"", check);
if (input.value == "non") {
    if (ppnv == "") NbRes = 0;
	if (ppnv == "") prompts.alert(null,"fichier sortie : " , "aucune action n'est faite");
	}
	deb = 1;
	if (ppnv !="") {
	    NbRes = ppnv;
		deb = ppnv;
		//application.activeWindow.command("che ppn " + ppnv,false);
		}
for (courrant=deb; courrant<=NbRes; courrant++) {
        // init variable
		chaine = "";
		tabcorcat = new Array;
		tabcorcat2 = new Array;
		tabadresse = new Array;
		tabtitre = new Array;
		cpt = 0;
		i=0;
		j=0;
		out = "";
		interval1 = 0;
		interval2 = 0;
		// fin init
		application.activeWindow.codedData = false;
		application.activeWindow.command("mod " + courrant,false);
		application.activeWindow.title.startOfBuffer (false);
		titre = application.activeWindow.title.findTag("200", 0, false, true, true);
		application.activeWindow.title.startOfBuffer (false);
		PPN = application.activeWindow.title.findTag("003", 0, false, true, true);
		if (PPN == "") {
		prompts.alert(null,"fichier sortie : " , "aucune action n'est faite, ppn inexistant")
		return;
		}
		application.activeWindow.title.startOfBuffer (false);
		CORCAT = application.activeWindow.title.findTag("000", 0, false, true, true);
		chaine = "*********** Lot " + status + " Notice :" + courrant + " ***************************\r\n\r\n";
		fichierSortie.write(chaine, chaine.length);
		if (CORCAT != "") {
		CORCAT = CORCAT.substr(2,CORCAT.length-2);
		//prompts.alert(null,PPN , CORCAT);

		tabcorcat = CORCAT.split(",");
		for (i=0;i<tabcorcat.length;i++) {
			if (tabcorcat[i].indexOf("-") > 0) {
				interval1 = tabcorcat[i].substr(0,tabcorcat[i].indexOf("-"));
				interval2 = tabcorcat[i].substr(tabcorcat[i].indexOf("-")+1, tabcorcat[i].length);
				for (j = interval1;j<=interval2; j++) {
					tabcorcat2[cpt] = j;
					cpt = cpt + 1;

				}

			}
			else {
		           tabcorcat2[cpt] = tabcorcat[i];
				   cpt = cpt + 1;
		     }
		}
		}
		if (CORCAT == "") {
		   //prompts.alert(null,"ERREUR : " , "PAS DE LOCALISATION POUR CETTE NOTICE");
		   application.activeWindow.simulateIBWKey("FE");
		   } else {
		   //che ppn 15177059X
		application.activeWindow.command("che ppn 149304951",false);
		application.activeWindow.command("mod",false);
		//msg = application.activeWindow.simulateIBWKey("PF5");
		//msg = application.activeWindow.simulateIBWKey("PF5");
		//prompts.alert(null,"ERREUR : " , msg);
		application.activeWindow.title.startOfBuffer (false);
		// SRY le 16/11/2015 passage de 400 ? 500 pour prendre en compte les ILN > 400 (probl?me d'adresse undefined)
		for (i=0; i<500;i++) {
		   tabadresse[i] = "";
		   }
		var len = 0;
		for (i=0; i<10500; i++) {
		    application.activeWindow.title.startOfBuffer (false);
		    chp = application.activeWindow.title.findTag("810", i, false, true, true);
			// prompts.alert(null,"ERREUR : " , "indice 1" + chp.substr(4,chp.indexOf("$b")-4));
			// prompts.alert(null,"ERREUR : " , "indice 2" + chp.substr(chp.indexOf("$b")+2, chp.length));
			if (chp !="") tabadresse[chp.substr(4,chp.indexOf("$b")-4)] = tabadresse[chp.substr(4,chp.indexOf("$b")-4)] + chp.substr(chp.indexOf("$b")+2, chp.length) + sepinput.value;
			if (chp != "") len = len + tabadresse[chp.substr(4,chp.indexOf("$b")-4)].length;

			if (chp == "") i=10501;
		}
		chaine = "Liste des correspondants catalogage des " + cpt + " bibliothèque(s) localis\u00e9e(s) sous la notice ppn " + PPN +",\r\n";
		fichierSortie.write(chaine, chaine.length);
		var mois = 0;
		mois = jour.getMonth();
		mois = mois + 1;
		chaine = "?tablie le " + jour.getDate() + "/" + mois + "/" + jour.getFullYear() + "\r\n\r\n";
		fichierSortie.write(chaine, chaine.length);
		tabtitre = titre.split("$");
		tabtitre[1] = tabtitre[1].substr(1,tabtitre[1].length);
		for (i=2; i<tabtitre.length; i++) {
		     if (tabtitre[i].indexOf("e") == 0) out = tabtitre[i].substr(1,tabtitre[i].length);
		}
		tabtitre[1] = tabtitre[1].replace("@"," ");
		if (out != "") chaine = "[WinIBW] ppn " + PPN + " : " + tabtitre[1] + " : " + out + "\r\n\r\n\r\n";
		if (out == "") chaine = "[WinIBW] ppn " + PPN + " : " + tabtitre[1] +  "\r\n\r\n\r\n";
		fichierSortie.write(chaine, chaine.length);
		chaine = "\r\n***** Attention *********, il faut copier les adresses bloc par bloc dans la messagerie (un bloc=1000 caractères maximum), le copier-coller de l'ensemble pose problème avec certains logiciels de messagerie ********\r\n\r\n\r\n\r\n";
		fichierSortie.write(chaine, chaine.length);
		chaine = "";
		reste = 0;
		for (i=0; i<cpt; i++) {
			if (tabadresse[tabcorcat2[i]] != "") chaine = chaine + tabadresse[tabcorcat2[i]] + "";
			if (tabadresse[tabcorcat2[i]] != "") reste = reste + tabadresse[tabcorcat2[i]].length;
			if (reste > 800) {
			   chaine = chaine + "\r\n\r\n\r\n\r\n";
			   reste = 0;
			   }
		}

		fichierSortie.write(chaine, chaine.length);
		chaine = "\r\n";
		fichierSortie.write(chaine, chaine.length);
		chaine = "\r\n";
		fichierSortie.write(chaine, chaine.length);
		//chaine = "*********************************************************************************";
		//fichierSortie.write(chaine, chaine.length);
		chaine = "\r\n";
		fichierSortie.write(chaine, chaine.length);
		chaine = "\r\n";
		fichierSortie.write(chaine, chaine.length);
		application.activeWindow.closeWindow(application.activeWindow.windowID);
		application.activeWindow.simulateIBWKey("FE");
		if (NbRes >= 2) application.activeWindow.simulateIBWKey("FE");
		if (NbRes >= 2) application.activeWindow.command("che S" + status,false);
		//application.activeWindow.closeWindow(application.activeWindow.windowID);
		//application.activeWindow.command("che ppn " + PPN,false);
		}
}
		prompts.alert(null,"fichier sortie : " , choix);
}
