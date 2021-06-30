/************************************************************************************************
 * 
 *	This file contains the standard WinIBW script functions for Base d'appui
 *
 *************************************************************************************************
 *************************************************************************************************
 *	$Header$
 *	
 *	Script mis à jour en juin 2012 pour y intégrer le contenu de "choix-copie"
 *  un écran avant la copie permet de choisir de garder ou non les identifiants
 * 20120723 MTE : ajoute definition variable testaut
 * 20120802 MTE : corrige pb confusion autorite/biblio
 * 20140904 MTE : vérification de la majuscule de la variable "Autorite".
 * 2014-10-09 : mte : vérif pour mise en prod 181/182
 *	
 **************************************************************************************************	
 */
 const msgAppuiRequired = "Vous devez être connecté à la Base d'Appui pour pouvoir utiliser cette fonction !";
 const msgSURequired    = "Vous devez être connecté au Sudoc pour pouvoir utiliser cette fonction !";;
 const msgRecordCopied  = "Notice copiée de la Base d'Appui";
 const msgEditRequired  = "Vous devez être en modification de notice pour pouvoir utiliser cette fonction !";
 const msgNoHits		= "Aucune réponse trouvée dans la Base d'Appui.";
 
 
 function searchLink(doExact) {
	// check if we are in SUDoc
	var sys = application.activeWindow.getVariable("system");
	var bes = application.activeWindow.getVariable("database");

	if (((sys.search(/SU/g) == -1) && (sys.search(/Su/g) == -1)) || (bes.search(/Catalog/g) == -1)) {
		application.messageBox("WinIBW 3", msgSURequired, "error-icon");
		return;
	}
	
	// check that we are editing a title
	if (!application.activeWindow.title) {
		application.messageBox("WinIBW 3", msgEditRequired, "error-icon");
		return;
	}
	
	// switch to base d'appui
	application.activeWindow.command("\\bes 1.3", true);
	if (application.activeWindow.status != "OK") {
		return;
	}
	application.activeWindow.closeWindow();
	
	// call the appropriate standard script function
	if (doExact) {
		picaSearchLinkExact();
	} else {
		picaSearchLink();
	}

	// check if we found something
	if ((application.activeWindow.status != "OK") ||
		(application.activeWindow.messages.count > 0)) {

		var theMessage = "";
		
		if (application.activeWindow.messages.count > 0) {
			theMessage = application.activeWindow.messages.item(0).text;
		} else if (application.activeWindow.status == "NOHITS") {
			theMessage = msgNoHits;
		}
		
		// switch back to SuDoc
		application.activeWindow.command("\\bes 1.1", true);
		if (application.activeWindow.status == "OK") {
			application.activeWindow.closeWindow();
		}

		application.messageBox("WinIBW 3", theMessage, "message-icon");
	}
 }
 
 function searchLinkInAppui() {
	searchLink(false);
 }
 
 function searchLinkExactInAppui() {
	searchLink(true);
 }
 
 
 
 /********************************************************************************************
  * This function copies a record found in Base d'Appui to the Sudoc by using the standard
  * script function 'picaCopyRecord' Plus, choix-copie de Patrick
  * Corrigé le 2012-08-02 par MTE : ne creait pas les notices autorite, corrige suivant standard_copy qui fonctionne bien.
  ********************************************************************************************/
 /*function copyRecordToSudoc() */
 //choix 1) Décrire le meme document (la meme autorité) que la notice a copier
//choix 2) Décrire un autre document (une autre autorité) que la notice a copier
var Autorite=false;
var NbRes="";
var ZoneATraiter="";
function copyRecordToSudoc()
{
var tabres = new Array;
var res="";
var input = {value: "1"};
var check= {value: false};
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]  
   .getService(Components.interfaces.nsIPromptService);  
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]  
                        .getService(Components.interfaces.nsIPromptService);  
  
var check = {value: false};                  // default the checkbox to false  
  
var flags = prompts.BUTTON_POS_0 * prompts.BUTTON_TITLE_IS_STRING  +  
            prompts.BUTTON_POS_1 * prompts.BUTTON_TITLE_CANCEL +
			prompts.BUTTON_POS_2 * prompts.BUTTON_TITLE_IS_STRING;  
// This value of flags will create 3 buttons. The first will be "Save", the  
// second will be the value of aButtonTitle1, and the third will be "Cancel"  
  
var button = prompts.confirmEx(null, "Choix Copie", "Que voulez-vous faire ?",  
                               flags, "Décrire le même document (la même autorité) que la notice à copier", "", "Décrire un autre document (une autre autorité) que la notice à copier", null, check);  
  
// The checkbox will be hidden, and button will contain the index of the button pressed,  
// 0, 1, or 2.  
 
//var items = ["Décrire le même document (la même autorité) que la notice à copier ", "Décrire un autre document (une autre autorité) que la notice à copier"]; // liste d'éléments  
  
//var selected = {};  
  
