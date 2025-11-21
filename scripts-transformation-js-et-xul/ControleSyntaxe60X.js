// charge l'objet d'accès a winIbw

//declaration d'une variable contenant le resume des messages
var Gmessage = "";
var NbRes = "";
var fois = 1;

//declaration d'une variable contenant les occurrences de zones
//var zones = [];
var zones = new Array();
function onLoad()
{
	return true;
}
function onCancel()
{
	return true;
}
function btnLancer_click()
{

var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);

	var codeErr;
	var ZoneATraiter="";
	var tagPrecedent = "";
	var tagCourant = "";

	//algorithme general d'execution des diverses fonctions ci-dessous
	//on execute telle ou telle fonction par rapport au code d'erreur retourne par la precedente

	//il existe au moins une zone 60X, on teste la valeur du bouton radio
	if (document.getElementById("notice").selected == true)
	{

		//on passe la notice en mode modification si elle ne l'est pas deja
		//if (application.activeWindow.title == null)
		//{
		    //  application.messageBox("Controle de syntaxe zones 60X", "notice copy", "");
		    //application.activeWindow.pressButton("PicaButton5"); // modif pdz
			//application.activeWindow.command("mod",false); modif pdz
			NbRes = application.activeWindow.getVariable("P3GPP");
			//if (application.activeWindow.title != null) fois += 1;
			application.activeWindow.command("che ppn " + NbRes, true);
			if (NbRes == "") {
			application.messageBox("Controle de syntaxe zones 60X", "Vous devez lancer le script sur une notice ! Fin de traitement", "");
			return;
			}
		    newCopyRecord();
		//}

		//on verifie d'abord la presence de zones 60X
		application.activeWindow.title.startOfBuffer(false);
		if (application.activeWindow.title.findTag("60", 0, true, true, false) == "")
		{
			application.activeWindow.simulateIBWKey("FE");
			application.messageBox("Controle de syntaxe zones 60X", "La notice ne contient aucune zone 60X ! Fin de traitement", "");
			return;
		}

		//memorisation du ppn pour retour ulterieur
		//var ppnInit = application.activeWindow.title.findTag("001", 0, false, false, false);

		//on lance une première boucle pour recuperer les zones 60X de la notice
		var j = 0;
		var i = 0;
		application.activeWindow.title.startOfBuffer(false);
		ZoneATraiter = application.activeWindow.title.findTag("60", j, true, true, false); // false, true, false
		while(ZoneATraiter != "")
		{
			tagCourant = application.activeWindow.title.tag;
			if (tagCourant != tagPrecedent)
			{
				j = 0;
				zones[tagCourant] = new Array();
			}
			zones[tagCourant][j] = new Array();

			initTab(tagCourant, j);

			//sortie de boucle
			j++;
			i++;
			tagPrecedent = tagCourant;
			application.activeWindow.title.startOfBuffer(false);
			ZoneATraiter = application.activeWindow.title.findTag("60", i, true, true, false);
		}
	}
	else
	{
		//on ne recupère que la zone courante
		application.activeWindow.title.startOfField(true);
		ZoneATraiter = application.activeWindow.title.currentField;
		tagCourant = application.activeWindow.title.tag;

		//memorisation du ppn pour retour ulterieur
		//var ppnInit = application.activeWindow.title.findTag("001", 0, false, false, false);

		//on retrouve l'occurrence
		var occurrence;
		application.activeWindow.title.startOfBuffer(false);
		var ZoneTemp = application.activeWindow.title.findTag(tagCourant, 0, true, true, false);
		var j = 0;
		while (ZoneTemp != -1)
		{
			if (ZoneTemp == ZoneATraiter)
			{
				break;
			}
			j++;
			application.activeWindow.title.startOfBuffer(false);
			ZoneTemp = application.activeWindow.title.findTag(tagCourant, j, true, true, false);
		}
		zones[tagCourant] = new Array();
		zones[tagCourant][j] = new Array();
		initTab(tagCourant, j);
	}

	//retour au debut de la notice pour examen de chaque zone
	application.activeWindow.title.startOfBuffer(false);

	for (var tag in zones)
	{
		for (var occurrence in zones[tag])
		{	application.activeWindow.title.startOfBuffer(false);
			var zoneCourante = application.activeWindow.title.findTag(tag, occurrence, true, true, false);
			//traitement 1
			if (lienNoticesAutorite(zoneCourante, tag, occurrence))
			{
				//traitement n2
				if (autoriteIncompatible(zoneCourante, tag, occurrence))
				{
					//traitement n3
					if (etiquetteCoherente(zoneCourante, tag, occurrence))
					{
						//traitement n4
						ordreAutorites(zoneCourante, tag, occurrence);
					}
				}
			}
		}
	}

	//affichage du tableau d'erreurs dans une popup
	application.activeWindow.simulateIBWKey("FE");
	if (Gmessage != "") {
		for (i = 1; i < fois; i++) {
		application.activeWindow.closeWindow();
		}
		application.activeWindow.command("che ppn " + NbRes, true);
	    application.messageBox("Controle de syntaxe zones 60X", Gmessage, "");
		 }
	else
	{
		if (document.getElementById("notice").selected == true) {
			for (i = 1; i < fois; i++) {
				application.activeWindow.closeWindow();
			}
			application.activeWindow.command("che ppn " + NbRes, true);
			application.messageBox("Controle de syntaxe zones 60X", "Aucune erreur n'a ete trouvee dans les zones de la notice", "");
			}
		else
			application.messageBox("Controle de syntaxe zones 60X", "Aucune erreur n'a ete trouvee dans cette zone", "");
	}
	//application.messageBox("Controle de syntaxe zones 60X", "fois= " + fois, "");

	//application.activeWindow.simulateIBWKey("FE");
	application.activeWindow.closeWindow();
	return true;
}


