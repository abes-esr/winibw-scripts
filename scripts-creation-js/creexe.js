//2014-10-09 : mte : juste changement de date
function CreexeNumero() {
	var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
	application.activeWindow.command("\\TOO unm", false);

	if (application.activeWindow.getVariable("scr") == "8A") {
		var matCode = application.activeWindow.materialCode;

		// Verify that this is a title record:
		if (gPicaUtility.isAuthority(matCode)) {
			application.messageBox("WinIBW 3", "C'est une notice autorite, pas d'exemplaire!", "message-icon");
			return;
		}
		// Verify that it does not have b-status:
		if (matCode.charAt(2) == 'B') {
			application.messageBox("WinIBW 3", "C'est une notice en statut 'B', impossible de creer un exemplaire!", "message-icon");
			return;
		}

		//application.activeWindow.command("mod", false);

		// better check if it worked
		//if (!application.activeWindow.title) {
		//	application.messageBox("WinIBW 3",
		//					"Vous n'avez pas le droit de modifier une notice dans cette base.", "message-icon");
		//	return;
		//}

		// Find the first free copy record:
		var tagstr = "e01";
	  	var copynr = 1;

		application.activeWindow.command("cre " + tagstr, false);
		//application.messageBox("WinIBW 3",
		//					"status = " + application.activeWindow.status, "message-icon");

		while ((application.activeWindow.status == "ERROR")
			&& (copynr < 99)) {
			copynr++;
			if (copynr < 10) {
				tagstr = "e0" + copynr.toString();
			}
			else {
				tagstr = "e" + copynr.toString();
			}
			application.activeWindow.command("cre " + tagstr, false);
			//if (application.activeWindow.status == "ERROR") application.activeWindow.simulateIBWKey("FE");
		}

		// Close the edit window
		//Fonction rendue possible sans modifier la notice biblio par Patrick Desmiez en juin 2011
		//Il utilise cre au lieu de mod, c'est simple.
		//application.activeWindow.simulateIBWKey("FE");

		// Enable Coded Data, to ensure the default tag values:
		application.activeWindow.noviceMode = true;

		// Open the edit window for the first available copy record
		//application.activeWindow.command("\\INV " + tagstr, false);
		//application.activeWindow.command ("cre " + tagstr, false);
		//question voules-vous passer en mode expert desactivee le 2001-07-13 par MTE
		// Ask the user if novice mode is desired:
		//var prompter = utility.newPrompter();
		//if (prompter.confirmEx("WinIBW 3", "Voulez-vous passer en mode expert?", "Oui", "Non", "", "", "") == 0) {
		//	application.activeWindow.noviceMode = false;
		//}
	}
}
