 /********************************************************************************************
  * This function copies a record found in Base d'Appui to the Sudoc by using the standard
  * script function 'picaCopyRecord' 
  * La fonction 'picaCopyRecord' a �t� am�lior�e par PDZ (integration de ChoixCopie).
  * R?vis? et test? par MTE le 2012-06-25
  * Correction par Patrick Desmiez le 2012-09-10 : ajout des zones 010 et 320 vides.
  * Correction par PDZ le 2013-08-27 : distinction biblio/autorite dans tous les cas
  * abesCopyNotice est renomme PatrickCopyNotice
  * Correction par MTE le 2013-09-17
  * La derni?re correction est la mise en "off" des grilles de donn?es
  * cod?es, avant de passer la commande "cre" ou "cre e"
  * 2014-10-09 : mte : verification pour 181-182 : RAS
  * 2016-02-08 : SRY : pour l'option "d�crire un autre document(autorit�)que la notice copi�e", supprimer la zone 033.
  * 2017-03-28 : SRY/OCLC : Modification pour correction probl�me d�rivation de notices.
  * 2020-01-01 : SRY : suppression de la ligne "Nombre des titres lies ...." lors de la copie d'une autorit� et int�gration de la fonction PatrickCopyNotice � la fonction picaCopyRecord
  ********************************************************************************************/
 /*function copyRecordToSudoc() */
 //choix 1) D�crire le meme document (la meme autorit�) que la notice a copier
//choix 2) D�crire un autre document (une autre autorit�) que la notice a copier
var Autorite = false;
var NbRes="";
var ZoneATraiter="";
function picaCopyRecord()
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
var Testaut = application.activeWindow.getVariable("P3VMC"); // recup?re l'info de la notice
var button = prompts.confirmEx(null, "Choix Copie :" + Testaut, "Que voulez-vous faire ?",  
                               flags, "D�crire le m�me document (la m�me autorit�) que la notice � copier", "", "D�crire un autre document (une autre autorit�) que la notice � copier", null, check);
  
// The checkbox will be hidden, and button will contain the index of the button pressed,  
// 0, 1, or 2.  
 
//var items = ["D?crire le m?me document (la m?me autorit?) que la notice ? copier ", "D?crire un autre document (une autre autorit?) que la notice ? copier"]; // liste d'?l?ments  
  
//var selected = {};  
  
//var result = prompts.select(null, "                             Choix Copie                                     ", "Que voulez vous faire?", items.length, items, selected);  
//if (result == false) selected.value = 3;
// result vaut true si le bouton OK est actionn?, false si c'est le bouton Cancel.  
// selected contient l'index de l'?l?ment s?lectionn?. Acc�dez � cet �l�ment avec selected items[selected.value].
		  
//var result = prompts.prompt(null, "Choix de la copie", "0) sortir\r\n1) D�crire le meme document (la m�me autorit�) que la notice � copier.\r\n 2) D�crire un autre document (une autre autorit�) que la notice a copier", input,"", check);
NbRes = application.activeWindow.getVariable("P3GPP"); // recup?re le ppn
var TestNotice = application.activeWindow.getVariable("P3CLIP"); // recup?re l'info de la notice