//fonction permettant de stocker les informations des notices d'autorites liees a une zone
function initTab(tag, occurrence)
{
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);

	var zoneCourante = application.activeWindow.title.findTag(tag, occurrence, true, true, false);

	//on parcours l'ensemble des autorites liees de la zone courante
	var ppnCourant;
	var position = 0;
	var cpt = 0;
	var indexPpn = zoneCourante.indexOf("$3", position);
	while (indexPpn != -1)
	{
		//recuperation du ppn
		indexPpn += 2;
		ppnCourant = zoneCourante.substr(indexPpn, 9);
		//recuperation d'informations pour le ppn courant

		application.activeWindow.simulateIBWKey("FE");

		application.activeWindow.command("che ppn " + ppnCourant, true);
		//application.activeWindow.pressButton("PicaButton5");
		//application.activeWindow.command("mod", false);
		//application.messageBox("Controle de syntaxe zones 60X", "copy notice", "");
		newCopyRecord();
		zones[tag][occurrence][cpt] = new Array();
		zones[tag][occurrence][cpt]["ppn"] = ppnCourant;
		//recuperation zone 008
		application.activeWindow.title.startOfBuffer(false);
		var zone008 = application.activeWindow.title.findTag("008", 0, false, true, false);
		zones[tag][occurrence][cpt]["008"] = zone008.substr(((zone008.indexOf("$a")) + 2), 2);

		//recuperation zone 106
		application.activeWindow.title.startOfBuffer(false);
		var zone106 = application.activeWindow.title.findTag("106", 0, false, true, false);
		zones[tag][occurrence][cpt]["106"] = new Array();
		//si tout ou partie de la zone 106 est vide on remplace les champs correspondants du tableau par des #
		if (zone106 == "")
		{
			zones[tag][occurrence][cpt]["106"]["a"] = "#";
			zones[tag][occurrence][cpt]["106"]["b"] = "#";
			zones[tag][occurrence][cpt]["106"]["c"] = "#";
		}
		else
		{
			zones[tag][occurrence][cpt]["106"]["a"] = zone106.substr(((zone106.indexOf("$a")) + 2), 1);
			zones[tag][occurrence][cpt]["106"]["b"] = zone106.substr(((zone106.indexOf("$b")) + 2), 1);
			(zone106.indexOf("$c") != -1) ? zones[tag][occurrence][cpt]["106"]["c"] = zone106.substr(((zone106.indexOf("$c")) + 2), 1) : zones[tag][occurrence][cpt]["106"]["c"] = "#";
		}

		position = indexPpn + ppnCourant.length;
		indexPpn = zoneCourante.indexOf("$3", position);
		cpt ++;
	}