//var result = prompts.select(null, "                             Choix Copie                                     ", "Que voulez vous faire?", items.length, items, selected);  
//if (result == false) selected.value = 3;
// result vaut true si le bouton OK est actionné, false si c'est le bouton Cancel.  
// selected contient l'index de l'élément sélectionné. Accédez à cet élément avec selected items[selected.value].  
		  
//var result = prompts.prompt(null, "Choix de la copie", "0) sortir\r\n1) Décrire le meme document (la même autorité) que la notice à copier.\r\n 2) Décrire un autre document (une autre autorité) que la notice a copier", input,"", check);
NbRes = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
var TestNotice = application.activeWindow.getVariable("P3CLIP"); // recupère l'info de la notice
var Testaut = application.activeWindow.getVariable("P3VMC"); // recupère l'info de la notice
if (Testaut.substr(0,1) == "T") {Autorite = true ;} else {Autorite = false ;} // ajouté le 09/07/12 info comme dans standard_copy pour différncier bib d'aut
if (TestNotice == "") return;

	if (button == "0") {
		AbesCopyNotice();
		suptag("E");
		suptag("L");
		application.activeWindow.title.startOfBuffer (false);
		ZoneATraiter = application.activeWindow.title.findTag("003", 0, false, true, true);
		if (ZoneATraiter.indexOf("sudoc",0) != 0) suptag("003");
		suptag("00A");
	}
	if (button == "2") {
		AbesCopyNotice();
		application.activeWindow.title.startOfBuffer (false);
		//ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);//
//		if (ZoneATraiter.substr(0,3) == "$aT") autorite = true; // notice autorité ou pas

		if (Autorite) {
		    suptag("Cré");
			suptag("00A");
			suptag("003");
			suptag("010");
			suptag("035");
			suptag("3");
			suptag("801");
			suptag("815");
			suptag("816");
			suptag("817");
			suptag("818");
			suptag("819");
			suptag("82");
			suptag("83");
			suptag("84");
			suptag("85");
			suptag("86");
			suptag("87");
			suptag("88");
			suptag("89");
			suptag("E");
			suptag("L");
			suptag("103");
			// ajout de "103 ##$a\n"
			application.activeWindow.title.endOfBuffer(false);
			application.activeWindow.title.insertText("103 ##$a\n");
			suptag("810");
			application.activeWindow.title.endOfBuffer(false);
			application.activeWindow.title.insertText("810 ##$a\n");
		} else {
			suptag("Cré");
			suptag("00A");
			suptag("001");
			suptag("000");
			suptag("002"); 
			suptag("003"); 
			suptag("004"); 
			suptag("005"); 
			suptag("006"); 
			suptag("010"); 
			suptag("011"); 
			suptag("012"); 
			suptag("013");
			suptag("014");
			suptag("015");
			suptag("017");
			suptag("020"); 
			suptag("021"); 
			suptag("022");
			suptag("023"); 
			suptag("024"); 
			suptag("029");
			suptag("033");
			suptag("034");
			suptag("035"); 
			suptag("040"); 
			suptag("071"); 
			suptag("072"); 
			suptag("073"); 
			suptag("100");
			suptag("211");
			suptag("3");
			suptag("8");
			suptag("E");
			suptag("L");
			application.activeWindow.title.endOfBuffer(false);
			application.activeWindow.title.insertText("100 0#$a\n");
			suptag("205");
			application.activeWindow.title.startOfBuffer (false);
			res = application.activeWindow.title.findTag("210", 0, true, true, false);
			if (res != "") {
				// suppression du $d
				tabres = res.split("$");
				out = tabres[0];
				for (i=1; i<=tabres.length-1; i++) {
					//application.messageBox(res + " : tabres", "i=" + i + " tabres[i]= " + tabres[i] + "nb element=" + tabres.length, "");
					
					if (tabres[i].substr(0,1) != "d") out = out + "$" + tabres[i];
				}
				suptag("210");
				out = out + "$d\n"; //ajout de $d vide
				application.activeWindow.title.endOfBuffer(false);
				application.activeWindow.title.insertText(out);
			}
		}
	}
}

function suptag(tag)
{
//supression de la ligne tag tronqué ou non
var res="x";
while (res != "") {
	application.activeWindow.title.startOfBuffer (false);
	res = application.activeWindow.title.findTag(tag, 0, true, true, false);
	if (res != "") application.activeWindow.title.deleteLine(1);;
}
}

function AbesCopyNotice() {
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
	if (Autorite == true) application.activeWindow.command("cre e", false);
//	application.messageBox("autorité", Autorite, "");
	if (Autorite == false) application.activeWindow.command("cre", false);
//	application.messageBox("autorité", Autorite, "")
	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}
 
 /********************************************************************************************
  * This function switches back to Sudoc. If only one window is open, it opens another window,
  * switches system and closes the window again (thus leaving the window in its original state
  * besides from the underlying system switch). If multiple windows are open, it assumes that
  * the active window may be used to perform the switch (and be closed later).
  ********************************************************************************************/
 function switchToSudoc() {
	application.activeWindow.command("\\bes 1.1", (application.windows.count == 1));
	if (application.activeWindow.status == "OK") {
		application.activeWindow.closeWindow();
	}
 }