//prompts.alert(null,"indicateur notice " , Testaut);
//application.messageBox("indicateur notice ", Testaut, "");
if (Testaut.substr(0,1) == "T") {Autorite = true ;} else {Autorite = false ;}
if (TestNotice == "") return;

	if (button == "0") {
		PatrickCopyNotice();
		application.activeWindow.codedData = false;
		ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);

		//if (ZoneATraiter.substr(0,3) == "$aT") Autorite = true ;
		//if (ZoneATraiter.substr(0,3) != "$aT") Autorite = false ;
		//application.messageBox("autorité", Autorite, "");
		//application.activeWindow.simulateIBWKey("FE", false);
		//application.messageBox("autorité", Autorite, "");
		// ajour SRY 20191014 (1 ligne)
		suptag("Nom");
		suptag("E");
		suptag("L");
		//JVK la suppression des deux lignes ci dessous permettent d'eviter la suppression de la 008
		//ZoneATraiter = application.activeWindow.title.findTag("003", 0, false, true, true);
		//if (ZoneATraiter.indexOf("sudoc",0) != 0) suptag("003");

		//JVK Je regarde si la notice est une notice d'autorité, si c'est pas le cas je supprime la 003
		ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);
		if (ZoneATraiter.substr(0,3) != "$aT") {
			suptag("003");
		}

		suptag("00A");
		remplacerValeurZone700("7");
	}
	if (button == "2") {
/*	application.activeWindow.command("mod", false);
	ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);
	if (ZoneATraiter.substr(0,3) == "$aT") {Autorite = true ;} else {Autorite = false ;}
	application.messageBox("autorit?", Autorite, "")
	application.activeWindow.simulateIBWKey("FE", false);*/
		PatrickCopyNotice();
		application.activeWindow.codedData = false;
		ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);
	//if (ZoneATraiter.substr(0,3) == "$aT") Autorite = true ;
	//if (ZoneATraiter.substr(0,3) != "$aT") Autorite = false ;
		//application.messageBox("autorit?", Autorite, "");
		application.activeWindow.title.startOfBuffer (false);
		
		if (Autorite) {
		    suptag("Cr?");
			// ajour SRY 20191014 (1 ligne)
			suptag("Nom");
			suptag("00A");
			suptag("003");
			suptag("010");
			suptag("033");
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
			//application.messageBox("autorit?", Autorite, "");
		} else {
			//suppression des zones propres ? la notice source non copiable dans la notice destination
			suptag("Cr?");
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
			remplacerValeurZone700("7");
			suptag("8");
			suptag("E");
			suptag("L");
			application.activeWindow.title.endOfBuffer(false);
			application.activeWindow.title.insertText("010 ##\n");
			application.activeWindow.title.endOfBuffer(false);
			application.activeWindow.title.insertText("100 0#$a\n");
			application.activeWindow.title.endOfBuffer(false);
			application.activeWindow.title.insertText("320 ##$a\n");
			
			
			suptag("205");
		//	application.messageBox("autorit�", Autorite, "");
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
				//application.messageBox("autorit�",Autorite, "")
				application.activeWindow.title.insertText(out);
			//	application.messageBox("autorit�", Autorite, "");
			}
			
			
			
			
		
		}
	}



function suptag(tag)
{
//supression de la ligne tag tronqu? ou non
var res="x";
while (res != "") {
	application.activeWindow.title.startOfBuffer (false);
	res = application.activeWindow.title.findTag(tag, 0, true, true, false);
	if (res != "") application.activeWindow.title.deleteLine(1);
}
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
		if(zone != ""){
			for (var j=1;j<sousZones.length;j++) {
				zone += "$4" + sousZones[j].substring(0, 3);
			}
			zone += "\n";
			application.activeWindow.title.deleteLine(1);
			application.activeWindow.title.insertText(zone);
		}
		i++;
	}
}
	


// 2017-03-28 : SRY/OCLC : Modification pour correction 
// 					probl�me d�rivation de notices.

function PatrickCopyNotice() {
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;
	application.activeWindow.noviceMode = false;
	//application.messageBox("autorit?", Autorite, "");
	var screen = application.activeWindow.getVariable("scr");
	var prefix = "";
	// if we are displaying a remote record, use the remote command for displaying it.
	if (screen == "RF") prefix = "\\REM ";
	application.activeWindow.command(prefix + "\\too unm", false);
	application.activeWindow.copyTitle();

	var matCode = application.activeWindow.materialCode;
	var forceDocType = matCode.substr(0, 2);

	
	application.activeWindow.command("\\sys 1; \\bes 1", false);
	
	
	application.activeWindow.materialCode = forceDocType;
	// cr�e une notice vide (cre)
	//if (Autorite == true) application.activeWindow.command("cre e", false);
//	application.messageBox("autorit�", Autorite, "");
	application.activeWindow.command("cre", false);
//	application.messageBox("autorit�", Autorite, "")
	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.codedData = false;
	//MTE	application.activeWindow.title.endOfBuffer(false);
	}
	application.activeWindow.title.startOfBuffer (false);
	ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);
	//application.messageBox("008 : ", ZoneATraiter, "");
	if (ZoneATraiter.substr(0,3) == "$aT") Autorite = true ;
	if (ZoneATraiter.substr(0,3) != "$aT") Autorite = false ;
	if (Autorite == true) {
	application.activeWindow.simulateIBWKey("FE", false);
	  application.activeWindow.command("cre e", false);
	  application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.codedData = false;
	//MTE	application.activeWindow.title.endOfBuffer(false);
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
}