application.activeWindow.simulateIBWKey("FE");

//application.activeWindow.closeWindow();
//fois = fois - 1;
application.activeWindow.command("che ppn " + NbRes, true);
newCopyRecord();

}

//pour toutes les fonctions suivantes, les messages d'erreur sont generes directement dans le code de la fonction

//fonction effectuant le traitement n°1 :
//verifier que la zones 60X contenant $2rameau ou $2fmesh est integralement liee a des notices d'autorite
//la fonction retourne true si aucun problème n'est detecte, false sinon pour indiquer qu'on n'effectue pas les autres traitements
function lienNoticesAutorite(zone, tag, occurrence)
{
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);

	var occurrenceAff = 1 + parseInt(occurrence, 10);
	//on verifie que la zone courante contient $rameau ou $fmesh

	if ((zone.indexOf("$2rameau") == -1) &&
		(zone.indexOf("$2fmesh") == -1))
	{
		//04-04-11 ORX : Suppression du message en sortie pour les zones non verifiees car trop gourmand en affichage
		//la zone ne contient ni $rameau ni $fmesh, on alimente le tableau d'erreur
		//Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " n'a pas ete verifiee";
		//on retourne true pour continuer l'execution des traitements 2, 3, 4
		return true;
	}

	if ((zone.indexOf("$2rameau") != -1) ||
	(zone.indexOf("$2fmesh") != -1))
	{
		//la zone courante contient $2rameau ou $2fmesh
		//on verifie les liens vers les notices d'autorite
		if (application.activeWindow.title.tag == "605")
		{
		    //application.messageBox("Controle de syntaxe zones 60X", "tag 605:" + zone + " " + tag , "");
			//si la zone courante est 605
			for (var j = 97 ; j < 123 ; j++)
			{	//application.messageBox("Controle de syntaxe zones 60X", "avant if ", "");
				if ((String.fromCharCode(j) != 'l') &&
					(String.fromCharCode(j) != 'm') &&
					(String.fromCharCode(j) != 'k') &&
					(String.fromCharCode(j) != 'q'))
				{
					//application.messageBox("Controle de syntaxe zones 60X", "avant charcode", "");
					var dollar = "$" + String.fromCharCode(j);
					//application.messageBox("Controle de syntaxe zones 60X", "apres charcode", "");
					if (zone.indexOf(dollar) != -1)
					{
						Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : Lien(s) autorite(s) manquant(s)";

						//application.messageBox("Controle de syntaxe zones 60X", "tag 605 false", "");
						return false;
					}
				}
			}
			return true;
		}
		else
		{
			for (var j = 97 ; j < 123 ; j++)
			{
				var dollar = "$" + String.fromCharCode(j);
				if (zone.indexOf(dollar) != -1)
				{
					Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : Lien(s) autorite(s) manquant(s)";
					//application.messageBox("Controle de syntaxe zones 60X", "tag 605 false", "");
					return false;
				}
			}
			//application.messageBox("Controle de syntaxe zones 60X", "tag 605 true", "");
			return true;
		}
	}
	return true;
}

