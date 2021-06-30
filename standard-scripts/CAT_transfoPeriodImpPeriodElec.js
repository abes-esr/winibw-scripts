// 2014-10-09 : mte : adaptation pour 181/182, enlève $b du 200
// charge l'objet d'accès à winIbw
//2014-12-01 : mte : correction fonction recupererPpn : on utilise la variable p3, pas la zone
//2015-12-02 : SRY : Suppression de la zone 301 
//2018-01-04 : SRY : remplacer zone 183
//

var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
        .getService(Components.interfaces.IApplication);
		  
function onLoad()
{
	// à l'ouverture de la boîte de dialogue
	
	return true;
}		  
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez cliqué sur Annuler, Rien ne sera modifié.");
	return true;
}	  

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
	
	// crée une notice vide (cre)
	application.activeWindow.command("\\inv 1", false);
	
	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}


function modifier200()
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag ("200", 0, true, true, false);
	if (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer (false);
		application.activeWindow.title.insertText (res.replace("$bTexte imprimé","") + "\n");
	}
}
// renvoieNouvelle210 : passer en paramètre la zone 210##actuelle, la zone 210##modifiée est renvoyée
function renvoieNouvelle210(chaine)
{
	//chaine = "210 ## $aAAAA$cfffff$cEEEEE$dTOTO$fddddachanger$zTexte imprimé$fqqqqq";
	pos$d = chaine.indexOf("$d");
	
	if (pos$d != -1)
	{
		// si $d est présent
		pos$d += 2;// décallage de 2 pour ne pas inclure "$d"
		sousChaine = chaine.substring(pos$d, chaine.length);
		// recherche du prochain dollar
		pos$suivant = sousChaine.indexOf("$");
		if (pos$suivant == -1)
		{
			// cas où il n'y a pas de dollar après $d (fin de chaîne)
			pos$suivant = chaine.length - pos$d;
		}
		// récup. du texte entre $d et le dollar suivant
		contenu$d = chaine.substring(pos$d, pos$d + pos$suivant);
		
		chaine = chaine.replace("$d" + contenu$d, "$d[199.]-");
		
	}
	else
	{
		// pas de $d
		// recherche du dernier $c de la chaîne
		pos$c = chaine.lastIndexOf("$c");
		// décallage de 1 pour ne pas inclure le $ de "$c"
		pos$c += 1;
		sousChaine = chaine.substring(pos$c, chaine.length);
		// recherche du prochain $
		pos$suivant = sousChaine.indexOf("$");
		if (pos$suivant == -1)
		{
			// cas où il n'y a pas de dollar après $c (fin de chaîne)
			pos$suivant = chaine.length - pos$c;
		}
		pointInsertion = pos$suivant + pos$c;
		// récupération de la chaine jusqu'au point d'insertion (fin du texte du dernier $c)
		chaine = chaine.substring(0, pointInsertion);
		chaine += "$d[199.]-";
	}
	return chaine;
}
function supprimerRemplacer210()
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag ("210", 0, true, true, false);
	var aConserver = "";
	while (res != "")
	{
		if (res.substring(4,6) == "##")
		{
			aConserver = res;
		}
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag ("210", 0, true, true, false);
	}
	if (aConserver != "")
	{
		application.activeWindow.title.endOfBuffer (false);
		application.activeWindow.title.insertText (renvoieNouvelle210(aConserver) + "\n");
	}
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
function supprimer(zone)
{	
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	}
}
function ajouter(zone)
{
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (zone + "\n");
}

//20180104 : remplacer zone 183
function modifierNotice(ancienPpn)
{
	application.activeWindow.title.startOfBuffer (false);
	
	supprimer("000");
	supprimer("00A");
	supprimer("002");
	supprimer("003");
	supprimerRemplacer("008", "008 $aObx3");
	supprimer("010");
	supprimer("011");
	supprimer("035");
	supprimerRemplacer("100", "100 0#$a199X$d199X-...");
	supprimer("106");
	supprimerRemplacer("135", "135 $ad$br");
	supprimerRemplacer("181","181 ##$P01$ctxt");
	supprimerRemplacer("182","182 ##$P01$cc");
	supprimerRemplacer("183","183 ##$P01$aceb");
	modifier200();
	supprimer("207");
	supprimerRemplacer210();
	supprimer("215");
	supprimer("225");
	supprimerRemplacer("230", "230 $aDonnées textuelles");
	supprimer("301");
	ajouter("303 $anombre de pages générées par l'impression du document, lorsque ce document est paginé");
	supprimerRemplacer("304", "304 $aTitre provenant de l'écran-titre");
	//  supprimer les 4XX
	for (var i = 0; i < 10; i++)
	{
		supprimer("40" + i);
	}
	for (var i = 10; i < 100; i++)
	{
		supprimer("4" + i);
	}
	// supprimer les 3XX
	for (var i = 0; i < 10; i++)
	{
		if (i != 1 && i != 4)// conserver les nouvelles 301 et 304 créées plus haut...
		{
			supprimer("30" + i);
		}
	}
	for (var i = 10; i < 100; i++)
	{
		supprimer("3" + i);
	}
	ajouter("337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)");
	ajouter("452 $0" + ancienPpn);
	supprimer("530");
	supprimer("531");
	supprimer("801");
	supprimer("802");
	supprimer("830");
	ajouter("856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)");
	
}
function recupererPpn()
{
	application.activeWindow.command("mod", false);
	//var zone001 = application.activeWindow.title.findTag ("001", 0, true, true, false);
	//var ppn = zone001.substring(4, zone001.length);
	ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
	application.activeWindow.simulateIBWKey("FE");
	return ppn;
	
}

function transfoPeriodImpPeriodElec()
{
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;
	
	var ppn = recupererPpn();
	picaCopyRecord();
	modifierNotice(ppn);
	
	application.activeWindow.codedData = bCodedData;
}