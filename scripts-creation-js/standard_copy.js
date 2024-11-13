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
var Testaut = application.activeWindow.getVariable("P3VMC"); // recupere l'info de la notice
var button = prompts.confirmEx(null, "Choix Copie :" + Testaut, "Que voulez-vous faire ?",
                               flags, "D\u00e9crire le m\u00eame document (la m\u00eame autorit\u00e9) que la notice \u00e0 copier", "", "D\u00e9crire un autre document (une autre autorit\u00e9) que la notice \u00e0 copier", null, check);

NbRes = application.activeWindow.getVariable("P3GPP"); // recupere le ppn
var TestNotice = application.activeWindow.getVariable("P3CLIP"); // recupere l'info de la notice

if (Testaut.substr(0,1) == "T") {Autorite = true ;} else {Autorite = false ;}
if (TestNotice == "") return;

	if (button == "0") {
		PatrickCopyNotice();
		application.activeWindow.codedData = false;
		ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);

		suptag("Nom");
		suptag("E");
		suptag("L");

		//Je regarde si la notice est une notice d'autorite, si c'est pas le cas je supprime la 003
		ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);
		if (ZoneATraiter.substr(0,3) != "$aT") {
			suptag("003");
		}

		suptag("00A");
		remplacerValeurZone700("7");
	}
	if (button == "2") {

		PatrickCopyNotice();
		application.activeWindow.codedData = false;
		ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);

		application.activeWindow.title.startOfBuffer (false);

		if (Autorite) {
		  suptag("Cr?");
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
			//application.messageBox("autorite", Autorite, "");
		} else {
			//suppression des zones propres a la notice source non copiable dans la notice destination
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
		//	application.messageBox("autorite", Autorite, "");
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
				//application.messageBox("autorite",Autorite, "")
				application.activeWindow.title.insertText(out);
			//	application.messageBox("autorite", Autorite, "");
			}
		}
	}



function suptag(tag)
{
//supression de la ligne tag tronque ou non
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
		//on recupère le contenu de la zone sans le libelle de la $4 :
		//l'index de fin est situe à la position de la $4 + 2 caractères de la sous zone + 3 caractères du code de fonction
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
// 					probleme derivation de notices.

function PatrickCopyNotice() {
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;
	application.activeWindow.noviceMode = false;
	//application.messageBox("autorite", Autorite, "");
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
	// cree une notice vide (cre)
	//if (Autorite == true) application.activeWindow.command("cre e", false);
//	application.messageBox("autorite", Autorite, "");
	application.activeWindow.command("cre", false);
//	application.messageBox("autorite", Autorite, "")
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