//fonction effectuant le traitement n°2 :
//verifier que les autorites utilisees dans une zone 60X donnee ne sont pas incompatibles avec le $2 de la zone
function autoriteIncompatible(zone, tag, occurrence)
{
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);

	var cpt;
	var occurrenceAff = 1 + parseInt(occurrence, 10);

	//on teste la valeur du $2 : cas $2fmesh
	if (zone.indexOf("$2fmesh") != -1)
	{
		//on verifie que le type des notices d'autorite liees est fmesh (008 $aTl)
		for (cpt in zones[tag][occurrence])
		{
			if (zones[tag][occurrence][cpt]["008"] != "Tl") {
				Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : PPN " + zones[tag][occurrence][cpt]["ppn"] + " incompatible avec $2fmesh\n";
				return false;
			}
		}
	}

	//on teste la valeur du $2 : cas $2rameau
	if (zone.indexOf("$2rameau") != -1)
	{
		//on verifie que le type des notices d'autorite liees est != fmesh (008 $aTl)
		for (cpt in zones[tag][occurrence])
		{
			if ((zones[tag][occurrence][cpt]["008"] == "Tl") || (zones[tag][occurrence][cpt]["008"] == "Tw"))
			{
				Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : PPN " + zones[tag][occurrence][cpt]["ppn"] + " incompatible avec $2rameau\n";
				return false;
			}
		}
	}
	return true;
}

//fonction effectuant le traitement n°3 :
//verifier que l'etiquette de la zone est coherente avec les autorites liees presentes dans la zone
function etiquetteCoherente(zone, tag, occurrence)
{
	var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
		.getService(Components.interfaces.IApplication);

	var occurrenceAff = 1 + parseInt(occurrence, 10);

	//construction du tableau de correspondance tag => type de document lie
	var corres = [];
	corres["600"] = "Tp";
	corres["601"] = "Tb";
	corres["602"] = "Ta";
	corres["604"] = "Tq";
	corres["605"] = "Tu";
	corres["606"] = "Td";
	corres["607"] = "Tg";
	corres["608"] = "Tf";
	//on teste la valeur du $2 : cas $2fmesh
	if (zone.indexOf("$2fmesh") != -1)
	{
		//si le tag de la zone est different de 606 => erreur
		if (tag != "606")
		{
			Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : etiquette " + tag + " incompatible avec une indexation FmeSH\n";
		}
		//quel que soit le resultat de ce test, l'examen des zones contenant $2fmesh est termine
		return false;
	}

	//on teste la valeur du $2 : cas $2rameau
	if (zone.indexOf("$2rameau") != -1)
	{
		//le test suivant ne se fait que sur le premier ppn lie
		for (cpt in zones[tag][occurrence])
		{
			if (corres[tag] != zones[tag][occurrence][cpt]["008"])
			{
				Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][cpt]["ppn"] + " Tete de vedette " + zones[tag][occurrence][cpt]["008"] + " incompatible avec l'etiquette de la zone\n";
				//zone 606 inclusion tf8
				if (corres[tag] === "Td") {
					if (zones[tag][occurrence][cpt]["008"] !== "Td" && zones[tag][occurrence][cpt]["008"] !== "Tf") {
						Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][cpt]["ppn"] + " Tete de vedette " + zones[tag][occurrence][cpt]["008"] + " incompatible avec l'etiquette de la zone\n";
						return false;
					}
				}
				else if (corres[tag] != zones[tag][occurrence][cpt]["008"])
				{
					Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][cpt]["ppn"] + " Tete de vedette " + zones[tag][occurrence][cpt]["008"] + " incompatible avec l'etiquette de la zone\n";
					return false;
				}
				break;
			}
		}
		return true;
	}
}
	//fonction effectuant le traitement n°4 :
	//verifier lorsque la zone 60X contient $2 rameau, que l'ordre et la presence des notices d'autorite
	//dans la zone sont compatibles avec des informations codees presentes dans chacune des notices d'autorite (zone 106 $a $b et $c de la notice d'autorite liee)
function ordreAutorites(zone, tag, occurrence)
{
		var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
			.getService(Components.interfaces.IApplication);

		var occurrenceAff = 1 + parseInt(occurrence, 10);
		var position = 0;

		//ce test ne concerne que les zones contenant $2rameau
		if (zone.indexOf("$2rameau") != -1)
		{
			//premier examen de la tête de vedette : premier ppn lie
			//recuperation de la tête de vedette

			//verification que ce ppn peut être utilise comme vedette matière
			if ((zones[tag][occurrence][0]["106"]["a"] == "#") || (zones[tag][occurrence][0]["106"]["a"] == "1"))
			{
				Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][0]["ppn"] + " emploi en vedette matiere interdit";
			}

			//verification que ce ppn peut être utilise en tête de vedette
			if ((zones[tag][occurrence][0]["106"]["b"] == "#") || (zones[tag][occurrence][0]["106"]["b"] == "2"))
			{
				Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][0]["ppn"] + " emploi en tete de vedette erronne";
			}

			//test sur les ppn suivants de la zone s'ils existent
			for (var i = 1 ; i < zones[tag][occurrence].length ; i++)
			{
				//verification que ce ppn peut être utilise comme vedette matière
				if ((zones[tag][occurrence][i]["106"]["a"] == "#") || (zones[tag][occurrence][i]["106"]["a"] == "1"))
				{
					Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][i]["ppn"] + " emploi en vedette matiere interdit";
				}

				//verification que ce ppn peut être utilise comme subdivision
				if ((zones[tag][occurrence][i]["106"]["b"]	== "#") || (zones[tag][occurrence][i]["106"]["b"] == "1"))
				{
					Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][i]["ppn"] + " emploi en subdivision erronne";
				}

				//verification que ce ppn peut être utilise en subdivision geographique a cet endroit
				if (i < (zones[tag][occurrence].length))
				{
					if ( (zones[tag][occurrence][i]["008"] == "Tg")
						&& (i == 1)
						&& ( (zones[tag][occurrence][0]["106"]["c"] == "#")
							||   (zones[tag][occurrence][0]["106"]["c"] == "0")
							||   (zones[tag][occurrence][0]["106"]["c"] == "3")))
					{
						Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][i]["ppn"] + " subdivision geographique interdite a cet endroit";
					}

					if ( (zones[tag][occurrence][i]["008"] == "Tg")
						&& (i != 1)
						&& ( (zones[tag][occurrence][i-1]["106"]["c"] == "#")
							||   (zones[tag][occurrence][i-1]["106"]["c"] == "2")))
					{
						Gmessage += "zone " + tag + " occurrence " + occurrenceAff + " : ppn " + zones[tag][occurrence][i]["ppn"] + " subdivision geographique interdite a cet endroit";
					}
				}
			}
		}
		return true;
	}
function newCopyRecord()
{

		var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
			.getService(Components.interfaces.IApplication);

		var bCodedData = application.activeWindow.codedData;
		fois += 1;
		application.activeWindow.codedData = false;
		application.activeWindow.noviceMode = false;

		if (application.activeWindow.getVariable("scr") == "RF" || application.activeWindow.getVariable("scr") == "RB") {
			// external database
			//	 application.messageBox("Controle de syntaxe zones 60X", "notice copy 1", "");
			application.activeWindow.command("\\rem \\too " + NbRes, false);
		} else {
			// cbs database
			//		 application.messageBox("Controle de syntaxe zones 60X", "notice copy 2", "");
			application.activeWindow.command("\\too " + NbRes, false);
		}
		// application.messageBox("Controle de syntaxe zones 60X", "notice copy 3", "");
		application.activeWindow.copyTitle();

		var matCode = application.activeWindow.materialCode;
		var forceDocType = matCode.substr(0, 2);

		//if (gConfig.needSystemSwitch()) {
		application.activeWindow.command("\\sys 1; \\bes 1", false);
		//}
		//application.messageBox("Controle de syntaxe zones 60X", "notice copy 4", "");
		application.activeWindow.materialCode = forceDocType;

		//if (gPicaUtility.isAuthority(matCode)) {
		// insert authority
		//application.messageBox("Controle de syntaxe zones 60X", "notice copy 5", "");
		application.activeWindow.command("\\inv 1", false);
		//} else {
		// insert title
		//	application.activeWindow.command("\\inv 1", false);
		//}

		if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
			// application.messageBox("Controle de syntaxe zones 60X", "notice copy 6", "");
			application.activeWindow.pasteTitle();
			//if (bCodedData) {
			application.activeWindow.codedData = false;
			//}
			application.activeWindow.title.endOfBuffer(false);
		}

	}


